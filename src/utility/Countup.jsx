import { useEffect, useRef, useState } from "react";

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // 👁️ Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 🔢 Count animation
  useEffect(() => {
    if (!started) return;

    let startValue = 0;
    const increment = end / (duration / 16);
    let frame;

    const animate = () => {
      startValue += increment;
      if (startValue < end) {
        setCount(Math.floor(startValue));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default CountUp;
