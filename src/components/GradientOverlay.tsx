'use client'
import React, { useState, useEffect } from 'react';
const GradientOverlay = () => {
  const [gradientStyle, setGradientStyle] = useState({
    background: 'radial-gradient(400px at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)'
  });

  useEffect(() => {
    const handleMouseMove = (event:any) => {
      setGradientStyle({
        background: `radial-gradient(400px at ${event.clientX}px ${event.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none transition duration-300"
      style={gradientStyle}
    ></div>
  );
};

export default GradientOverlay;
