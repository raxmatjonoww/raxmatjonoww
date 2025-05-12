
import React, { useState, useEffect } from 'react';

const AmericanFlag = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const showFlag = () => setIsVisible(true);
    const timeout = setTimeout(showFlag, 2000);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setPosition(prev => ({
        x: Math.min(70, 50 + scrollY / 50),
        y: Math.min(70, 50 + scrollY / 100)
      }));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed z-30 transition-all duration-1000 ease-in-out"
      style={{ 
        top: `${position.y}vh`,
        right: `${position.x - 40}vw`,
        opacity: 0.7,
      }}
    >
      <div className="flag-container w-32 h-20 shadow-lg">
        <div className="flag-wrapper relative w-full h-full overflow-hidden">
          {/* Blue field with stars */}
          <div className="flag-union absolute top-0 left-0 w-2/5 h-3/5 bg-americano-blue flex flex-wrap justify-center items-center p-1">
            {[...Array(9)].map((_, i) => (
              <span key={i} className="text-white text-xs mx-0.5">★</span>
            ))}
          </div>
          
          {/* Red and white stripes */}
          {[...Array(7)].map((_, i) => (
            <div 
              key={i} 
              className={`stripe h-1/7 w-full ${i % 2 === 0 ? 'bg-americano-red' : 'bg-white'}`}
              style={{ top: `${i * (100 / 7)}%` }}
            ></div>
          ))}
        </div>
        <div className="flag-pole absolute top-0 -left-2 w-2 h-full bg-gray-600"></div>
      </div>
    </div>
  );
};

export default AmericanFlag;
