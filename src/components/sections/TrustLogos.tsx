'use client';

import { motion } from 'framer-motion';

const affiliations = [
  'University of California, San Diego',
  'Dartmouth-Hitchcock Medical Center',
  'West Virginia University',
  'New Jersey Institute of Technology',
  'Tree-Plenish',
  'Apart Research',
  'Milwaukee Bucks',
  'Green Bank Observatory',
  'Modine Manufacturing',
  'Kean University',
  'The College of New Jersey'
];

export function TrustLogos() {
  return (
  <section className="py-12 bg-white/5 dark:bg-indigo-950/30">
      <div className="container-responsive">
        <div className="text-center mb-8">
          <p className="text-slate-400 dark:text-slate-400 light:text-red-700 text-sm font-medium">
            Projects, competitions, and research affiliations
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex space-x-16 animate-marquee">
            {[...affiliations, ...affiliations].map((affiliation, index) => (
              <div
                  key={index}
                  className="flex-shrink-0 text-slate-400 dark:text-slate-400 light:text-red-700 hover:light:text-red-900 dark:hover:text-slate-100 transition-colors duration-300 font-medium text-lg whitespace-nowrap"
                >
                {affiliation}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}