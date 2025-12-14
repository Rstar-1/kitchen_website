import { useEffect, useRef } from "react";

const useFadeReveal = ({ delay = 200, y = 40, once = true } = {}) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          const index = elementsRef.current.indexOf(el);

          el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          el.style.transitionDelay = `${index * delay}ms`;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";

          if (once) observer.unobserve(el);
        });
      },
      { threshold: 0.2 }
    );

    elementsRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [delay, y, once]);

  const addToRef = (el) => {
    if (!el || elementsRef.current.includes(el)) return;

    el.style.opacity = "0";
    el.style.transform = `translateY(${y}px)`;

    elementsRef.current.push(el);
  };

  return addToRef;
};

export default useFadeReveal;
