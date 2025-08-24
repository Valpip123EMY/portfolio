'use client';


import { motion } from 'framer-motion';
import { Code, Database, Lightbulb, Users, GraduationCap, User2 } from 'lucide-react';
import '../../app/middleearth.css';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08 } }),
};

const skills = [
  {
    icon: Code,
    title: 'Programming',
    description: 'Python, R, C++, JavaScript, SQL, MATLAB, LaTeX',
  },
  {
    icon: Database,
    title: 'Frameworks',
    description: 'PyTorch, TensorFlow, scikit-learn, pandas, React',
  },
  {
    icon: Lightbulb,
    title: 'Tools',
    description: 'VS Code, Jupyter, Git, AWS, Figma, Excel',
  },
  {
    icon: Users,
    title: 'Interests',
    description: 'LLMs, RAG, NLP, Visualization, System Design',
  }
];


export function AboutPage() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start pt-16 pb-8 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-[#e3e6f3] font-sans tracking-tight drop-shadow-sm" style={{ letterSpacing: '-0.01em', fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
            About Me
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-[#b3baff]/80 mb-1 font-light">
            {/* Optionally add a subtitle or summary here */}
          </p>
        </motion.div>

        {/* Main Content: 2-column grid on desktop */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          {/* Left: About (no box) */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                <User2 className="w-6 h-6 text-red-600 dark:text-indigo-400" />
                Who I Am
              </h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                <p>
                  I’m a Data Science student at <span className="font-semibold text-red-700 dark:text-indigo-400">UC San Diego</span> with hands-on experience in machine learning research, data analysis, and scalable solutions. My work spans healthcare, finance, and more—always focused on meaningful impact.
                </p>
                <p>
                  Whether developing ML models, automating workflows, or diving deep into research, I thrive on tackling complex problems with creative, practical approaches. I believe in learning by doing and am always excited to take on new challenges.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills Grid (no box) + Soft Skills below */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-red-600 dark:text-indigo-400" />
                My Toolkit
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="flex items-start gap-3"
                  >
                    <skill.icon className="w-7 h-7 text-red-600 dark:text-indigo-400 mt-1" />
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">{skill.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Soft Skills under Toolkit */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                <div className="flex flex-col items-center">
                  <Users className="w-6 h-6 text-red-600 dark:text-indigo-400 mb-1" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Team Player</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center">Collaboration & communication at the core of my work.</span>
                </div>
                <div className="flex flex-col items-center">
                  <Lightbulb className="w-6 h-6 text-red-600 dark:text-indigo-400 mb-1" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Creative Thinker</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center">Solving problems with fresh, practical ideas.</span>
                </div>
                <div className="flex flex-col items-center">
                  <GraduationCap className="w-6 h-6 text-red-600 dark:text-indigo-400 mb-1" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Lifelong Learner</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-center">Always growing, always curious, always improving.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>



        {/* Closing Quote or CTA */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-2xl mx-auto text-center mt-8">
          <span className="middle-earth block text-slate-800 dark:text-slate-200 text-lg md:text-xl">
            "All we have to decide is what to do with the time that is given us."
          </span>
          <span className="block mt-2 text-xs text-slate-500 dark:text-slate-400 font-serif tracking-wide">— Gandalf</span>
        </motion.div>
      </div>
    </section>
  );
}