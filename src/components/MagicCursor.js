import { useEffect } from 'react';

const MagicCursor = () => {
  useEffect(() => {
    // Create and inject CSS
    const style = document.createElement('style');
    style.textContent = `
      /* Magic Mouse CSS */
      .magic-mouse-cursor-outer {
        position: fixed;
        top: 0;
        left: 0;
        width: 35px;
        height: 35px;
        border: 3px solid rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transform: translate(-50%, -50%);
        transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        mix-blend-mode: difference;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
      }

      .magic-mouse-cursor-inner {
        position: fixed;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        background: #ffffff;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10001;
        transform: translate(-50%, -50%);
        transition: all 0.08s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.3);
      }

      /* Hide default cursor */
      html, * {
        cursor: none !important;
      }

      /* Hover effects */
      .magic-hover:hover ~ .magic-mouse-cursor-outer,
      button:hover ~ .magic-mouse-cursor-outer,
      a:hover ~ .magic-mouse-cursor-outer,
      .btn:hover ~ .magic-mouse-cursor-outer {
        width: 55px;
        height: 55px;
        border-color: rgba(255, 255, 255, 1);
        background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 70%, transparent 100%);
        border-width: 4px;
      }

      .magic-hover:hover ~ .magic-mouse-cursor-inner,
      button:hover ~ .magic-mouse-cursor-inner,
      a:hover ~ .magic-mouse-cursor-inner,
      .btn:hover ~ .magic-mouse-cursor-inner {
        width: 14px;
        height: 14px;
        background: #ffffff;
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.4);
      }

      /* Disable cursor for specific elements */
      .no-cursor {
        cursor: auto !important;
      }
    `;
    document.head.appendChild(style);

    // Create cursor elements
    const cursorOuter = document.createElement('div');
    cursorOuter.className = 'magic-mouse-cursor-outer';
    document.body.appendChild(cursorOuter);

    const cursorInner = document.createElement('div');
    cursorInner.className = 'magic-mouse-cursor-inner';
    document.body.appendChild(cursorInner);

    let mouseX = 0;
    let mouseY = 0;
    let outerX = 0;
    let outerY = 0;

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update inner cursor immediately
      cursorInner.style.left = mouseX + 'px';
      cursorInner.style.top = mouseY + 'px';
    };

    // Smooth animation for outer cursor
    const animateOuterCursor = () => {
      const distX = mouseX - outerX;
      const distY = mouseY - outerY;
      
      outerX += distX * 0.25;
      outerY += distY * 0.25;
      
      cursorOuter.style.left = outerX + 'px';
      cursorOuter.style.top = outerY + 'px';
      
      requestAnimationFrame(animateOuterCursor);
    };

    // Helper function to check if element matches selectors
    const isInteractiveElement = (element) => {
      if (!element || !element.tagName) return false;
      
      const tagName = element.tagName.toLowerCase();
      const className = element.className || '';
      
      return (
        tagName === 'button' ||
        tagName === 'a' ||
        tagName === 'input' ||
        tagName === 'textarea' ||
        tagName === 'select' ||
        (typeof className === 'string' && className.includes('btn')) ||
        (typeof className === 'string' && className.includes('magic-hover'))
      );
    };

    // Hover effect handlers
    const handleMouseEnter = (e) => {
      if (isInteractiveElement(e.target)) {
        cursorOuter.style.width = '55px';
        cursorOuter.style.height = '55px';
        cursorOuter.style.borderColor = 'rgba(255, 255, 255, 1)';
        cursorOuter.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 70%, transparent 100%)';
        cursorOuter.style.borderWidth = '4px';
        
        cursorInner.style.width = '14px';
        cursorInner.style.height = '14px';
        cursorInner.style.background = '#ffffff';
        cursorInner.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.4)';
      }
    };

    const handleMouseLeave = (e) => {
      if (isInteractiveElement(e.target)) {
        cursorOuter.style.width = '35px';
        cursorOuter.style.height = '35px';
        cursorOuter.style.borderColor = 'rgba(255, 255, 255, 0.8)';
        cursorOuter.style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)';
        cursorOuter.style.borderWidth = '3px';
        
        cursorInner.style.width = '10px';
        cursorInner.style.height = '10px';
        cursorInner.style.background = '#ffffff';
        cursorInner.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.3)';
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    
    // Start animation
    animateOuterCursor();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      
      if (cursorOuter && cursorOuter.parentNode) {
        cursorOuter.parentNode.removeChild(cursorOuter);
      }
      if (cursorInner && cursorInner.parentNode) {
        cursorInner.parentNode.removeChild(cursorInner);
      }
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null;
};

export default MagicCursor;
