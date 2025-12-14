import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scrolls = () => {
  const location = useLocation();

  useEffect(() => {
    let scrollTarget = 0;
    let scrollPosition = 0;
    let velocity = 0;
    let animationFrameId = null;
    let lastTimestamp = null;

    const friction = 0.1;
    const smoothing = 0.19;

    const getMaxScrollHeight = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const smoothScroll = (timestamp) => {
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const deltaTime = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      velocity += (scrollTarget - scrollPosition) * smoothing;
      velocity *= 1 - friction;

      scrollPosition += velocity * deltaTime;

      const maxScrollHeight = getMaxScrollHeight();
      scrollPosition = Math.max(0, Math.min(scrollPosition, maxScrollHeight));

      window.scrollTo(0, scrollPosition);

      if (Math.abs(velocity) > 0.1) {
        animationFrameId = requestAnimationFrame(smoothScroll);
      } else {
        animationFrameId = null;
        velocity = 0;
      }
    };

    const handleWheel = (event) => {
      if (event.target.closest(".newscroll")) {
        return;
      }

      event.preventDefault();

      const delta = event.deltaY || event.detail || event.wheelDelta;
      scrollTarget += delta;

      scrollTarget = Math.max(0, Math.min(scrollTarget, getMaxScrollHeight()));

      if (animationFrameId === null) {
        requestAnimationFrame(smoothScroll);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [location]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default Scrolls;
