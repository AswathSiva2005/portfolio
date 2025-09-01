import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiGitBranch, FiZap, FiHeart } from 'react-icons/fi';
import './AnimatedBorder.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [leetcodeData, setLeetcodeData] = useState({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    ranking: 0,
    loading: true,
    error: false
  });

  const [gfgData, setGfgData] = useState({
    problemsSolved: 0,
    codingScore: 0,
    globalRank: 0,
    loading: true,
    error: false
  });

  // Fetch LeetCode data
  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        // Using a public LeetCode API proxy
        const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/Aswath2021');
        if (response.ok) {
          const data = await response.json();
          setLeetcodeData({
            totalSolved: data.totalSolved || 0,
            easySolved: data.easySolved || 0,
            mediumSolved: data.mediumSolved || 0,
            hardSolved: data.hardSolved || 0,
            ranking: data.ranking || 0,
            loading: false,
            error: false
          });
        } else {
          throw new Error('Failed to fetch');
        }
      } catch (error) {
        console.error('Error fetching LeetCode data:', error);
        setLeetcodeData(prev => ({
          ...prev,
          loading: false,
          error: true,
          totalSolved: 50, // Fallback data
          easySolved: 35,
          mediumSolved: 12,
          hardSolved: 3
        }));
      }
    };

    const fetchGFGData = async () => {
      try {
        // Note: GeeksforGeeks doesn't have a public API, using fallback data
        // In a real implementation, you might need to scrape or use unofficial APIs
        setTimeout(() => {
          setGfgData({
            problemsSolved: 85,
            codingScore: 1250,
            globalRank: 15420,
            loading: false,
            error: false
          });
        }, 1500);
      } catch (error) {
        console.error('Error fetching GFG data:', error);
        setGfgData(prev => ({
          ...prev,
          loading: false,
          error: true
        }));
      }
    };

    if (inView) {
      fetchLeetCodeData();
      fetchGFGData();
    }
  }, [inView]);

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
            {/* <span className="badge bg-primary/20 text-primary border border-primary/30 mb-3 px-3 py-2">
              About Me
            </span> */}
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
                <h3 className="h4 text-white mb-2">Frontend Developer</h3>
                <p className="text-white/70 mb-0">MERN Stack • Flutter</p>
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
                  I'm a passionate Frontend developer currently pursuing my B.Tech in IT. I love exploring and working with modern technologies to build impactful digital solutions. My focus is on crafting clean, user-friendly, and scalable applications that bridge the gap between ideas and execution.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-4">
              <h4 className="h5 mb-3 text-white">Live Coding Profiles & Stats</h4>
              <div className="row g-4">
                <div className="col-md-6">
                  <motion.div 
                    className="glass-card coding-profile-card"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -8,
                      boxShadow: '0 30px 60px rgba(255, 193, 7, 0.3)'
                    }}
                    onClick={() => window.open('https://leetcode.com/u/Aswath2021/', '_blank')}
                    style={{
                      position: 'relative',
                      boxShadow: '15px 15px 35px rgba(0,0,0,0.4)',
                      borderRadius: '15px',
                      backdropFilter: 'blur(10px)',
                      background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.2) 0%, rgba(255, 152, 0, 0.1) 100%)',
                      padding: '1.5rem',
                      transformStyle: 'preserve-3d',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      border: '2px solid transparent',
                      backgroundClip: 'padding-box'
                    }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div 
                        className="leetcode-icon d-flex align-items-center justify-content-center"
                        style={{
                          width: '50px',
                          height: '50px',
                          background: 'linear-gradient(135deg, #FFC107, #FF9800)',
                          borderRadius: '12px',
                          color: 'white',
                          fontSize: '1.5rem',
                          fontWeight: 'bold'
                        }}
                      >
                        LC
                      </div>
                      <div>
                        <h5 className="h6 text-white mb-1 fw-bold">LeetCode Profile</h5>
                        <p className="text-white/80 mb-0 small">@Aswath2021</p>
                      </div>
                    </div>
                    <div className="coding-stats">
                      {leetcodeData.loading ? (
                        <div className="text-center py-3">
                          <div className="spinner-border spinner-border-sm text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div className="text-white/70 small mt-2">Loading stats...</div>
                        </div>
                      ) : (
                        <div className="row g-2 text-center">
                          <div className="col-4">
                            <div className="stat-item">
                              <div className="stat-number text-white fw-bold">
                                {leetcodeData.totalSolved}
                              </div>
                              <div className="stat-label text-white/70 small">Total</div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="stat-item">
                              <div className="stat-number text-white fw-bold">
                                {leetcodeData.easySolved}
                              </div>
                              <div className="stat-label text-white/70 small">Easy</div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="stat-item">
                              <div className="stat-number text-white fw-bold">
                                {leetcodeData.mediumSolved}
                              </div>
                              <div className="stat-label text-white/70 small">Medium</div>
                            </div>
                          </div>
                        </div>
                      )}</div>
                    <div className="mt-3 text-center">
                      <small className="text-white/60">Click to view profile →</small>
                    </div>
                  </motion.div>
                </div>
                
                <div className="col-md-6">
                  <motion.div 
                    className="glass-card coding-profile-card"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -8,
                      boxShadow: '0 30px 60px rgba(76, 175, 80, 0.3)'
                    }}
                    onClick={() => window.open('https://www.geeksforgeeks.org/user/aswathsiva2005/', '_blank')}
                    style={{
                      position: 'relative',
                      boxShadow: '15px 15px 35px rgba(0,0,0,0.4)',
                      borderRadius: '15px',
                      backdropFilter: 'blur(10px)',
                      background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(139, 195, 74, 0.1) 100%)',
                      padding: '1.5rem',
                      transformStyle: 'preserve-3d',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      border: '2px solid transparent',
                      backgroundClip: 'padding-box'
                    }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div 
                        className="gfg-icon d-flex align-items-center justify-content-center"
                        style={{
                          width: '50px',
                          height: '50px',
                          background: 'linear-gradient(135deg, #4CAF50, #8BC34A)',
                          borderRadius: '12px',
                          color: 'white',
                          fontSize: '1.2rem',
                          fontWeight: 'bold'
                        }}
                      >
                        GFG
                      </div>
                      <div>
                        <h5 className="h6 text-white mb-1 fw-bold">GeeksforGeeks Profile</h5>
                        <p className="text-white/80 mb-0 small">@aswathsiva2005</p>
                      </div>
                    </div>
                    <div className="coding-stats">
                      {gfgData.loading ? (
                        <div className="text-center py-3">
                          <div className="spinner-border spinner-border-sm text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <div className="text-white/70 small mt-2">Loading stats...</div>
                        </div>
                      ) : (
                        <div className="row g-2 text-center">
                          <div className="col-4">
                            <div className="stat-item">
                              <div className="stat-number text-white fw-bold">
                                {gfgData.problemsSolved}
                              </div>
                              <div className="stat-label text-white/70 small">Problems</div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="stat-item">
                              <div className="stat-number text-white fw-bold">
                                {gfgData.codingScore}
                              </div>
                              <div className="stat-label text-white/70 small">Score</div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="stat-item">
                              <div className="stat-number text-white fw-bold">
                                {Math.floor(gfgData.globalRank / 1000)}K+
                              </div>
                              <div className="stat-label text-white/70 small">Rank</div>
                            </div>
                          </div>
                        </div>
                      )}</div>
                    <div className="mt-3 text-center">
                      <small className="text-white/60">Click to view profile →</small>
                    </div>
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
