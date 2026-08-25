let lenis = null;

export const setLenis = (instance) => {
  lenis = instance;
};

export const scrollToSection = (selector) => {
  if (lenis) {
    lenis.scrollTo(selector, { offset: -80, duration: 1.4 });
  }
};

export const scrollToTop = () => {
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.4 });
  }
};

export const stopScroll = () => {
  if (lenis) lenis.stop();
};

export const startScroll = () => {
  if (lenis) lenis.start();
};
