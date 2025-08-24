'use client';


import { motion } from 'framer-motion';
import { Code, Database, Lightbulb, Users, GraduationCap, Sparkles } from 'lucide-react';

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
  <section className="relative min-h-screen flex flex-col justify-start items-center pt-16 pb-8 px-4">
      <div className="max-w-6xl w-full mx-auto">
        {/* Animated Gradient Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center text-3xl md:text-4xl font-bold mb-4 text-[#e3e6f3] dark:text-[#e3e6f3] font-sans tracking-tight drop-shadow-sm"
          style={{ letterSpacing: '-0.01em', fontFamily: 'Inter, ui-sans-serif, system-ui' }}
        >
          About Me
        </motion.h1>
        {/* Professional Summary */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Data Science student with a passion for building intelligent systems that solve real-world problems. I love working at the intersection of technology and impact.
        </motion.p>

        {/* About Me */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <div className="p-6 border border-slate-200/60 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-800/30 rounded-lg">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">About Me</h2>
            <div className="space-y-3 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                I'm a Data Science student at UC San Diego with experience in machine learning research, data analysis, and building scalable solutions. My work spans various domains from healthcare to finance, always focused on creating meaningful impact.
              </p>
              <p>
                Whether it's developing ML models, automating workflows, or diving deep into research, I enjoy tackling complex problems with creative approaches. I believe in learning by doing and am always excited to take on new challenges.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-6">What I Work With</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="p-4 border border-slate-200/60 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-800/30 rounded-lg"
              >
                <skill.icon className="w-6 h-6 text-red-600 dark:text-indigo-400 mb-2" />
                <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-1">{skill.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-red-600 dark:text-indigo-400" />
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Education</h2>
            </div>
            <div className="border border-slate-200/60 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-800/30 rounded-lg p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base font-medium text-slate-900 dark:text-slate-100">UC San Diego</h3>
                  <div className="text-slate-700 dark:text-slate-200 text-sm">B.S. Data Science</div>
                </div>
                <span className="text-slate-500 dark:text-slate-400 text-sm">2024 – Present</span>
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">
                Focusing on machine learning, statistical methods, and data-driven problem solving
              </div>
            </div>
          </div>
        </motion.div>
      </div>
  </section>
  );
}