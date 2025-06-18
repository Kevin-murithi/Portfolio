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
    <div className="bg-gray-900/95 rounded-xl border border-cyan-500/30 shadow-2xl overflow-hidden font-mono text-sm backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/20 hover:-translate-y-0.5">
      <div className="bg-gray-800/90 px-4 py-3 flex items-center justify-between border-b border-cyan-500/20">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:scale-110 transition-transform duration-300 hover:shadow-red-500/50 hover:shadow-md"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:scale-110 transition-transform duration-300 hover:shadow-yellow-500/50 hover:shadow-md"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hover:scale-110 transition-transform duration-300 hover:shadow-green-500/50 hover:shadow-md"></div>
        </div>
        <div className="text-cyan-400 font-medium text-xs">portfolio.js</div>
      </div>

      <div className="flex py-4 min-h-[140px]">
        <div className="px-4 text-white/40 text-xs leading-relaxed select-none border-r border-cyan-500/20">
          {codeLines.map((_, index) => (
            <div key={index} className="text-right min-w-[20px]">{index + 1}</div>
          ))}
        </div>

        <div className="flex-1 px-4 leading-relaxed">
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
              <span>{line}</span>
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
