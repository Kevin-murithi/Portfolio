import React, { useState, useEffect } from 'react';

const CodeEditor = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const codeLines = [
    "const developer = {",
    "  name: 'Kevin',",
    "  skills: ['React', 'Next.js'],",
    "  passion: 'Building web apps',",
    "};"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900/95 rounded-lg md:rounded-xl border border-cyan-500/30 shadow-2xl overflow-hidden font-mono
                    text-xs md:text-sm
                    backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/20 hover:-translate-y-0.5
                    w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div className="bg-gray-800/90 px-3 md:px-4 py-2 md:py-3 flex items-center justify-between border-b border-cyan-500/20">
        <div className="flex gap-1.5 md:gap-2">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 hover:scale-110 transition-transform duration-300"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500 hover:scale-110 transition-transform duration-300"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 hover:scale-110 transition-transform duration-300"></div>
        </div>
        <div className="text-cyan-400 font-medium text-xs md:text-sm">portfolio.js</div>
      </div>

      <div className="flex py-3 md:py-4 min-h-[100px] md:min-h-[120px]">
        <div className="px-3 md:px-4 text-white/40 text-xs md:text-sm leading-relaxed select-none border-r border-cyan-500/20">
          {codeLines.map((_, index) => (
            <div key={index} className="text-right min-w-[16px] md:min-w-[20px]">{index + 1}</div>
          ))}
        </div>

        <div className="flex-1 px-3 md:px-4 leading-relaxed">
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
              <span className="break-all">{line}</span>
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
