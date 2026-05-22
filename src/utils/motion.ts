export const TRANSITION_SYNAPTIC = {
  type: "tween" as const,
  ease: [0.16, 1, 0.3, 1], // Expo-Out
  duration: 0.8,
};

export const TRANSITION_ELASTIC = {
  type: "spring" as const,
  stiffness: 120,
  damping: 18, // Consensus Back-Out analog
};

export const TRANSITION_AMBIENT = {
  ease: [0.445, 0.05, 0.55, 0.95], // Sine-In-Out
  duration: 2.2,
  repeat: Infinity,
  repeatType: "mirror" as const,
};

