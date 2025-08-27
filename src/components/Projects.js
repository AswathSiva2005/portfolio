import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiEye, FiFilter, FiCode } from 'react-icons/fi';
const heroVideo = '/hero-bg.mp4';
import WaterDropletToggle from './WaterDropletToggle';

// Import project images
import agrochainImg from '../assets/project/agrochain.png';
import bookMarketImg from '../assets/project/book market.png';
import kecPortalImg from '../assets/project/kec portal.png';
import portfolioImg from '../assets/project/portfolio.png';
import spotifyCloneImg from '../assets/project/spotify-clone.png';
import studentConnectImg from '../assets/project/student connect app.png';
import virtualArtGalleryImg from '../assets/project/virtual art gallery.png';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Agrochain Lite',
      description: 'A blockchain-powered supply chain management solution for agriculture. Built with MERN stack, it ensures transparency, security, and real-time tracking in the farm-to-market process.',
      image: agrochainImg,
      technologies: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'http://agrochain-lite-5s88.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Book Marketplace',
      description: 'An online marketplace for buying and selling new or used books. Designed with a clean UI and integrated features for easy book discovery and secure transactions.',
      image: bookMarketImg,
      technologies: ['React', 'CSS', 'MongoDB', 'Bootstrap'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 3,
      title: 'KEC Student Portal',
      description: 'A responsive student portal built with React featuring animated UI, offline notifications, and smooth navigation for students and faculty.',
      image: kecPortalImg,
      technologies: ['HTML', 'Bootstrap', 'CSS'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 4,
      title: 'Aswath Portfolio',
      description: 'My personal portfolio showcasing skills, projects, and certifications with an elegant and responsive design.',
      image: portfolioImg,
      technologies: ['React', 'Tailwind CSS','Framer Motion'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 5,
      title: 'Spotify Clone',
      description: 'A frontend clone of Spotify with music player interface, playlist design, and interactive UI elements.',
      image: spotifyCloneImg,
      technologies: ['React', 'CSS', 'JavaScript'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'Student Alumni Connect App',
      description: 'A Flutter-based mobile app that connects students with alumni. Features include event updates, Q&A forums, and alumni networking with Firebase integration.',
      image: studentConnectImg,
      technologies: ['Flutter', 'Firebase'],
      category: 'mobile',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 7,
      title: 'Virtual Art Gallery',
      description: 'An interactive online art gallery built with Angular. It allows users to explore artworks virtually with smooth navigation, responsive design, and engaging UI elements. Designed for an immersive viewing experience.',
      image: virtualArtGalleryImg,
      technologies: ['Angular', 'TypeScript', 'CSS', 'Bootstrap'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-5 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={(e) => e.target.play()}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'block';
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div 
          className="absolute inset-0 w-full h-full object-cover bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900" 
          style={{display: 'none'}}
        ></div>
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      </div>
      
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-5"
        >
          <motion.div variants={itemVariants}>
            <span className="badge bg-white/20 backdrop-blur-md text-white border border-white/30 mb-3">
              Portfolio
            </span>
            <h2 className="display-5 fw-bold mb-4 text-white">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="lead text-white/80 mb-0" style={{ maxWidth: '600px' }}>
              Here are some of my recent projects that showcase my skills and passion for creating 
              exceptional digital experiences.
            </p>
          </motion.div>
        </motion.div>

        {/* Animated Filter Toggles */}
        <motion.div
          variants={itemVariants}
          className="d-flex flex-wrap justify-content-center gap-3 mb-5"
          style={{ minHeight: '120px' }}
        >
          {filters.map((filter) => (
            <WaterDropletToggle
              key={filter.key}
              isActive={activeFilter === filter.key}
              onClick={() => setActiveFilter(filter.key)}
              label={filter.label}
              filterId={filter.key}
            />
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="row g-4">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="col-lg-4 col-md-6"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg overflow-hidden h-100"
                >
                  <div className="position-relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-img-top"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    {project.featured && (
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className="badge bg-primary">Featured</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="card-body p-4 d-flex flex-column" style={{ minHeight: '280px' }}>
                    <h3 className="h5 fw-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-white/80 mb-3 flex-grow-1">{project.description}</p>
                    
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="badge bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="d-flex gap-2">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 btn-sm flex-fill d-flex align-items-center justify-content-center gap-2"
                      >
                        <FiCode size={16} />
                        View Code
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm flex-fill d-flex align-items-center justify-content-center gap-2"
                      >
                        <FiEye size={16} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-5"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-800 dark:to-dark-700 rounded-lg p-5"
          >
            <h3 className="h4 fw-bold mb-3">Have a Project in Mind?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm always excited to work on new and challenging projects. Let's discuss your ideas!
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn-primary-custom"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Collaborate
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
