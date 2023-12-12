export const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 40,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.75,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.65 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 1.5, type: "linear", ease: [1.76, 0, 0.24, 1] },
  },
};
export const anim = {
  initial: {
    opacity: 0,
  },

  open: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
    transition: { duration: 0.75, delay: 1.4, ease: [0.76, 0, 0.24, 1] },
  },
};
export const MainAnim = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 40,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.75,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.65 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};
