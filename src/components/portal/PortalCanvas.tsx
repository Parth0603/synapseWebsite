"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PointMaterial } from "@react-three/drei";
import { MotionValue } from "framer-motion";
import * as THREE from "three";

// Custom Shader for Retro-Tech Decagonal Wireframe Corridor
const DecagonRingShader = {
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying float vDepth;
    uniform float uScroll;
    uniform float uTime;
    
    void main() {
      vUv = uv;
      vPosition = position;
      vec3 pos = position;
      
      // Subtle organic waving based on depth (Z-axis) to simulate digital ripple tension
      float wave = sin(pos.z * 1.5 + uScroll * 8.0 + uTime * 2.0) * 0.08;
      pos.x += wave * cos(pos.z + uTime);
      pos.y += wave * sin(pos.z + uTime);
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      vDepth = -mvPosition.z;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying float vDepth;
    uniform vec3 uColor;
    uniform float uOpacity;
    uniform float uTime;
    uniform float uScroll;
    
    void main() {
      // Glow pulse wave traversing the wireframe mesh based on scroll and elapsed time
      float pulse = sin(vPosition.z * 2.0 - uTime * 3.5 - uScroll * 10.0) * 0.5 + 0.5;
      
      // Blend base brand color (Neural Violet) with bright core highlights (Crypto Amber/White)
      vec3 coreColor = mix(uColor, vec3(0.98, 0.55, 0.1), pulse * 0.4);
      
      // High-precision sub-pixel scanning grid pattern
      float scanline = step(0.98, sin(vPosition.y * 30.0 + uTime) * 0.5 + 0.5);
      vec3 finalColor = mix(coreColor, vec3(1.0, 1.0, 1.0), scanline * 0.2);
      
      // Exponential depth fog: e^(-(depth * density)^2)
      float fogDensity = 0.065;
      float fogFactor = exp(-pow(vDepth * fogDensity, 2.0));
      fogFactor = clamp(fogFactor, 0.0, 1.0);
      
      // Symmetrical near-clip fade-out to prevent geometric clipping pop-ins
      float nearFade = smoothstep(0.1, 1.8, vDepth);
      
      // Apply exit glow dilation and general fade
      float exitScale = smoothstep(0.85, 1.0, uScroll);
      float finalOpacity = uOpacity * (0.3 + pulse * 0.7) * fogFactor * nearFade * (1.0 - exitScale);
      
      gl_FragColor = vec4(finalColor, finalOpacity);
    }
  `
};

// Smooth Camera Translation Controller along the Virtual Z-Axis
const CameraController = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const { camera } = useThree();
  
  useFrame(() => {
    const progress = scrollYProgress.get();
    
    // Exponential acceleration curve for deeper camera push
    const targetZ = 6 - Math.pow(progress, 1.8) * 26;
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

// Concentric Decagonal Wireframe Ring Array
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
  
  // Custom shader uniforms - reduced opacity from 0.3 to 0.18 for premium atmospheric subtlety
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uScroll: { value: 0 },
    uColor: { value: new THREE.Color("#8b5cf6") }, // Neural Violet base
    uOpacity: { value: 0.18 }
  }), []);

  // Shared geometry compiled exactly once on GPU and reused across all meshes
  const geometry = useMemo(() => new THREE.CylinderGeometry(2.5, 2.5, 0.1, 10, 1, true), []);

  // Shared shader material compiled exactly once on GPU and reused across all meshes
  const material = useMemo(() => new THREE.ShaderMaterial({
    vertexShader: DecagonRingShader.vertexShader,
    fragmentShader: DecagonRingShader.fragmentShader,
    uniforms: uniforms,
    transparent: true,
    wireframe: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }), [uniforms]);

  // Clean up WebGL resources on component unmount to prevent GPU memory leaks
  React.useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.getElapsedTime();
    uniforms.uScroll.value = scrollYProgress.get();
    
    if (tunnelRef.current) {
      // Slower rotation velocity (0.006 instead of 0.015) for premium atmospheric flow
      tunnelRef.current.rotation.z = state.clock.getElapsedTime() * 0.006;
    }
  });

  return (
    <group ref={tunnelRef}>
      {Array.from({ length: ringCount }).map((_, i) => {
        // Spaced out sequentially in depth (Z-axis)
        const zPos = -i * spacing;
        
        return (
          <mesh
            key={i}
            position={[0, 0, zPos]}
            rotation={[Math.PI / 2, 0, Math.PI / 10]} // 10-sided polygon rotation offset
            geometry={geometry}
            material={material}
          />
        );
      })}
    </group>
  );
};

// High-Velocity Consensus Packet Canvas Particles
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
        <color attach="background" args={["#020204"]} />
        
        {/* Core Lighting System: Symmetrical Ambient + Spotlights */}
        <ambientLight intensity={0.15} />
        
        {/* Neural Violet Top Spotlight */}
        <spotLight
          position={[0, 8, -5]}
          angle={0.6}
          penumbra={1}
          intensity={4.5}
          color="#8b5cf6"
        />
        
        {/* Crypto Amber Bottom Spotlight */}
        <spotLight
          position={[0, -8, -5]}
          angle={0.6}
          penumbra={1}
          intensity={3.0}
          color="#f97316"
        />

        {/* Concentric Decagonal Wireframe Corridor */}
        <DecagonTunnel scrollYProgress={scrollYProgress} isMobile={isMobile} />

        {/* Dynamic Drifting Particle Streams */}
        {!isMobile && <ConsensusParticles scrollYProgress={scrollYProgress} />}

        {/* Scroll Camera Controller */}
        <CameraController scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
}
