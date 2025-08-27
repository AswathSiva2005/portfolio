import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiGitBranch, FiZap, FiHeart } from 'react-icons/fi';
import './AnimatedBorder.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const areasOfInterest = [
    { 
      icon: FiCode, 
      title: 'Full-Stack Web Development', 
      description: 'MERN Stack',
      gradient: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(34, 211, 238, 0.1) 100%)'
    },
    { 
      icon: FiZap, 
      title: 'Mobile App Development', 
      description: 'Flutter, React Native',
      gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)'
    },
    { 
      icon: FiHeart, 
      title: 'UI/UX Design', 
      description: 'Tailwind, Bootstrap, Figma',
      gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.1) 100%)'
    },
    { 
      icon: FiGitBranch, 
      title: 'Database Management', 
      description: 'MongoDB',
      gradient: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(245, 158, 11, 0.1) 100%)'
    },
  ];

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

  useEffect(() => {
    // Initialize Vanilla Tilt for glass cards
    if (window.VanillaTilt) {
      window.VanillaTilt.init(document.querySelectorAll(".glass-card"), {
        max: 15,
        speed: 400,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        perspective: 1000,
        transition: true,
        "max-glare": 0.2,
        "glare-prerender": false
      });
    }
  }, []);

  return (
    <section id="about" className="py-5" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <div className="container position-relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-5"
        >
          <motion.div variants={itemVariants}>
            <span className="badge bg-primary/20 text-primary border border-primary/30 mb-3 px-3 py-2">
              About Me
            </span>
            <h2 className="display-5 fw-bold mb-4 text-white">
              Hi, I'm{' '}
              <span 
                style={{
                  background: 'linear-gradient(45deg, #60A5FA, #22D3EE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Aswath
              </span>
            </h2>
          </motion.div>
        </motion.div>

        <div className="row align-items-center">
          {/* Profile Card */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <motion.div 
              variants={itemVariants}
              className="glass-card profile-card text-center"
              style={{
                position: 'relative',
                width: '100%',
                minHeight: '400px',
                boxShadow: '20px 20px 50px rgba(0,0,0,0.5)',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderTop: '1px solid rgba(255,255,255,0.5)',
                borderLeft: '1px solid rgba(255,255,255,0.5)',
                backdropFilter: 'blur(15px)',
                transformStyle: 'preserve-3d',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                padding: '2rem',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="mb-4">
                <div 
                  className="avatar-glow mx-auto mb-3"
                  style={{ width: '120px', height: '120px' }}
                >
                  <div 
                    className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-circle d-flex align-items-center justify-content-center h-100 w-100"
                  >
                    <span className="display-4 text-white fw-bold">AS</span>
                  </div>
                </div>
                <h3 className="h4 text-white mb-2">Full-Stack Developer</h3>
                <p className="text-white/70 mb-0">MERN Stack • Flutter • Cloud</p>
              </div>
              
              <div className="row g-3 text-start">
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-circle" style={{width: '8px', height: '8px'}}></div>
                    <small className="text-white/80">Location: Tirupur</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-circle" style={{width: '8px', height: '8px'}}></div>
                    <small className="text-white/80">Experience: Project-based</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-circle" style={{width: '8px', height: '8px'}}></div>
                    <small className="text-white/80">Education: B.Tech IT (2nd Year, KEC)</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-circle" style={{width: '8px', height: '8px'}}></div>
                    <small className="text-white/80">Status: Available for internships</small>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="col-lg-7">
            <motion.div variants={itemVariants} className="mb-4">
              <motion.div 
                className="glass-card bio-card"
                style={{
                  position: 'relative',
                  width: '100%',
                  boxShadow: '20px 20px 50px rgba(0,0,0,0.3)',
                  borderRadius: '15px',
                  borderTop: '1px solid rgba(255,255,255,0.5)',
                  borderLeft: '1px solid rgba(255,255,255,0.5)',
                  backdropFilter: 'blur(10px)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  padding: '1.5rem',
                  transformStyle: 'preserve-3d'
                }}
              >
                <p className="text-white/90 mb-0 lead">
                  I'm a passionate full-stack developer currently pursuing my B.Tech in IT. I love exploring and working with modern technologies to build impactful digital solutions. My focus is on crafting clean, user-friendly, and scalable applications that bridge the gap between ideas and execution.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-4">
              <h4 className="h5 mb-3 text-white">Core Expertise</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <motion.div 
                    className="glass-card skill-card frontend skill-card-animated"
                    style={{
                      position: 'relative',
                      boxShadow: '15px 15px 35px rgba(0,0,0,0.4)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(8px)',
                      background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(34, 211, 238, 0.1) 100%)',
                      padding: '1rem',
                      transformStyle: 'preserve-3d',
                      cursor: 'pointer'
                    }}
                  >
                    <h5 className="h6 text-white mb-2" style={{ fontFamily: 'Acme, sans-serif', fontSize: '1.2rem' }}>Frontend</h5>
                    <p className="text-white/80 small mb-0" style={{ fontFamily: 'Fira Code, monospace' }}>React.js, Next.js, Angular, TypeScript, Tailwind CSS, Bootstrap</p>
                  </motion.div>
                </div>
                <div className="col-md-6">
                  <motion.div 
                    className="glass-card skill-card backend"
                    style={{
                      position: 'relative',
                      boxShadow: '15px 15px 35px rgba(0,0,0,0.4)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(8px)',
                      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)',
                      padding: '1rem',
                      transformStyle: 'preserve-3d',
                      cursor: 'pointer'
                    }}
                  >
                    <h5 className="h6 text-white mb-2" style={{ fontFamily: 'Acme, sans-serif', fontSize: '1.2rem' }}>Backend</h5>
                    <p className="text-white/80 small mb-0" style={{ fontFamily: 'Fira Code, monospace' }}>Node.js, Express.js, MongoDB, MySQL, PHP, XAMPP</p>
                  </motion.div>
                </div>
                <div className="col-md-6">
                  <motion.div 
                    className="glass-card skill-card mobile skill-card-animated"
                    style={{
                      position: 'relative',
                      boxShadow: '15px 15px 35px rgba(0,0,0,0.4)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(8px)',
                      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.1) 100%)',
                      padding: '1rem',
                      transformStyle: 'preserve-3d',
                      cursor: 'pointer'
                    }}
                  >
                    <h5 className="h6 text-white mb-2" style={{ fontFamily: 'Acme, sans-serif', fontSize: '1.2rem' }}>Mobile</h5>
                    <p className="text-white/80 small mb-0" style={{ fontFamily: 'Fira Code, monospace' }}>Flutter, React Native, Android/iOS App Development</p>
                  </motion.div>
                </div>
                <div className="col-md-6">
                  <motion.div 
                    className="glass-card skill-card tools"
                    style={{
                      position: 'relative',
                      boxShadow: '15px 15px 35px rgba(0,0,0,0.4)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(8px)',
                      background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(245, 158, 11, 0.1) 100%)',
                      padding: '1rem',
                      transformStyle: 'preserve-3d',
                      cursor: 'pointer'
                    }}
                  >
                    <h5 className="h6 text-white mb-2" style={{ fontFamily: 'Acme, sans-serif', fontSize: '1.2rem' }}>Tools</h5>
                    <p className="text-white/80 small mb-0" style={{ fontFamily: 'Fira Code, monospace' }}>Git, GitHub, Firebase, AWS, Docker</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn btn-lg px-4 py-3 rounded-pill fw-bold text-decoration-none d-inline-flex align-items-center gap-2"
                style={{
                  background: 'linear-gradient(45deg, #60A5FA, #22D3EE)',
                  color: 'white',
                  border: 'none',
                  boxShadow: '0 8px 32px rgba(96, 165, 250, 0.3)'
                }}
              >
                Let's Connect
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Areas of Interest Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="row mt-5 pt-5"
        >
          <div className="col-12 text-center mb-4">
            <h4 className="h4 text-white mb-3">Areas of Interest</h4>
          </div>
          {areasOfInterest.map((area, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card text-center h-100"
                style={{
                  position: 'relative',
                  boxShadow: '15px 15px 35px rgba(0,0,0,0.4)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)',
                  background: area.gradient,
                  padding: '1.5rem',
                  transformStyle: 'preserve-3d',
                  borderTop: '1px solid rgba(255,255,255,0.3)',
                  borderLeft: '1px solid rgba(255,255,255,0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ 
                    width: '60px', 
                    height: '60px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}
                >
                  <area.icon size={24} className="text-white" />
                </motion.div>
                <h5 className="h6 text-white mb-2 fw-bold" style={{ fontSize: '1.1rem' }}>
                  {area.title}
                </h5>
                <p className="text-white/80 mb-0 small">
                  {area.description}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
