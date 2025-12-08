import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const CountUp = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const endValue = parseInt(end.replace(/,/g, ''), 10);
      const incrementTime = (duration * 1000) / endValue;
      
      // For large numbers, increment by larger steps
      const step = endValue > 1000 ? Math.ceil(endValue / 100) : 1;
      const timerDuration = (duration * 1000) / (endValue / step);

      const timer = setInterval(() => {
        start += step;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, timerDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default CountUp;
