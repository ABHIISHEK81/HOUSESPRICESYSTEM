import React from 'react';

export default function BackgroundParticles() {
  return (
    <div className="particles-bg">
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${10 + i * 10}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
}