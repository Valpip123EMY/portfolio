'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Filter, X, Calendar, MapPin, Award, ExternalLink, BookOpen, Trophy, Code2, Building2, ExternalLink as ExternalLinkIcon, ChevronDown, ChevronUp } from 'lucide-react';

type ExperienceOrProject = {
  id: string;
  title: string;
  organization: string;
  date: string;
  dateSort: Date;
  summary: string;
  tech: string[];
  category: string | string[];
  thumbnail?: string;
  role?: string;
  links?: { url: string; label: string; icon?: any }[];
};

const allExperience: ExperienceOrProject[] = [
  {
    id: 'dartmouth-medical-intern',
    title: 'Machine Learning Research Intern',
    organization: 'Dartmouth-Hitchcock Medical Center',
    date: 'Jun 2024 – Feb 2025',
    dateSort: new Date('2025-02-01'),
    summary: 'Developed memory-efficient RAG system using SLMs for pathology report interpretation, reducing memory usage by 93%+ compared to traditional LLMs while maintaining retrieval accuracy across 9,500+ TCGA reports. Implemented fusion search architecture integrating BM25 semantic similarity with FAISS quantized vector search to retrieve top-15 most relevant documents using HuggingFace transformers and all-MiniLM-L6-v2 embeddings. Co-authored research manuscript and designed accompanying conference poster and slide deck presentation.',
    tech: ['Python', 'HuggingFace', 'FAISS', 'SLMs', 'Machine Learning'],
    category: 'Research'
  },
  // ...existing code...
];

const allProjects: ExperienceOrProject[] = [
  {
    id: 'robotics-tutor',
    title: 'Robotics Tutor',
    summary: 'Designed comprehensive robotics curriculum for annual outreach program, teaching fundamental programming and engineering concepts to 100+ elementary school students through hands-on VEX robotics activities. Organized summer STEM camps and mentored middle school VEX robotics competition teams, providing technical guidance on robot design, programming strategies, and competitive preparation.',
    // thumbnail intentionally omitted to avoid school icon
    category: 'Independent',
    tech: ['VEX Robotics', 'Programming', 'Engineering', 'Curriculum Design'],
    date: 'Sep 2021 – Jun 2024',
    dateSort: new Date('2021-01-01'),
    organization: 'New Providence School District',
    role: 'Robotics Tutor',
  },
  {
    id: 'dartmouth-ml-research',
  title: 'Retrieval Augmented Generation for Pathology Reports',
  summary: 'Developed memory-efficient RAG system using SLMs for pathology report interpretation, reducing memory usage by 93%+ while maintaining retrieval accuracy across 9,500+ TCGA reports. Implemented fusion search architecture integrating BM25 semantic similarity with FAISS quantized vector search for top-15 document retrieval. Co-authored research manuscript and designed conference poster and slide deck presentation.',
  thumbnail: 'https://gdusa.com/wp-content/uploads/2018/02/dartmouthhead.jpg',
  category: 'Research',
    tech: ['Python', 'HuggingFace', 'FAISS', 'SLMs', 'Machine Learning'],
    date: 'Jun 2024 – Feb 2025',
    dateSort: new Date('2025-02-01'),
    organization: 'Dartmouth-Hitchcock Medical Center',
    role: 'Machine Learning Research Intern',
  // No links for this project
  },
  {
    id: 'transformative-ai-economics',
    title: 'The Early Economic Impacts of Transformative AI',
    summary: 'Co-developed novel temporal coherence framework for AI automation using GPT-4.1-mini to estimate effective time across 450+ O*NET tasks, identifying 8-hour coherence threshold for 80%+ automation. Conducted literature review and authored discussion sections statistically modeling 2024-2026 automation timeline projections, identifying regulatory constraints, human premium effects, and cost-implementation factors.',
    thumbnail: 'data:image/jpeg;base64,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',
  category: ['Research', 'Competition'],
    tech: ['Python', 'GPT-4.1-mini', 'Statistical Modeling', 'O*NET'],
    date: 'Apr 2025 – May 2025',
    dateSort: new Date('2025-05-01'),
    organization: 'Apart Research',
    role: '1st Place – Apart Research Economics of Transformative AI Sprint',
    links: [
      { url: 'https://apartresearch.com/project/the-early-economic-impacts-of-transformative-ai-a-focus-on-temporal-coherence-ipql', label: 'View Project', icon: ExternalLink }
    ]
  },
  {
    id: 'milwaukee-bucks-analytics',
    title: 'Milwaukee Bucks Fan Engagement Prediction System',
    summary: 'Directed 5-person team developing dual Random Forest models in Python using scikit-learn with Matplotlib and Seaborn visualizations, achieving 81%+ classification accuracy across propensity and churn analyses. Presented winning solution to franchise executives featuring 3 strategic recommendations including custom referral programs, IP crossover events, and Figma-prototyped mobile wayfinding app based on model insights.',
    thumbnail: 'https://www.fiservforum.com/assets/img/Bucks_FF-DD_Website-Generic-Graphics_Website-Event-Thumbnail-720x720-1-158f46d3ce.jpg',
  category: 'Competition',
    tech: ['Python', 'scikit-learn', 'Matplotlib', 'Seaborn', 'Figma'],
    date: 'Feb 2025 – Mar 2025',
    dateSort: new Date('2025-03-01'),
    organization: 'Milwaukee Bucks & Modine Manufacturing',
    role: '3rd Place – Milwaukee Bucks & Modine Manufacturing Business Analytics Hackathon',
  },
  {
    id: 'crab-pulsar-analysis',
  title: 'A Statistical Analysis of Crab Pulsar Giant Pulse Rates',
    summary: 'Implemented seasonal and solar proximity analysis to examine influences on 24,000+ Crab Pulsar giant pulses across 461-day study period in Python using NumPy and Astropy on shared JupyterHub infrastructure. Conducted 1.55GHz L-band radio observations of Crab Pulsar using Green Bank Observatory\'s 20m telescope. Identified irregular giant pulses from supernova SN2023ixf, enabling potential follow-up studies.',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Crab_Nebula.jpg/1200px-Crab_Nebula.jpg',
    category: 'Research',
    tech: ['Python', 'NumPy', 'Astropy', 'JupyterHub', 'Radio Astronomy'],
    date: 'Feb 2023 – Jul 2024',
    dateSort: new Date('2024-07-01'),
  organization: 'West Virginia University',
  role: 'Computational Astronomy Research Assistant',
    links: [
      { url: 'https://iopscience.iop.org/article/10.3847/1538-4357/ad6304', label: 'View Publication', icon: BookOpen }
    ]
  },
  {
    id: 'triangle-counting-algorithms',
  title: 'Cover Edge-Based Triangle Counting',
    summary: 'Integrated 22 sequential and 11 parallel triangle counting algorithms in C++ and collaboratively executed comprehensive benchmarking across 12 real-world SNAP and 12 synthetic Graph500 RMAT datasets. Standardized 15 algorithms into formal pseudocode with LaTeX, ensuring reproducibility in publication.',
    thumbnail: 'https://cs.lmu.edu/~ray/images/agraph.png',
    category: 'Research',
    tech: ['C++', 'SNAP', 'Graph500 RMAT', 'LaTeX', 'Algorithm Design'],
    date: 'Jan 2023 – May 2024',
    dateSort: new Date('2024-05-01'),
  organization: 'New Jersey Institute of Technology',
  role: 'Data Science Research Assistant',
    links: [
      { url: 'https://arxiv.org/abs/2403.02997', label: 'View Manuscript', icon: BookOpen }
    ]
  },
  {
    id: 'digital-asset-trading',
    title: 'Digital Asset Algorithmic Trading System',
    summary: 'Generated $6,000+ in profit using algorithmic trading strategies for Team Fortress 2 and Counter-Strike 2 digital assets. Developed Python automation scripts leveraging Backpack.tf and Marketplace.tf APIs to execute 2,400+ strategic transactions with real-time market analysis and price optimization.',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_HTqOkI6MNfXfytgF2fTYecvkBQs3ZkI2w&s',
    category: 'Independent',
    tech: ['Python', 'Backpack.tf API', 'Marketplace.tf API', 'Market Analysis'],
    date: 'Aug 2022 – Jan 2023',
    dateSort: new Date('2023-01-01'),
    organization: 'Independent Project',
    role: 'Independent Project',
  },
  {
    id: 'tree-plenish-automation',
    title: 'Data Automation Pipeline',
    summary: 'Developed Python automation pipeline using pandas and Google Sheets API with AWS-hosted SQL database to streamline financial tracking across 300+ partner schools, 3,200+ volunteers and 50,000+ sapling distributions. Executed market research on New England community colleges and presented strategic outreach framework to executive team, outlining pathway to expand environmental programs to 10+ new institutional partners.',
    thumbnail: 'https://static.wixstatic.com/media/328a94_533097609c1748668e24ced814d1705e~mv2.jpg/v1/fill/w_1029,h_772,al_c/328a94_533097609c1748668e24ced814d1705e~mv2.jpg',
    category: 'Experience',
    tech: ['Python', 'pandas', 'Google Sheets API', 'AWS', 'SQL'],
    date: 'Jun 2022 – Sep 2022',
    dateSort: new Date('2022-09-01'),
    organization: 'Tree-Plenish',
    role: 'Data Automation Intern',
  },
  // ...existing code...
  // TCNJ Hackathon (restored)
  {
    id: 'tcnj-hackathon',
    title: 'IoT Environmental Monitoring Dashboard',
    summary: 'Configured IoT sensors with Particle Boron development board to collect environmental data in real-time. Built live visualization dashboard in MATLAB displaying heat index, dew point, and barometric pressure metrics.',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/71/College_of_newjersey_seal.png'    ,
    category: 'Competition',
    tech: ['IoT', 'Particle Boron', 'MATLAB', 'Environmental Sensors', 'Data Visualization'],
    date: 'Jan 2023',
    dateSort: new Date('2023-01-01'),
    organization: 'The College of New Jersey (TCNJ)',
    role: '1st Place - Hack-Io-Thon',
  },
  // Kean University Hackathon (restored)
  {
    id: 'kean-hackathon',
    title: 'Node2Node',
    summary: 'Developed pathfinding algorithms in Python and GDScript to find optimal routes between user-defined nodes in Godot Engine. Created multimedia presentation demonstrating real-world applications and practical implementation of the solution.',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbRgRyj1XPKf154PWIwXa3vgetjZ4bWCtvBQ&s',
    category: 'Competition',
    tech: ['Python', 'GDScript', 'Godot Engine', 'Pathfinding Algorithms', 'Game Development'],
    date: 'Feb 2022',
    dateSort: new Date('2022-02-01'),
    organization: 'Kean University',
    role: '2nd Place - HackKean',
  },
  // ...existing code...
];

export function ProjectsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Enhanced state for filtering and search
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'date' | 'title' | 'category'>('date');
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());
  const [imageLoadingStates, setImageLoadingStates] = useState<Record<string, 'loading' | 'loaded' | 'error'>>({});

  // Get unique categories
  const categories = useMemo(() => {
  // Flatten categories to support both string and array
  const cats = Array.from(new Set(allProjects.flatMap(p => Array.isArray(p.category) ? p.category : [p.category])));
  return ['all', ...cats];
  }, []);

  // Filtered and sorted projects
  const filteredProjects = useMemo(() => {
    let filtered = [...allProjects];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
        project.organization.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project =>
        Array.isArray(project.category)
          ? project.category.includes(selectedCategory)
          : project.category === selectedCategory
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return b.dateSort.getTime() - a.dateSort.getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'category': {
          const aCat = Array.isArray(a.category) ? a.category[0] : a.category;
          const bCat = Array.isArray(b.category) ? b.category[0] : b.category;
          return aCat.localeCompare(bCat);
        }
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const toggleExpanded = (projectId: string) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const handleImageLoad = (projectId: string) => {
    setImageLoadingStates(prev => ({ ...prev, [projectId]: 'loaded' }));
  };

  const handleImageError = (projectId: string) => {
    setImageLoadingStates(prev => ({ ...prev, [projectId]: 'error' }));
  };

  const truncateText = (text: string, maxLength: number = 300) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
  <section className="relative min-h-screen flex flex-col justify-start transition-colors pt-16 pb-8 overflow-hidden">
  <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
      {/* Section Header */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        className="text-center mb-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-[#e3e6f3] font-sans tracking-tight drop-shadow-sm" style={{ letterSpacing: '-0.01em', fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
          Projects
        </h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-[#b3baff]/80 mb-1 font-light">
          <span className="font-medium text-slate-700 dark:text-[#b3baff]">{allProjects.length} projects</span> in research, competitions, and independent work
        </p>
      </motion.div>

      {/* Search and Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4 flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-center"
      >
        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-[#b3baff]/60 w-4 h-4" />
          <input
            type="text"
            placeholder="Search projects, technologies, organizations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-md border border-slate-300 dark:border-[#23263a]/60 bg-white dark:bg-[#23263a] text-slate-900 dark:text-[#e3e6f3] placeholder-slate-500 dark:placeholder-[#b3baff]/40 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:focus:ring-[#b3baff]/20 transition shadow-sm"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-[#b3baff]/60 hover:text-slate-700 dark:hover:text-[#b3baff]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-1">
          <Filter className="w-4 h-4 text-slate-500 dark:text-[#b3baff]/60" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 rounded-md border border-slate-300 dark:border-[#23263a]/60 bg-white dark:bg-[#23263a] text-slate-700 dark:text-[#b3baff] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:focus:ring-[#b3baff]/20"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Control */}
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4 text-slate-500 dark:text-[#b3baff]/60" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'title' | 'category')}
            className="px-3 py-2 rounded-md border border-slate-300 dark:border-[#23263a]/60 bg-white dark:bg-[#23263a] text-slate-700 dark:text-[#b3baff] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 dark:focus:ring-[#b3baff]/20"
            style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
          >
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
            <option value="category">Sort by Category</option>
          </select>
        </div>
      </motion.div>

      {/* Results Counter */}
      <div className="text-center text-xs text-slate-500 dark:text-[#b3baff]/60 mb-2">
        {filteredProjects.length === allProjects.length
          ? `Showing all ${allProjects.length} projects`
          : `Showing ${filteredProjects.length} of ${allProjects.length} projects`
        }
      </div>
    </div>

  {/* Enhanced Projects Grid */}
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[89rem] mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <div className="text-slate-400 dark:text-slate-500 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              </div>
              <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">No projects found</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-2 bg-red-600 dark:bg-indigo-600 text-white rounded-lg hover:bg-red-700 dark:hover:bg-indigo-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredProjects.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-xl border border-slate-200/80 dark:border-white/15 bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 p-7 flex flex-col overflow-hidden hover:scale-[1.02] min-h-[340px] hover:border-red-300/50 dark:hover:border-indigo-400/50 focus-within:ring-2 focus-within:ring-red-500/20 dark:focus-within:ring-indigo-500/20"
                tabIndex={0}
                role="article"
                aria-label={`Project: ${item.title}`}
              >
                {/* Header with image, title, status, and category */}
                <div className="flex items-start gap-4 mb-6">
                  {item.thumbnail && item.id !== 'robotics-tutor' && (
                    <div className="flex-shrink-0 relative">
                      {imageLoadingStates[item.id] === 'loading' && (
                        <div className="w-20 h-20 rounded-xl bg-slate-200 dark:bg-slate-700 animate-pulse border-2 border-slate-200/80 dark:border-white/20" />
                      )}
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className={`w-20 h-20 object-cover rounded-xl border-2 border-slate-200/80 dark:border-white/20 shadow-md group-hover:shadow-lg transition-shadow duration-300 ${
                          imageLoadingStates[item.id] === 'loading' ? 'hidden' : 'block'
                        }`}
                        onLoad={() => handleImageLoad(item.id)}
                        onError={() => handleImageError(item.id)}
                      />
                      {imageLoadingStates[item.id] === 'error' && (
                        <div className="w-20 h-20 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center border-2 border-slate-200/80 dark:border-white/20">
                          <Building2 className="w-8 h-8 text-slate-400" />
                        </div>
                      )}
                    </div>
                  )}
                  <div className="flex-1 min-w-0 space-y-2">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2">
                      {(Array.isArray(item.category) ? item.category : [item.category]).map((cat) => (
                        <span key={cat} className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium">
                          {cat === 'Competitions' ? 'Competition' : cat}
                        </span>
                      ))}
                    </div>

                    {/* Title with link - improved UI/UX theme */}
                    {item.links && item.links.length > 0 ? (
                      <a
                        href={item.links[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg md:text-xl font-bold text-slate-900 dark:text-[#e3e6f3] hover:text-red-600 dark:hover:text-indigo-300 transition-colors group/link leading-tight block font-sans tracking-tight drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500/40 dark:focus:ring-[#b3baff]/40 rounded"
                        aria-label={`External link to ${item.title}`}
                        style={{ letterSpacing: '-0.01em', fontFamily: 'Inter, ui-sans-serif, system-ui' }}
                      >
                        {item.title}
                        <ExternalLinkIcon className="w-5 h-5 opacity-60 group-hover/link:opacity-100 ml-2 transition-opacity duration-200 inline align-middle" style={{ verticalAlign: '-0.125em' }} />
                      </a>
                    ) : (
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-[#e3e6f3] leading-tight font-sans tracking-tight drop-shadow-sm" style={{ letterSpacing: '-0.01em', fontFamily: 'Inter, ui-sans-serif, system-ui' }}>{item.title}</h3>
                    )}
                  </div>
                </div>

                {/* Enhanced Summary with Read More */}
                <div className="mb-5 text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium space-y-3">
                  <p>
                    {expandedProjects.has(item.id) 
                      ? item.summary 
                      : truncateText(item.summary, 200)
                    }
                  </p>
                  {item.summary.length > 200 && (
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className="text-red-600 dark:text-indigo-400 hover:text-red-700 dark:hover:text-indigo-300 text-sm font-medium flex items-center gap-1 transition-colors"
                      aria-label={expandedProjects.has(item.id) ? 'Show less' : 'Show more'}
                    >
                      {expandedProjects.has(item.id) ? (
                        <>Show less <ChevronUp className="w-4 h-4" /></>
                      ) : (
                        <>Read more <ChevronDown className="w-4 h-4" /></>
                      )}
                    </button>
                  )}
                </div>

                {/* Enhanced Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-default"
                      title={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enhanced Footer */}
                <div className="mt-auto pt-4 border-t border-slate-200/80 dark:border-white/15 text-sm space-y-2">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>

                  {/* Organization with enhanced styling */}
                  <div className="text-slate-600 dark:text-slate-400 font-medium">
                    {/* Special handling for competitions and positions */}
                    {item.id === 'transformative-ai-economics' ? (
                      <span>1st place @ <span className="font-bold text-red-700 dark:text-indigo-400">Apart Research</span> Economics of Transformative AI Research Sprint</span>
                    ) : item.id === 'milwaukee-bucks-analytics' ? (
                      <span>3rd place @ <span className="font-bold text-red-700 dark:text-indigo-400">Milwaukee Bucks & Modine Manufacturing</span> Business Analytics Hackathon</span>
                    ) : item.id === 'tcnj-hackathon' ? (
                      <span>1st place @ <span className="font-bold text-red-700 dark:text-indigo-400">The College of New Jersey (TCNJ)</span> Hack-Io-Thon</span>
                    ) : item.id === 'kean-hackathon' ? (
                      <span>2nd place @ <span className="font-bold text-red-700 dark:text-indigo-400">Kean University</span> HackKean</span>
                    ) : item.id === 'crab-pulsar-analysis' ? (
                      <span>Computational Astronomy Research Assistant @ <span className="font-bold text-red-700 dark:text-indigo-400">West Virginia University</span></span>
                    ) : item.id === 'dartmouth-ml-research' ? (
                      <span>Machine Learning Research Intern @ <span className="font-bold text-red-700 dark:text-indigo-400">Dartmouth-Hitchcock Medical Center</span></span>
                    ) : item.id === 'triangle-counting-algorithms' ? (
                      <span>Data Science Research Assistant @ <span className="font-bold text-red-700 dark:text-indigo-400">New Jersey Institute of Technology</span></span>
                    ) : item.id === 'tree-plenish-automation' ? (
                      <span>Data Automation Intern @ <span className="font-bold text-red-700 dark:text-indigo-400">Tree-Plenish</span></span>
                    ) : item.category === 'Independent' && item.organization === 'Independent Project' ? (
                      <span>Independent Project @ <span className="font-bold text-red-700 dark:text-indigo-400">Steam</span></span>
                    ) : (
                      <span>{item.role} @ <span className="font-bold text-red-700 dark:text-indigo-400">{item.organization}</span></span>
                    )}
                  </div>

                  {/* Additional Links */}
                  {item.links && item.links.length > 1 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.links.slice(1).map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-red-600 dark:text-indigo-400 hover:text-red-700 dark:hover:text-indigo-300 flex items-center gap-1 transition-colors"
                        >
                          {link.icon && <link.icon className="w-3 h-3" />}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          )}
    </div>
  </section>
  );
}

export default ProjectsPage;
