import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const gradientRef = useRef(null);

  useEffect(() => {
    const gradient = gradientRef.current;
    if (!gradient) return;

    let animationId;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % 2500) / 2500; // 2.5s cycle

      // Calculate gradient position
      const x1 = -100 + (progress * 200);
      const x2 = 0 + (progress * 200);
      const y1 = -100 + (progress * 200);
      const y2 = 0 + (progress * 200);

      gradient.setAttribute('x1', `${x1}%`);
      gradient.setAttribute('x2', `${x2}%`);
      gradient.setAttribute('y1', `${y1}%`);
      gradient.setAttribute('y2', `${y2}%`);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 flex items-center justify-center z-50 loading-screen"
    >
      <motion.div 
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="loading-content">
          {/* Letter A */}
          <div className="letter letter-a">A</div>
          
          {/* Triangle Loading Icon */}
          <svg className="triangle-loader" width="100px" height="100px" viewBox="-3 -4 39 39">
            <polygon 
              fill="#EFEFEF" 
              stroke="#333333" 
              strokeWidth="1" 
              points="16,0 32,32 0,32"
              className="triangle-shape"
            />
          </svg>
          
          {/* Letter H */}
          <div className="letter letter-h">H</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8"
        >
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="text-white text-lg font-medium mt-4">Loading Portfolio...</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
