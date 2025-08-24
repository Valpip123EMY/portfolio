'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
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
import '../../app/middleearth.css';
import { isValidEmail } from '../../lib/utils';

// Animation variants matching hero page
const heroVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.15 } },
};

// Patch: override heading and main text color for better contrast
// (Assume main heading and summary use .text-slate-600 or similar)

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

  // No longer used, replaced by inline contact methods below
  return null;
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
      icon: Github,
      title: 'GitHub',
      value: 'Coming Soon',
      href: null,
      description: 'Portfolio repositories',
      isComingSoon: true,
    },
  // Location removed
  ];

  if (isSubmitted) {
    return (
      <section className="relative min-h-screen flex flex-col justify-start pt-16 pb-8 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 dark:from-indigo-900/50 dark:to-indigo-800/50 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-200 dark:border-indigo-400/30 shadow-lg">
              <CheckCircle className="w-10 h-10 text-red-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-[#e3e6f3] font-sans tracking-tight drop-shadow-sm" style={{ letterSpacing: '-0.01em', fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
              Message Sent!
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-[#b3baff]/80 mb-1 font-light">
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
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-start pt-16 pb-8 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Header */}
        <motion.div initial="hidden" animate="visible" variants={heroVariants} className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 dark:text-[#e3e6f3] font-sans tracking-tight drop-shadow-lg" style={{ letterSpacing: '-0.01em', fontFamily: 'Inter, ui-sans-serif, system-ui', lineHeight: 1.1 }}>
            Let's Connect
          </h2>
          <p className="text-lg md:text-2xl text-slate-600 dark:text-[#b3baff]/80 mb-2 font-medium max-w-2xl mx-auto" style={{ lineHeight: 1.4 }}>
            Ready to collaborate, discuss opportunities, or just say hi? Reach out below!
          </p>
        </motion.div>

        {/* Contact Methods - Centered in 2 columns */}
        <motion.div initial="hidden" animate="visible" variants={fadeInVariants} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center max-w-3xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex flex-col justify-center items-center gap-3 w-full max-w-sm sm:w-auto sm:min-w-[280px] text-center">
                <method.icon className="w-8 h-8 text-red-700 dark:text-indigo-200 mx-auto" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-white mb-0.5" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>{method.title}</h3>
                  {method.description && (
                    <p className="text-slate-200 dark:text-slate-300 text-base mb-0.5">{method.description}</p>
                  )}
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-red-400 dark:text-indigo-300 hover:text-red-300 dark:hover:text-indigo-200 transition-colors font-medium inline-flex items-center gap-1 text-lg justify-center"
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {method.value}
                      {method.href.startsWith('http') && <ExternalLink className="w-4 h-4" />}
                    </a>
                  ) : (
                    <span className={`${method.isComingSoon ? 'text-slate-400 dark:text-slate-500 italic' : 'text-slate-200 dark:text-slate-300'}`}>{method.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

  {/* Quote removed as requested */}
      </div>
    </section>
  );
}