import React, { useState, useEffect } from 'react';

const CodeEditor = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const codeLines = [
    "const developer = {",
    "  name: 'Kevin',",
    "  skills: ['React', 'Next.js', 'TailwindCSS'],",
    "  passion: 'Building amazing web experiences',",
    "};"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900/95 rounded-xl border border-cyan-500/30 shadow-2xl overflow-hidden font-mono
                    text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg
                    backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/20 hover:-translate-y-0.5
                    w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
      <div className="bg-gray-800/90 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 flex items-center justify-between border-b border-cyan-500/20">
        <div className="flex gap-1.5 sm:gap-2 md:gap-2.5">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 rounded-full bg-red-500 hover:scale-110 transition-transform duration-300 hover:shadow-red-500/50 hover:shadow-md"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 rounded-full bg-yellow-500 hover:scale-110 transition-transform duration-300 hover:shadow-yellow-500/50 hover:shadow-md"></div>
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 rounded-full bg-green-500 hover:scale-110 transition-transform duration-300 hover:shadow-green-500/50 hover:shadow-md"></div>
        </div>
        <div className="text-cyan-400 font-medium text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base">portfolio.js</div>
      </div>

      <div className="flex py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[160px] xl:min-h-[180px] 2xl:min-h-[200px]">
        <div className="px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 text-white/40 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base leading-relaxed select-none border-r border-cyan-500/20">
          {codeLines.map((_, index) => (
            <div key={index} className="text-right min-w-[16px] sm:min-w-[18px] md:min-w-[20px] lg:min-w-[22px] xl:min-w-[24px]">{index + 1}</div>
          ))}
        </div>

        <div className="flex-1 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 leading-relaxed">
          {codeLines.map((line, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index <= currentLine
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-2'
              } ${
                index === 0 ? 'text-pink-400' :
                index === 1 ? 'text-green-400' :
                index === 2 ? 'text-cyan-300' :
                index === 3 ? 'text-yellow-300' :
                'text-pink-400'
              }`}
            >
              <span className="break-all sm:break-normal">{line}</span>
              {index === currentLine && isTyping && (
                <span className="text-cyan-400 font-bold animate-pulse ml-1">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
