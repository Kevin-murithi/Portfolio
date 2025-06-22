import React, { useState, useEffect } from 'react';

const SkillBadges = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const skills = [
    { name: 'Clean Code', description: 'Maintainable', icon: '🧹', color: '#40e0d0' },
    { name: 'Performance', description: 'Fast apps', icon: '⚡', color: '#ff6b6b' },
    { name: 'Modern Design', description: 'Beautiful UI', icon: '🎨', color: '#4ecdc4' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
      {/* Central Logo */}
      <div className="relative z-10">
        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 animate-pulse">
          <span className="text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow-md">K</span>
        </div>
        <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 lg:-top-5 lg:-left-5 w-18 h-18 md:w-24 md:h-24 lg:w-30 lg:h-30 border-2 border-dashed border-cyan-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Floating Skill Badges */}
      {skills.map((skill, index) => {
        const positions = [
          'top-2 right-2 md:top-4 md:right-4', // Clean Code
          'bottom-12 right-4 md:bottom-16 md:right-8', // Performance
          'bottom-2 left-2 md:bottom-4 md:left-4' // Modern Design
        ];

        return (
          <div
            key={skill.name}
            className={`absolute w-28 h-9 md:w-36 md:h-12 lg:w-40 lg:h-14 bg-gray-900/90 border rounded-full backdrop-blur-sm transition-all duration-300 cursor-pointer ${
              index === activeIndex
                ? 'border-cyan-400 shadow-lg shadow-cyan-500/40 scale-105'
                : 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 hover:-translate-y-1'
            } ${positions[index]}`}
            style={{
              animation: `float 6s ease-in-out infinite ${index * 0.2}s`
            }}
          >
            <div className="flex items-center px-2 md:px-3 py-1 md:py-2 h-full">
              <div className="text-sm md:text-lg mr-1 md:mr-2 drop-shadow-sm">{skill.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="text-xs md:text-sm font-semibold text-cyan-400 truncate">{skill.name}</div>
                <div className="text-xs text-white/70 leading-tight truncate">{skill.description}</div>
              </div>
            </div>
            {(index === activeIndex) && (
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-transparent to-cyan-400 rounded-full opacity-30 -z-10"
              ></div>
            )}
          </div>
        );
      })}

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => {
          const positions = [
            'top-[10%] left-[20%]',
            'top-[20%] right-[15%]',
            'bottom-[30%] left-[10%]',
            'bottom-[20%] right-[25%]',
            'top-[60%] left-[80%]',
            'top-[80%] right-[60%]'
          ];

          return (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 ${positions[i]}`}
              style={{
                animation: `particleFloat ${3 + i * 0.5}s ease-in-out infinite ${i * 0.5}s`
              }}
            ></div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillBadges;
