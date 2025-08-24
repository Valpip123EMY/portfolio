'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ResumePage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="relative min-h-screen pt-20 flex flex-col justify-center bg-white dark:bg-gradient-to-br dark:from-indigo-950 dark:via-slate-950 dark:to-indigo-900 transition-colors overflow-hidden">
      {/* Professional grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] dark:bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-800 dark:from-indigo-300 dark:to-indigo-400">
            Resume
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Download my latest resume or browse through it directly. Always updated with my latest experience and achievements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/resume1.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-700 to-red-800 dark:from-indigo-500 dark:to-indigo-600 text-white rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View PDF
            </a>
            <a 
              href="/resume1.pdf" 
              download="Valmik_Nahata_Resume.pdf"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/80 dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/20 text-slate-900 dark:text-white rounded-2xl font-medium transition-all duration-300 border border-slate-200/60 dark:border-white/20 shadow-lg hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </div>
        </motion.div>

        {/* PDF Embed */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="mb-16"
        >
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border border-slate-200/60 dark:border-white/10">
            <div className="p-4 bg-slate-50 dark:bg-white/10 flex items-center justify-between border-b border-slate-200/60 dark:border-white/10">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-200">Resume Preview</h2>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-indigo-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="relative bg-white dark:bg-slate-900" style={{ height: '800px' }}>
              <iframe
                src="/resume1.pdf"
                className="w-full h-full border-0"
                title="Valmik Nahata Resume"
              />
            </div>
          </div>
        </motion.div>

        {/* Quick Contact Info */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 backdrop-blur-sm text-center shadow-lg hover:scale-105 transition-all duration-300">
            <Mail className="w-8 h-8 text-red-600 dark:text-indigo-400 mx-auto mb-3" />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Email</h3>
            <a href="mailto:valmik.nahata@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-indigo-400 transition-colors">
              valmik.nahata@gmail.com
            </a>
          </div>
          <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 backdrop-blur-sm text-center shadow-lg hover:scale-105 transition-all duration-300">
            <Phone className="w-8 h-8 text-red-600 dark:text-indigo-400 mx-auto mb-3" />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Phone</h3>
            <span className="text-slate-600 dark:text-slate-400">(914) 584-8003</span>
          </div>
          <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 backdrop-blur-sm text-center shadow-lg hover:scale-105 transition-all duration-300">
            <MapPin className="w-8 h-8 text-red-600 dark:text-indigo-400 mx-auto mb-3" />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Location</h3>
            <span className="text-slate-600 dark:text-slate-400">New York City, NY</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}