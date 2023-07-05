import '../index.css'
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollRevealFade = ({ children }) => {
  const [reveal, setReveal] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Ajusta este valor según tus necesidades
  });

  useEffect(() => {
    if (inView) {
      setReveal(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`scroll-reveal-fade ${reveal ? 'fade-in' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollRevealFade;

