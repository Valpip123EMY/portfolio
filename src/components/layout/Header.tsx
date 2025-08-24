'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
      
      // Update active section based on scroll position
      const sections = ['hero', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        isScrolled
          ? 'h-16 bg-transparent'
          : 'h-20 bg-transparent'
      )}
    >
      <div className="container-responsive h-full px-2 sm:px-4">
        <div className="flex items-center justify-center h-full relative">
          {/* Logo */}
          {/* Logo removed as requested */}

          {/* Navigation - Centered with collective blur - Same on all screen sizes */}
          <div className="flex items-center justify-center px-1 sm:px-2 py-1 rounded-xl sm:rounded-2xl bg-gradient-to-r from-red-100/70 via-white/60 to-red-200/60 dark:from-indigo-900/60 dark:via-indigo-950/60 dark:to-indigo-900/60 backdrop-blur-md shadow-[0_2px_24px_0_rgba(220,38,38,0.10)] dark:shadow-[0_2px_24px_0_rgba(99,102,241,0.13)]">
            <nav className="flex items-center space-x-0.5 sm:space-x-1">
              {navigation.map((item, idx) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      'relative px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl text-red-700 dark:text-indigo-300 hover:text-red-900 dark:hover:text-indigo-100 font-medium text-xs sm:text-sm hover:bg-red-100/50 dark:hover:bg-indigo-900/30',
                      isActive &&
                        'text-white dark:text-indigo-100 bg-gradient-to-r from-red-400 via-red-600 to-red-400 dark:from-indigo-700 dark:via-indigo-900 dark:to-indigo-700 shadow-lg scale-105 z-10 ring-2 ring-red-500 dark:ring-indigo-400 ring-offset-2 ring-offset-white dark:ring-offset-indigo-950 font-bold'
                    )}
                  >
                    {item.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right side actions - Positioned absolutely */}
          <div className="absolute right-0 flex items-center">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2.5 rounded-xl border border-red-200/30 dark:border-indigo-700/30 bg-red-50/50 dark:bg-indigo-900/20 text-red-700 dark:text-indigo-300 hover:text-red-900 dark:hover:text-indigo-100 hover:bg-red-100/50 dark:hover:bg-indigo-800/30 hover:border-red-300/50 dark:hover:border-indigo-600/50 shadow-[0_0_16px_4px_rgba(255,0,0,0.08)] dark:shadow-[0_0_16px_4px_rgba(99,102,241,0.10)] backdrop-blur-sm"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.05 }}
                  >
                    <Sun className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.div>
                ) : theme === 'light' ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.05 }}
                  >
                    <Moon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="monitor"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.05 }}
                  >
                    <Monitor className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Resume CTA removed as requested */}
          </div>
        </div>
      </div>
    </header>
  );
}