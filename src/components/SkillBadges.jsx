import React, { useState, useEffect } from 'react';

const SkillBadges = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const skills = [
    { name: 'Clean Code', description: 'Maintainable & efficient', icon: '🧹', color: '#40e0d0' },
    { name: 'Performance', description: 'Lightning fast apps', icon: '⚡', color: '#ff6b6b' },
    { name: 'Modern Design', description: 'Beautiful interfaces', icon: '🎨', color: '#4ecdc4' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] flex items-center justify-center">
      {/* Central Logo */}
      <div className="relative z-10">
        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 animate-pulse">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white drop-shadow-md">K</span>
        </div>
        <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-5 md:-left-5 lg:-top-6 lg:-left-6 xl:-top-7 xl:-left-7 w-18 h-18 sm:w-24 sm:h-24 md:w-30 md:h-30 lg:w-36 lg:h-36 xl:w-42 xl:h-42 border-2 border-dashed border-cyan-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Floating Skill Badges */}
      {skills.map((skill, index) => {
        const positions = [
          'top-2 right-2 sm:top-3 sm:right-3 md:top-5 md:right-5', // Clean Code
          'bottom-12 right-4 sm:bottom-16 sm:right-6 md:bottom-20 md:right-10', // Performance
          'bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-5 md:left-5' // Modern Design
        ];

        return (
          <div
            key={skill.name}
            className={`absolute w-32 h-10 sm:w-36 sm:h-11 md:w-44 md:h-14 lg:w-48 lg:h-16 xl:w-52 xl:h-18 bg-gray-900/90 border rounded-full backdrop-blur-sm transition-all duration-300 cursor-pointer ${
              index === activeIndex
                ? 'border-cyan-400 shadow-lg shadow-cyan-500/40 scale-105'
                : 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 hover:-translate-y-1'
            } ${positions[index]}`}
            style={{
              animation: `float 6s ease-in-out infinite ${index * 0.2}s`
            }}
          >
            <div className="flex items-center px-2 py-1 sm:px-3 sm:py-2 md:px-5 md:py-3 h-full">
              <div className="text-sm sm:text-base md:text-xl lg:text-2xl mr-1 sm:mr-2 md:mr-3 drop-shadow-sm">{skill.icon}</div>
              <div className="flex-1">
                <div className="text-xs sm:text-xs md:text-sm lg:text-base font-semibold text-cyan-400">{skill.name}</div>
                <div className="text-xs sm:text-xs md:text-xs lg:text-sm text-white/70 leading-tight">{skill.description}</div>
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
