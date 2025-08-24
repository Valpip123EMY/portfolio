'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Calendar, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle, 
  Linkedin, 
  Github,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  User,
  Zap
} from 'lucide-react';
import { isValidEmail } from '../../lib/utils';

// Animation variants matching hero page
const heroVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// Interactive contact visualization
const ContactVisualization = () => {
  const [activeMethod, setActiveMethod] = useState(0);
  
  const contactMethods = [
    { icon: Mail, label: 'Email', color: 'from-red-500 to-red-600', description: 'Best for detailed inquiries' },
    { icon: Linkedin, label: 'LinkedIn', color: 'from-blue-500 to-blue-600', description: 'Professional networking' },
    { icon: Phone, label: 'Phone', color: 'from-green-500 to-green-600', description: 'Quick conversations' },
    { icon: MessageSquare, label: 'Form', color: 'from-purple-500 to-purple-600', description: 'Structured messages' }
  ];

  return (
    <div className="w-full h-80 rounded-3xl border border-slate-300/90 dark:border-white/12 bg-white/100 dark:bg-slate-900/60 p-6 shadow-md overflow-hidden relative">
      {/* Background grid now handled globally in layout */}
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-5 h-5 text-red-600 dark:text-indigo-400" />
          <span className="text-slate-900 dark:text-slate-200 text-sm font-medium">Get In Touch</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 flex-1">
          {contactMethods.map((method, i) => (
            <motion.div
              key={i}
              onClick={() => setActiveMethod(i)}
              className={`rounded-2xl border cursor-pointer transition-all duration-300 p-4 flex flex-col items-center justify-center text-center ${
                i === activeMethod 
                  ? 'border-red-300 dark:border-indigo-400/60 bg-red-50 dark:bg-indigo-900/30 scale-105' 
                  : 'border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:scale-102'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-3 shadow-lg`}>
                <method.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-900 dark:text-slate-200 mb-1">{method.label}</span>
              <span className="text-xs text-slate-600 dark:text-slate-400">{method.description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!isValidEmail(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', inquiryType: '', message: '' });
  };

  // Contact methods data
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'valmik.nahata@gmail.com',
      href: 'mailto:valmik.nahata@gmail.com',
      description: 'Best way to reach me',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: '/in/valmik-nahata',
      href: 'https://www.linkedin.com/in/valmik-nahata',
      description: 'Professional network',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '(914) 584-8003',
      href: 'tel:+19145848003',
      description: 'Available for calls',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'New York City, NY',
      href: null,
      description: 'UC San Diego student',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'Coming Soon',
      href: null,
      description: 'Portfolio repositories',
      isComingSoon: true,
    },
  ];

  if (isSubmitted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center px-6"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 dark:from-indigo-900/50 dark:to-indigo-800/50 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-200 dark:border-indigo-400/30 shadow-lg">
            <CheckCircle className="w-10 h-10 text-red-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-700 via-red-500 to-indigo-400 dark:from-indigo-400 dark:via-indigo-400 dark:to-red-400 bg-clip-text text-transparent mb-4">
            Message Sent!
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsSubmitted(false)}
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-red-600 dark:border-indigo-400 text-red-600 dark:text-indigo-400 hover:bg-red-50 dark:hover:bg-indigo-900/20 rounded-2xl transition-all duration-300"
          >
            Send Another Message
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </section>
    );
  }

  return (
  <section className="relative min-h-screen flex flex-col justify-start items-center pt-16 pb-8 px-4">
      <div className="max-w-7xl w-full mx-auto">
        {/* Animated Gradient Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="text-center text-3xl md:text-4xl font-bold mb-4 text-[#e3e6f3] dark:text-[#e3e6f3] font-sans tracking-tight drop-shadow-sm"
          style={{ letterSpacing: '-0.01em', fontFamily: 'Inter, ui-sans-serif, system-ui' }}
        >
          Let's Connect
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="text-center text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto font-normal"
        >
          Ready to collaborate, discuss opportunities, or just say hi? Reach out below!
        </motion.p>

  <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Interactive Visualization & Contact Methods */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible" className="space-y-8">
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-none rounded-lg p-5 flex items-center gap-4 hover:border-red-500 dark:hover:border-indigo-400 transition-all duration-200"
                  whileHover={{ y: -2 }}
                >
                  <method.icon className="w-7 h-7 text-red-700 dark:text-indigo-200" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-0.5">{method.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs mb-0.5 truncate">{method.description}</p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-red-600 dark:text-indigo-400 hover:text-red-700 dark:hover:text-indigo-300 transition-colors font-medium inline-flex items-center gap-1 text-sm"
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {method.value}
                        {method.href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
                      </a>
                    ) : (
                      <span className={`${method.isComingSoon ? 'text-slate-500 dark:text-slate-500 italic' : 'text-slate-700 dark:text-slate-300'}`}>{method.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible">
            <div className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-none rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-red-600 dark:text-indigo-400" />
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Send a Message</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-slate-900 border rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:focus:ring-indigo-400/20 focus:border-red-300 dark:focus:border-indigo-400 transition-all duration-200 shadow-sm ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-slate-900 border rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:focus:ring-indigo-400/20 focus:border-red-300 dark:focus:border-indigo-400 transition-all duration-200 shadow-sm ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
                      placeholder="your.email@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:focus:ring-indigo-400/20 focus:border-red-300 dark:focus:border-indigo-400 transition-all duration-200 shadow-sm"
                      placeholder="Subject of your message"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:focus:ring-indigo-400/20 focus:border-red-300 dark:focus:border-indigo-400 transition-all duration-200 shadow-sm"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="Research Collaboration">Research Collaboration</option>
                      <option value="Internship Opportunity">Internship Opportunity</option>
                      <option value="Project Inquiry">Project Inquiry</option>
                      <option value="Academic Question">Academic Question</option>
                      <option value="General Question">General Question</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-white dark:bg-slate-900 border rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:focus:ring-indigo-400/20 focus:border-red-300 dark:focus:border-indigo-400 resize-none transition-all duration-200 shadow-sm ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'}`}
                    placeholder="Tell me about your project, requirements, and goals..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                  className="group w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-red-600 dark:border-indigo-400 text-red-600 dark:text-indigo-400 hover:bg-red-50 dark:hover:bg-indigo-900/20 rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-red-600 dark:border-indigo-400 border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Professional Note */}
        <motion.div variants={itemVariants} initial="hidden" animate="visible" className="mt-16 text-center">
          <div className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-base mb-2">Response Time</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              I typically respond to all inquiries within 24 hours. For urgent matters, please call directly or mention "urgent" in your subject line.
            </p>
          </div>
        </motion.div>
      </div>

  {/* Removed scroll indicator */}
    </section>
  );
}