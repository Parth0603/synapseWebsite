"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PointMaterial } from "@react-three/drei";
import { MotionValue } from "framer-motion";
import * as THREE from "three";

// ============================================================================
// CINEMATIC WEBGL SHADER SYSTEM
// ============================================================================

// Vertex Shader drives organic rippling waves along depth coordinates
const DecagonRingVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying float vDepth;
  uniform float uScroll;
  uniform float uTime;
  
  void main() {
    vUv = uv;
    vPosition = position;
    vec3 pos = position;
    
    // Faint cybernetic coordinate rippling to emulate data field pressure
    float wave = sin(pos.z * 1.5 + uScroll * 8.0 + uTime * 2.0) * 0.08;
    pos.x += wave * cos(pos.z + uTime);
    pos.y += wave * sin(pos.z + uTime);
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    vDepth = -mvPosition.z;
    
    gl_Position = projectionMatrix * mvPosition;
  }
`;

// Filament Fragment Shader: compiles a sharp, white-hot, intense inner neon tube core
const DecagonFilamentShader = {
  vertexShader: DecagonRingVertexShader,
  fragmentShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying float vDepth;
    uniform vec3 uColor;
    uniform float uOpacity;
    uniform float uTime;
    uniform float uScroll;
    
    void main() {
      // Extremely sharp, bright neon filament core peaks in the center of the band (vUv.y = 0.5)
      float centerGlow = sin(vUv.y * 3.1415926);
      float filament = pow(centerGlow, 14.0); 
      
      // Z-depth pulsing wave
      float pulse = sin(vPosition.z * 1.5 - uTime * 2.5 - uScroll * 8.0) * 0.5 + 0.5;
      vec3 baseColor = mix(uColor, vec3(0.98, 0.55, 0.1), pulse * 0.35);
      
      // Inject white-hot core energy filament
      vec3 finalColor = mix(baseColor, vec3(1.0, 1.0, 1.0), filament * 0.92);
      
      // Exponential depth fog for mysterious atmospheric scale
      float fogDensity = 0.065;
      float fogFactor = exp(-pow(vDepth * fogDensity, 2.0));
      fogFactor = clamp(fogFactor, 0.0, 1.0);
      
      // Symmetrical near-clip fade-out to prevent geometric clipping pop-ins
      float nearFade = smoothstep(0.1, 1.6, vDepth);
      
      // Apply exit portal scale dilation
      float exitScale = smoothstep(0.82, 1.0, uScroll);
      float finalOpacity = uOpacity * filament * fogFactor * nearFade * (1.0 - exitScale);
      
      gl_FragColor = vec4(finalColor, finalOpacity);
    }
  `
};

// Volumetric Halo Fragment Shader: compiles a soft, wide-radius atmospheric color spill
const DecagonHaloShader = {
  vertexShader: DecagonRingVertexShader,
  fragmentShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying float vDepth;
    uniform vec3 uColor;
    uniform float uOpacity;
    uniform float uTime;
    uniform float uScroll;
    
    void main() {
      // Soft, wide-radius parabolic light spill
      float centerGlow = sin(vUv.y * 3.1415926);
      float halo = pow(centerGlow, 1.6);
      
      // Z-depth pulsing wave
      float pulse = sin(vPosition.z * 1.5 - uTime * 2.5 - uScroll * 8.0) * 0.5 + 0.5;
      vec3 baseColor = mix(uColor, vec3(0.98, 0.55, 0.1), pulse * 0.35);
      
      // Embedded telemetry dashboard scanlines
      float scanline = step(0.96, sin(vPosition.y * 14.0 + uTime * 0.8) * 0.5 + 0.5);
      vec3 finalColor = mix(baseColor, vec3(1.0, 1.0, 1.0), scanline * 0.12 * halo);
      
      // Exponential depth fog
      float fogDensity = 0.065;
      float fogFactor = exp(-pow(vDepth * fogDensity, 2.0));
      fogFactor = clamp(fogFactor, 0.0, 1.0);
      
      // Symmetrical near-clip fade-out
      float nearFade = smoothstep(0.1, 1.6, vDepth);
      
      // Apply exit portal scale dilation
      float exitScale = smoothstep(0.82, 1.0, uScroll);
      float finalOpacity = uOpacity * halo * 0.45 * (0.4 + pulse * 0.6) * fogFactor * nearFade * (1.0 - exitScale);
      
      gl_FragColor = vec4(finalColor, finalOpacity);
    }
  `
};

// ============================================================================
// CAMERA CONTROLLER MATRIX
// ============================================================================
const CameraController = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const { camera } = useThree();
  
  useFrame(() => {
    const progress = scrollYProgress.get();
    
    // Exponential acceleration curve driving Z-depth camera travel (starts closer at 4.2 for massive initial scale)
    const targetZ = 4.2 - Math.pow(progress, 1.8) * 24.2;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08);
    
    // Peripheral warping via dynamic FOV expansion
    const perspectiveCamera = camera as THREE.PerspectiveCamera;
    if (perspectiveCamera.isPerspectiveCamera) {
      const targetFov = 60 + Math.pow(progress, 2.5) * 22;
      perspectiveCamera.fov = THREE.MathUtils.lerp(perspectiveCamera.fov, targetFov, 0.08);
      perspectiveCamera.updateProjectionMatrix();
    }
    
    // Vast, elegant, slow camera drift (micro-hovering effect)
    const time = Date.now() * 0.0004;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, Math.sin(time) * 0.02, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, Math.cos(time * 0.7) * 0.02, 0.04);
  });
  
  return null;
};

// ============================================================================
// DUAL-CYLINDER VOLUMETRIC TUNNEL CORE
// ============================================================================
const DecagonTunnel = ({
  scrollYProgress,
  isMobile
}: {
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
}) => {
  const tunnelRef = useRef<THREE.Group>(null);
  
  // Responsive ring density configuration - 12 rings on desktop for extreme depth
  const ringCount = isMobile ? 5 : 12;
  const spacing = 2.4;
  
  // Custom shader uniforms for dual-layer meshes
  const filamentUniforms = useMemo(() => ({
    uTime: { value: 0 },
    uScroll: { value: 0 },
    uColor: { value: new THREE.Color("#8b5cf6") },
    uOpacity: { value: 0.85 } // High brightness for sharp filament
  }), []);

  const haloUniforms = useMemo(() => ({
    uTime: { value: 0 },
    uScroll: { value: 0 },
    uColor: { value: new THREE.Color("#8b5cf6") },
    uOpacity: { value: 0.42 } // Ambient opacity for wide volumetric halo
  }), []);

  // Shared geometry geometries compiled exactly once on GPU and reused across all meshes
  const filamentGeometry = useMemo(() => new THREE.CylinderGeometry(2.49, 2.49, 0.03, 10, 1, true), []);
  const haloGeometry = useMemo(() => new THREE.CylinderGeometry(2.52, 2.52, 0.22, 10, 1, true), []);

  // Shared shader materials compiled exactly once on GPU - wireframe set to false
  const filamentMaterial = useMemo(() => new THREE.ShaderMaterial({
    vertexShader: DecagonFilamentShader.vertexShader,
    fragmentShader: DecagonFilamentShader.fragmentShader,
    uniforms: filamentUniforms,
    transparent: true,
    wireframe: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide // Ensure inner faces are rendered when camera is inside
  }), [filamentUniforms]);

  const haloMaterial = useMemo(() => new THREE.ShaderMaterial({
    vertexShader: DecagonHaloShader.vertexShader,
    fragmentShader: DecagonHaloShader.fragmentShader,
    uniforms: haloUniforms,
    transparent: true,
    wireframe: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide // Ensure inner faces are rendered when camera is inside
  }), [haloUniforms]);

  // Clean up WebGL resources on component unmount to prevent GPU memory leaks
  React.useEffect(() => {
    return () => {
      filamentGeometry.dispose();
      haloGeometry.dispose();
      filamentMaterial.dispose();
      haloMaterial.dispose();
    };
  }, [filamentGeometry, haloGeometry, filamentMaterial, haloMaterial]);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    const scroll = scrollYProgress.get();
    
    filamentUniforms.uTime.value = elapsed;
    filamentUniforms.uScroll.value = scroll;
    
    haloUniforms.uTime.value = elapsed;
    haloUniforms.uScroll.value = scroll;
    
    if (tunnelRef.current) {
      // Slower rotation velocity (0.006 instead of 0.015) for premium atmospheric flow
      tunnelRef.current.rotation.z = elapsed * 0.006;
    }
  });

  return (
    <group ref={tunnelRef}>
      {Array.from({ length: ringCount }).map((_, i) => {
        const zPos = -i * spacing;
        
        return (
          <group key={i} position={[0, 0, zPos]} rotation={[Math.PI / 2, 0, Math.PI / 10]}>
            {/* 1. Volumetric Halo Ambient Haze Ring */}
            <mesh geometry={haloGeometry} material={haloMaterial} />
            
            {/* 2. Sharp Luminous Core Neon Filament Ring */}
            <mesh geometry={filamentGeometry} material={filamentMaterial} />
          </group>
        );
      })}
    </group>
  );
};

// ============================================================================
// HIGH-VELOCITY CONSENSUS PACKET PARTICLES SYSTEM
// ============================================================================
const ConsensusParticles = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const count = 120;
  const pointsRef = useRef<THREE.Points>(null);

  // Generate particle coordinates within a cylindrical travel volume
  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const speed = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      const radius = 1.2 + Math.random() * 3.5;
      const angle = Math.random() * Math.PI * 2;
      const z = -Math.random() * 20; // Extend depth
      
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = Math.sin(angle) * radius;
      pos[i * 3 + 2] = z;
      
      speed[i] = 0.6 + Math.random() * 1.8;
    }
    return [pos, speed];
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const array = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    const progress = scrollYProgress.get();
    // Exponential acceleration multiplier
    const speedMultiplier = 1.2 + Math.pow(progress, 3) * 12.0;

    for (let i = 0; i < count; i++) {
      let z = array[i * 3 + 2];
      // Slowed down particles (1.5 multiplier instead of 2.5) for high-end restraint
      z += delta * speeds[i] * speedMultiplier * 1.5;
      
      // Infinite loop wrap: if a particle flies past the camera viewport, send it back deep
      if (z > 6) {
        z = -20;
      }
      array[i * 3 + 2] = z;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Symmetrical particle fade-out on approach to exit
    if (pointsRef.current.material) {
      const material = pointsRef.current.material as THREE.PointsMaterial;
      material.opacity = (1.0 - Math.pow(progress, 3)) * 0.65;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        color="#f97316" // Amber-orange data packets
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.65}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// ============================================================================
// DYNAMIC GLOWING FOCAL ENERGY CORE (DEEP-END PORTAL VISUAL CORE)
// ============================================================================
const PortalFocalCore = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uScroll: { value: 0 },
    uColorViolet: { value: new THREE.Color("#8b5cf6") },
    uColorAmber: { value: new THREE.Color("#f97316") }
  }), []);

  const material = useMemo(() => new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vPosition;
      void main() {
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      varying vec3 vPosition;
      uniform float uTime;
      uniform float uScroll;
      uniform vec3 uColorViolet;
      uniform vec3 uColorAmber;
      
      void main() {
        // Radial gradient glow representation from center of UV space
        float dist = distance(vUv, vec2(0.5));
        float glow = exp(-dist * 5.2);
        
        // Intense center focal core white flare
        float core = exp(-dist * 22.0) * 1.5;
        
        // High-frequency energy micro pulsation
        float pulse = sin(uTime * 3.5) * 0.15 + 0.85;
        
        // Ambient color shift representing AI + Blockchain synchronization
        vec3 color = mix(uColorViolet, uColorAmber, sin(uTime * 1.2) * 0.5 + 0.5);
        vec3 finalColor = mix(color * glow * pulse, vec3(1.0, 1.0, 1.0), core * pulse);
        
        // Dilate and fade out as the user emerges from the portal
        float exitScale = smoothstep(0.75, 0.98, uScroll);
        float opacity = (glow + core) * 0.95 * (1.0 - exitScale);
        
        gl_FragColor = vec4(finalColor, opacity);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }), [uniforms]);

  React.useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    const scroll = scrollYProgress.get();
    
    uniforms.uTime.value = elapsed;
    uniforms.uScroll.value = scroll;
    
    if (meshRef.current) {
      meshRef.current.rotation.z = elapsed * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -28]} scale={[5.0, 5.0, 1.0]}>
      <planeGeometry args={[1, 1]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

// ============================================================================
// MAIN PORTAL CANVAS CONTAINER
// ============================================================================
export default function PortalCanvas({
  scrollYProgress,
  isMobile
}: {
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
}) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-20">
      <Canvas
        camera={{ fov: 60, near: 0.1, far: 35, position: [0, 0, 6] }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true
        }}
      >
        <color attach="background" args={["#05050C"]} />
        
        {/* Core Lighting System: Symmetrical Ambient + Spotlights */}
        <ambientLight intensity={0.15} />
        
        {/* Neural Violet Top Spotlight (Enhanced for rich cylinder face highlights) */}
        <spotLight
          position={[0, 8, -5]}
          angle={0.6}
          penumbra={1}
          intensity={5.2}
          color="#8b5cf6"
        />
        
        {/* Crypto Amber Bottom Spotlight */}
        <spotLight
          position={[0, -8, -5]}
          angle={0.6}
          penumbra={1}
          intensity={3.6}
          color="#f97316"
        />

        {/* Concentric Decagonal Volumetric Neon Corridor */}
        <DecagonTunnel scrollYProgress={scrollYProgress} isMobile={isMobile} />

        {/* Cinematic Pulsing Focal Energy Core at the deep end */}
        <PortalFocalCore scrollYProgress={scrollYProgress} />

        {/* Dynamic Drifting Particle Streams */}
        {!isMobile && <ConsensusParticles scrollYProgress={scrollYProgress} />}

        {/* Scroll Camera Controller */}
        <CameraController scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
}
