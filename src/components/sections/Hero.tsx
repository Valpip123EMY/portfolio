'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, FileText, Database, Code, LineChart } from 'lucide-react';
import { useState, useEffect, useMemo, useCallback } from 'react';

// Smooth scroll function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// ====== Optimized Animation Variants ======
const heroVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// ====== Performance-Optimized Visual Components ======

// ====== Research Paper Writing Slide Component ======
const ResearchWritingSlide = (() => {
  const Component = () => {
    const lines = [
    'Title: [Research Paper Title]',
    '',
    'Abstract:',
    'This study investigates... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    '',
    '1. Introduction',
    'Recent developments in the field have shown...',
    '',
    '2. Methodology',
    'Our approach utilizes established frameworks...',
    '',
    '3. Results',
    'Analysis reveals significant findings with p < 0.05...',
    '',
    '4. Conclusion',
    'These findings contribute to the understanding of...',
    '',
    'References',
    '[1] Author et al., 2024',
  ];
    const [currentLine, setCurrentLine] = useState<number>(0);
    const [currentChar, setCurrentChar] = useState<number>(0);
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentTypingLine, setCurrentTypingLine] = useState<string>('');

    useEffect(() => {
      const timer = setInterval(() => {
        if (currentLine < lines.length) {
          const fullLine = lines[currentLine];
          if (currentChar < fullLine.length) {
            // Type out character by character
            setCurrentTypingLine(fullLine.substring(0, currentChar + 1));
            setCurrentChar(prev => prev + 1);
          } else {
            // Line is complete, add to displayed lines and move to next
            setDisplayedLines(prev => [...prev, fullLine]);
            setCurrentTypingLine('');
            setCurrentLine(prev => prev + 1);
            setCurrentChar(0);
          }
        } else {
          setTimeout(() => {
            setDisplayedLines([]);
            setCurrentTypingLine('');
            setCurrentLine(0);
            setCurrentChar(0);
          }, 2500);
        }
      }, 20); // Very fast typing for research too
      return () => clearInterval(timer);
    }, [currentLine, currentChar]);

    return (
      <div className="w-full h-[360px] sm:h-96 rounded-3xl border border-slate-300/80 dark:border-white/12 bg-white/100 dark:bg-slate-900/90 p-5 shadow-sm overflow-hidden flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-red-700 dark:text-indigo-300" />
          <span className="text-slate-900 dark:text-slate-200 text-sm font-medium">Research Paper</span>
        </div>
        <div className="rounded-2xl border border-slate-200/70 dark:border-white/12 bg-slate-50 dark:bg-slate-900/90 p-4 font-mono text-xs leading-tight flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <div className="space-y-2">
              {displayedLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-slate-800 dark:text-slate-200 text-xs leading-relaxed flex items-start"
                >
                  <span className="text-slate-500 dark:text-slate-500 mr-3 select-none inline-block w-6 text-right flex-shrink-0">
                    {line.trim() === '' ? ' ' : (i + 1)}
                  </span>
                  <span className={`flex-1 ${
                    line.startsWith('Title:') ? 'text-indigo-700 dark:text-indigo-300 font-semibold' :
                    line.startsWith('Abstract:') ? 'text-red-700 dark:text-indigo-400 font-semibold' :
                    line.match(/^\d+\./) ? 'text-emerald-700 dark:text-emerald-400 font-semibold' :
                    line.startsWith('References') ? 'text-cyan-700 dark:text-cyan-400 font-semibold' :
                    line.startsWith('[') ? 'text-slate-600 dark:text-slate-400 italic' :
                    'text-slate-800 dark:text-slate-200'
                  }`}>
                    {line || ' '}
                  </span>
                </motion.div>
              ))}
              {currentTypingLine && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-slate-800 dark:text-slate-200 text-xs leading-relaxed flex items-start"
                >
                  <span className="text-slate-500 dark:text-slate-500 mr-3 select-none inline-block w-6 text-right flex-shrink-0">
                    {currentTypingLine.trim() === '' ? ' ' : (displayedLines.length + 1)}
                  </span>
                  <span className={`flex-1 ${
                    currentTypingLine.startsWith('Title:') ? 'text-indigo-700 dark:text-indigo-300 font-semibold' :
                    currentTypingLine.startsWith('Abstract:') ? 'text-red-700 dark:text-indigo-400 font-semibold' :
                    currentTypingLine.match(/^\d+\./) ? 'text-emerald-700 dark:text-emerald-400 font-semibold' :
                    currentTypingLine.startsWith('References') ? 'text-cyan-700 dark:text-cyan-400 font-semibold' :
                    currentTypingLine.startsWith('[') ? 'text-slate-600 dark:text-slate-400 italic' :
                    'text-slate-800 dark:text-slate-200'
                  }`}>
                    {currentTypingLine}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1 text-slate-900 dark:text-white"
                    >
                      |
                    </motion.span>
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return Component;
})();

// Memoized MinimalLine component for better performance
const MinimalLine = (() => {
  const Component = () => {
    const [priceHistory, setPriceHistory] = useState<{ price: number; timestamp: number; isUp: boolean }[]>([]);
    const [currentPrice, setCurrentPrice] = useState(383.45);
    const [isMarketUp, setIsMarketUp] = useState(true);

    // Optimized price generation
    const generateNextPrice = useCallback((prevPrice: number) => {
      const baseVolatility = prevPrice * 0.002;
      const isLargeMove = Math.random() < 0.2;
      const volatilityMultiplier = isLargeMove ? 3 : 1;
      const randomMove = (Math.random() - 0.5) * baseVolatility * volatilityMultiplier;
      const momentum = isMarketUp ? 0.0005 : -0.0005;
      
      if (Math.random() < 0.05) {
        setIsMarketUp(prev => !prev);
      }
      
      const newPrice = prevPrice + randomMove + (prevPrice * momentum);
      return Math.max(300, Math.min(450, newPrice));
    }, [isMarketUp]);

    // Reduced update frequency for better performance
    useEffect(() => {
      const interval = setInterval(() => {
        const newPrice = generateNextPrice(currentPrice);
        setCurrentPrice(newPrice);
        
        setPriceHistory(prev => {
          const newHistory = [...prev, {
            price: newPrice,
            timestamp: Date.now(),
            isUp: newPrice > currentPrice
          }];
          return newHistory.slice(-40); // Reduced from 60 for performance
        });
      }, 800); // Increased from 500ms for smoother performance

      return () => clearInterval(interval);
    }, [currentPrice, generateNextPrice]);

    // Initialize with fewer starting points
    useEffect(() => {
      const initialHistory: { price: number; timestamp: number; isUp: boolean }[] = [];
      let price = 383.45;
      
      for (let i = 0; i < 20; i++) { // Reduced from 30
        price = generateNextPrice(price);
        initialHistory.push({
          price: price,
          timestamp: Date.now() - (20 - i) * 800,
          isUp: Math.random() > 0.5
        });
      }
      
      setPriceHistory(initialHistory);
      setCurrentPrice(price);
    }, [generateNextPrice]);

    // Optimized SVG path generation
    const pathData = useMemo(() => {
      if (priceHistory.length < 2) return '';
      
      const width = 400;
      const height = 160;
      
      const prices = priceHistory.map(p => p.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      const priceRange = maxPrice - minPrice || 1;
      
      const padding = priceRange * 0.1;
      const scaledMin = minPrice - padding;
      const scaledMax = maxPrice + padding;
      const scaledRange = scaledMax - scaledMin;
      
      const stepX = width / (priceHistory.length - 1);
      
      return priceHistory.map((point, i) => {
        const x = i * stepX;
        const y = height - ((point.price - scaledMin) / scaledRange) * height;
        return i === 0 ? `M ${x},${y}` : `L ${x},${y}`;
      }).join(' ');
    }, [priceHistory]);

    // Optimized live point coordinates
    const livePointCoords = useMemo(() => {
      if (priceHistory.length < 2) return { x: 0, y: 80 };
      
      const prices = priceHistory.map(p => p.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      const priceRange = maxPrice - minPrice || 1;
      const padding = priceRange * 0.1;
      const scaledMin = minPrice - padding;
      const scaledMax = maxPrice + padding;
      const scaledRange = scaledMax - scaledMin;
      
      const stepX = 400 / (priceHistory.length - 1);
      const x = (priceHistory.length - 1) * stepX;
      const y = 160 - ((currentPrice - scaledMin) / scaledRange) * 160;
      
      return { x, y };
    }, [priceHistory, currentPrice]);

    const priceChange = useMemo(() => {
      if (priceHistory.length < 2) return 0;
      const prev = priceHistory[priceHistory.length - 2]?.price || currentPrice;
      return currentPrice - prev;
    }, [priceHistory, currentPrice]);

    const isPositive = priceChange >= 0;

    // Theme-aware colors for negative indicators
    const negativeStrokeColor = 'var(--negative-stroke, #dc2626)';
    const negativeFillColor = 'var(--negative-fill, #dc2626)';

    return (
      <div className="w-full h-[360px] sm:h-96 rounded-3xl border border-slate-300/90 dark:border-white/12 bg-white/100 dark:bg-slate-900/60 p-6 shadow-md overflow-hidden relative [--negative-stroke:#dc2626] dark:[--negative-stroke:#6366f1] [--negative-fill:#dc2626] dark:[--negative-fill:#6366f1]">
        {/* Crisper grid background */}
  {/* Background grid now handled globally in layout */}

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <LineChart className="w-5 h-5 text-red-600 dark:text-indigo-400" />
            <span className="text-slate-900 dark:text-slate-200 text-sm font-medium">Analytics</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.div 
              className={`w-2 h-2 rounded-full ${isPositive 
                ? 'bg-green-500' 
                : 'bg-red-500'}`}
              animate={{ 
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.1, 0.8]
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-xs text-slate-600 dark:text-slate-400">live</span>
          </div>
        </div>

        {/* Main chart */}
  <div className="relative z-10 h-[240px] w-full">
          <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
            <defs>
              <linearGradient id="stockLineGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b91c1c" stopOpacity="1" />
                <stop offset="50%" stopColor="#dc2626" stopOpacity="1" />
                <stop offset="100%" stopColor="#7f1d1d" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="stockLineGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
                <stop offset="100%" stopColor="#3730a3" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="areaFillGradientLight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="areaFillGradientDark" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Area under curve */}
            {pathData && (
              <>
                <path
                  d={`${pathData} L 400,160 L 0,160 Z`}
                  fill="url(#areaFillGradientLight)"
                  className="block dark:hidden"
                />
                <path
                  d={`${pathData} L 400,160 L 0,160 Z`}
                  fill="url(#areaFillGradientDark)"
                  className="hidden dark:block"
                />
              </>
            )}

            {/* Main price line */}
            {pathData && (
              <>
                <path
                  d={pathData}
                  fill="none"
                  stroke="url(#stockLineGradientLight)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="block dark:hidden"
                  style={{ filter: 'drop-shadow(0 6px 12px rgba(220,38,38,0.18))' }}
                />
                <path
                  d={pathData}
                  fill="none"
                  stroke="url(#stockLineGradientDark)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hidden dark:block"
                  style={{ filter: 'drop-shadow(0 6px 12px rgba(99,102,241,0.18))' }}
                />
              </>
            )}

            {/* Live indicator */}
            <g>
              <motion.circle
                cx={livePointCoords.x}
                cy={livePointCoords.y}
                r={6}
                fill="none"
                stroke={isPositive ? '#10b981' : negativeStrokeColor}
                strokeWidth="1.5"
                opacity="0.5"
                animate={{ 
                  r: [5, 9, 5],
                  opacity: [0.5, 0.15, 0.5]
                }}
                transition={{ 
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              <motion.circle
                cx={livePointCoords.x}
                cy={livePointCoords.y}
                r={3}
                fill={isPositive ? '#10b981' : negativeFillColor}
                stroke="#ffffff"
                strokeWidth="1.5"
                animate={{ 
                  cx: livePointCoords.x,
                  cy: livePointCoords.y
                }}
                transition={{ 
                  duration: 0.2,
                  ease: 'easeOut'
                }}
              />
              
              <circle
                cx={livePointCoords.x}
                cy={livePointCoords.y}
                r={1}
                fill={negativeFillColor}
              />
            </g>
          </svg>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-4 right-4">
          <motion.div 
            className="w-2 h-2 rounded-full bg-slate-400/30 dark:bg-white/30"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    );
  };
  
  return Component;
})();


// ====== Research Stack Component ======
const ResearchStack = (() => {
  const Component = () => {
    const rows = [
      { tag: 'Manuscript', progress: 0.72 },
      { tag: 'Experiment Notes', progress: 0.45 },
      { tag: 'Overview', progress: 0.88 },
    ];

    return (
      <div className="w-full h-[360px] sm:h-96 rounded-3xl border border-slate-300/80 dark:border-white/12 bg-white/100 dark:bg-slate-900/60 p-6 shadow-sm overflow-hidden flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-red-600 dark:text-indigo-400" />
          <span className="text-slate-900 dark:text-slate-200 text-sm font-medium">Research</span>
        </div>

        <div className="flex-1 flex flex-col justify-between space-y-4">
          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 p-3 flex flex-col justify-between h-[calc(33%-0.5rem)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-900 dark:text-slate-200 text-sm font-medium">{r.tag}</span>
                <span className="text-[11px] text-slate-600 dark:text-slate-400">in progress</span>
              </div>
              <div className="h-3.5 w-full rounded-full bg-slate-200/70 dark:bg-white/8 overflow-hidden shadow-inner">
                {/* Light mode progress (maroon) */}
                <motion.div
                  className="h-full rounded-full block dark:hidden"
                  style={{ background: 'linear-gradient(90deg,#c81a1a,#dc2626)' }}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.round(r.progress * 100)}%` }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                />

                {/* Dark mode progress (indigo) */}
                <motion.div
                  className="h-full rounded-full hidden dark:block"
                  style={{ background: 'linear-gradient(90deg,#4f46e5,#6366f1)' }}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.round(r.progress * 100)}%` }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
  return Component;
})();

// ====== Dashboard Component ======
const CalmDashboard = (() => {
  const Component = () => {
    const [t, setT] = useState(0);
    
    useEffect(() => {
      const id = setInterval(() => setT((v) => v + 1), 150); // Slightly slower for performance
      return () => clearInterval(id);
    }, []);

    const N = 50; // Reduced from 60
    const series = useMemo(
      () =>
        Array.from({ length: N }, (_, i) => {
          const y = 40 + 20 * Math.sin((i + t) * 0.15) + 8 * Math.cos((i + t) * 0.05);
          return y;
        }),
      [t]
    );

    const pathD = useMemo(() => {
      const w = 400, h = 80, step = w / (N - 1);
      return `M 0,${h - series[0]} ` + series.map((y, i) => (i === 0 ? '' : `L ${i * step},${h - y}`)).join(' ');
    }, [series]);

    const tags = ['Accuracy', 'Loss', 'Precision', 'Recall'];

    return (
      <div className="w-full h-[360px] sm:h-96 rounded-3xl border border-slate-200/80 dark:border-white/12 bg-white/96 dark:bg-white/6 backdrop-blur-xs p-5 shadow-xl flex flex-col overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-red-600 dark:text-indigo-400" />
            <span className="text-slate-900 dark:text-slate-200 text-sm font-medium">Dashboard</span>
          </div>
          <span className="text-xs text-slate-600 dark:text-slate-400">metrics</span>
        </div>

  <div className="grid grid-cols-2 gap-3 mb-4">
          {tags.map((tag, i) => (
            <div key={i} className="rounded-xl border border-slate-300/80 dark:border-white/14 bg-white/100 dark:bg-slate-800/60 p-3 flex flex-col justify-between h-16 shadow-sm">
              <div className="text-xs text-slate-700 dark:text-slate-300 mb-2 font-medium">{tag}</div>
              <div className="w-full h-2.5 bg-slate-200/70 dark:bg-slate-700/30 rounded-full overflow-hidden">
                {/* Light mode metric fill */}
                <motion.div
                  className="h-full rounded-full block dark:hidden"
                  style={{ background: 'linear-gradient(90deg,#c81a1a,#dc2626)', boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.06)' }}
                  animate={{ width: ['35%', '75%', '50%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                />

                {/* Dark mode metric fill */}
                <motion.div
                  className="h-full rounded-full hidden dark:block"
                  style={{ background: 'linear-gradient(90deg,#4f46e5,#6366f1)', boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.06)' }}
                  animate={{ width: ['35%', '75%', '50%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 p-3 flex-1 min-h-0">
          <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="dashLight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b91c1c" stopOpacity="1" />
                <stop offset="100%" stopColor="#7f1d1d" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="dashDark" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4f46e5" stopOpacity="1" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path d={pathD} fill="none" stroke="url(#dashDark)" className="hidden dark:block" strokeWidth="2.4" style={{ filter: 'drop-shadow(0 4px 8px rgba(79,70,229,0.08))' }} />
            <path d={pathD} fill="none" stroke="url(#dashLight)" className="block dark:hidden" strokeWidth="2.4" style={{ filter: 'drop-shadow(0 4px 8px rgba(220,38,38,0.08))' }} />
          </svg>
        </div>
      </div>
    );
  };
  
  return Component;
})();

// ====== ML Pipeline Component ======
const CalmMLPipeline = (() => {
  const Component = () => {
    const lines = [
      'import pandas as pd',
      'from sklearn.ensemble import RandomForestClassifier',
      '',
      '# Load data',
      'data = pd.read_csv("data.csv")',
      'X, y = data.drop("target", 1), data["target"]',
      '',
      '# Train model',
      'model = RandomForestClassifier()',
      'model.fit(X, y)',
    ];
    
    const [currentLine, setCurrentLine] = useState<number>(0);
    const [currentChar, setCurrentChar] = useState<number>(0);
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentTypingLine, setCurrentTypingLine] = useState<string>('');

    useEffect(() => {
      const timer = setInterval(() => {
        if (currentLine < lines.length) {
          const fullLine = lines[currentLine];
          if (currentChar < fullLine.length) {
            // Type out character by character
            setCurrentTypingLine(fullLine.substring(0, currentChar + 1));
            setCurrentChar(prev => prev + 1);
          } else {
            // Line is complete, add to displayed lines and move to next
            setDisplayedLines(prev => [...prev, fullLine]);
            setCurrentTypingLine('');
            setCurrentLine(prev => prev + 1);
            setCurrentChar(0);
          }
        } else {
          // Reset animation after showing all lines
          setTimeout(() => {
            setDisplayedLines([]);
            setCurrentTypingLine('');
            setCurrentLine(0);
            setCurrentChar(0);
          }, 2500);
        }
      }, 20); // Very fast typing for code

      return () => clearInterval(timer);
    }, [currentLine, currentChar]);

    return (
  <div className="w-full h-[360px] sm:h-96 rounded-3xl border border-slate-300/80 dark:border-white/12 bg-white/100 dark:bg-slate-900/90 p-5 shadow-sm overflow-hidden flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Code className="w-5 h-5 text-red-700 dark:text-indigo-300" />
        <span className="text-slate-900 dark:text-slate-200 text-sm font-medium">Code</span>
      </div>
  <div className="rounded-2xl border border-slate-200/70 dark:border-white/12 bg-slate-50 dark:bg-slate-900/90 p-4 font-mono text-xs leading-tight flex-1 flex flex-col overflow-hidden">
          <div className="flex items-center mb-3">
            <div className="flex gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm" />
            </div>
            <span className="text-xs text-slate-600 dark:text-slate-400 ml-3">ml_pipeline.py</span>
          </div>
          
          <div className="flex-1 overflow-hidden">
            <div className="space-y-2">
              {displayedLines.map((line, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-slate-800 dark:text-slate-200 text-xs leading-relaxed flex items-start"
                >
                  <span className="text-slate-400 dark:text-slate-500 mr-3 select-none inline-block w-6 text-right flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className={`flex-1 ${
                    line.startsWith('import') || line.startsWith('from') ? 'text-red-700 dark:text-indigo-300' :
                    line.startsWith('#') ? 'text-red-600 dark:text-indigo-400' :
                    line.includes('pd.') || line.includes('RandomForestClassifier') ? 'text-red-800 dark:text-indigo-200' :
                    line.includes('model.') ? 'text-red-600 dark:text-indigo-400' :
                    line.includes('print') ? 'text-red-700 dark:text-indigo-300' :
                    line.includes('"') ? 'text-red-500 dark:text-indigo-500' :
                    'text-slate-900 dark:text-slate-100'
                  }`}>
                    {line || ' '}
                  </span>
                </motion.div>
              ))}
              {currentTypingLine && (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-slate-800 dark:text-slate-200 text-xs leading-relaxed flex items-start"
                >
                  <span className="text-slate-400 dark:text-slate-500 mr-3 select-none inline-block w-6 text-right flex-shrink-0">
                    {displayedLines.length + 1}
                  </span>
                  <span className={`flex-1 ${
                    currentTypingLine.startsWith('import') || currentTypingLine.startsWith('from') ? 'text-red-700 dark:text-indigo-300' :
                    currentTypingLine.startsWith('#') ? 'text-red-600 dark:text-indigo-400' :
                    currentTypingLine.includes('pd.') || currentTypingLine.includes('RandomForestClassifier') ? 'text-red-800 dark:text-indigo-200' :
                    currentTypingLine.includes('model.') ? 'text-red-600 dark:text-indigo-400' :
                    currentTypingLine.includes('print') ? 'text-red-700 dark:text-indigo-300' :
                    currentTypingLine.includes('"') ? 'text-red-500 dark:text-indigo-500' :
                    'text-slate-900 dark:text-slate-100'
                  }`}>
                    {currentTypingLine}
                    <motion.span 
                      animate={{ opacity: [1, 0, 1] }} 
                      transition={{ duration: 0.8, repeat: Infinity }} 
                      className="ml-1 text-slate-900 dark:text-white"
                    >
                      |
                    </motion.span>
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  return Component;
})();

// ====== Optimized Slides Array ======
const slides = [
  { id: 1, content: <MinimalLine />, title: 'Analytics' },
  { id: 2, content: <CalmMLPipeline />, title: 'Code' },
  { id: 3, content: <CalmDashboard />, title: 'Dashboard' },
  { id: 4, content: <ResearchWritingSlide />, title: 'Research' },
];

// ====== Main Hero Component ======
export function Hero() {
  const [current, setCurrent] = useState(0);

  // Slower slide transitions for better performance
  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 12000); // Increased from 9000ms
    return () => clearInterval(timer);
  }, []);

  const nextSlide = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prevSlide = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  return (

  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={heroVariants} initial="hidden" animate="visible" className="text-center lg:text-left">
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 dark:from-indigo-400 dark:via-indigo-400 dark:to-indigo-300 bg-clip-text text-transparent">
                Valmik Nahata
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-slate-700 dark:text-slate-300 block mt-4">
                Data Science Student & ML Researcher
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              UC San Diego Data Science student passionate about machine learning, research, and building impactful solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-red-700 dark:text-indigo-300 border-2 border-red-600 dark:border-indigo-400 hover:bg-red-50 dark:hover:bg-indigo-900/20 rounded-2xl backdrop-blur-sm hover:scale-105"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-red-600 dark:border-indigo-400 text-red-600 dark:text-indigo-400 hover:bg-red-50 dark:hover:bg-indigo-900/20 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} initial="hidden" animate="visible" className="relative flex flex-col items-center">
            <div className="relative w-full max-w-2xl">
              <motion.div
                key={slides[current].id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="w-full"
              >
                {slides[current].content}
              </motion.div>
            </div>

            <div className="flex items-center gap-6 mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={prevSlide}
                className="px-5 py-3 rounded-2xl bg-white/80 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-white dark:hover:bg-white/10 transition-all duration-300 border border-slate-200/60 dark:border-white/10"
                aria-label="Previous slide"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </motion.button>

              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === current 
                        ? 'bg-red-600 dark:bg-indigo-400 w-8' 
                        : 'bg-red-300 dark:bg-indigo-400/30 w-2.5 hover:bg-red-500 dark:hover:bg-indigo-400/50'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={nextSlide}
                className="px-5 py-3 rounded-2xl bg-white/80 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-white dark:hover:bg-white/10 transition-all duration-300 border border-slate-200/60 dark:border-white/10"
                aria-label="Next slide"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            <motion.div key={current} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mt-3 text-center">
              <span className="text-red-800 dark:text-indigo-200 text-sm font-medium bg-red-50 dark:bg-indigo-900/20 px-5 py-1.5 rounded-full border border-red-100 dark:border-indigo-400/30">
                {slides[current].title}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}