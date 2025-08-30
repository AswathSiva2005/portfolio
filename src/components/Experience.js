import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBook, FiAward, FiCalendar, FiMapPin, FiEye } from 'react-icons/fi';
import { SiMongodb, SiOracle, SiGithub, SiAngular } from 'react-icons/si';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Veveaham Matric Higher Secondary School, Dharapuram",
      period: "2020 – 2021",
      grade: "Percentage: 75%",
      position: "right",
      gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.1) 100%)"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Veveaham Matric Higher Secondary School, Dharapuram",
      period: "2022 – 2022",
      grade: "Percentage: 78%",
      position: "left",
      gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)"
    },
    {
      degree: "B.Tech Information Technology",
      institution: "Kongu Engineering College, Perundurai",
      period: "2023 – 2027",
      grade: "CGPA: 7.11 (Upto 5th Semester)",
      position: "right",
      gradient: "linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(34, 211, 238, 0.1) 100%)"
    }
  ];

  const certifications = [
    {
      title: "MongoDB Associate Developer Certification",
      issuer: "MongoDB University",
      description: "Completed comprehensive training in MongoDB database development and administration",
      icon: SiMongodb,
      iconColor: "#47A248",
      pdfPath: "/23ITR010 MongoDB.pdf"
    },
    {
      title: "Oracle APEX Cloud Developer Certified Professional",
      issuer: "Oracle",
      description: "Professional certification in Oracle APEX cloud-based development",
      icon: SiOracle,
      iconColor: "#F80000",
      pdfPath: "/23ITR010 Oracle.pdf"
    },
    {
      title: "GitHub Foundations",
      issuer: "GitHub",
      description: "Certification in GitHub essentials, repositories, version control, and collaboration",
      icon: SiGithub,
      iconColor: "#181717",
      pdfPath: "/23ITR010 Github.pdf"
    },
    {
      title: "Angular Foundations Course",
      issuer: "Infosys Springboard",
      description: "Training on Angular fundamentals, components, and services",
      icon: SiAngular,
      iconColor: "#DD0031",
      pdfPath: "/23ITR010 Angular.pdf"
    }
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

  return (
    <section id="experience" className="py-5" style={{
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
              Experience & Certifications
            </span> */}
            <h2 className="display-5 fw-bold mb-4 text-white">
              My{' '}
              <span 
                style={{
                  background: 'linear-gradient(45deg, #60A5FA, #22D3EE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Journey
              </span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Education Timeline Section */}
        <div className="row mb-5">
          <div className="col-12">
            <motion.div variants={itemVariants}>
              <h3 className="h4 text-white mb-5 text-center d-flex align-items-center justify-content-center gap-2">
                <FiBook className="text-primary" />
                Education Journey
              </h3>
              
              <div className="education-timeline position-relative">
                {/* Center Timeline Line */}
                <div 
                  className="timeline-center-line"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '0',
                    bottom: '0',
                    width: '4px',
                    background: 'linear-gradient(to bottom, #E50914, #ff6b6b)',
                    transform: 'translateX(-50%)',
                    borderRadius: '2px',
                    zIndex: 1
                  }}
                />
                
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`timeline-item mb-5 d-flex align-items-center ${
                      edu.position === 'left' ? 'flex-row-reverse' : ''
                    }`}
                    style={{
                      position: 'relative',
                      minHeight: '200px'
                    }}
                  >
                    {/* Timeline Marker */}
                    <div
                      className="timeline-marker"
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: '20px',
                        height: '20px',
                        background: '#E50914',
                        borderRadius: '50%',
                        border: '4px solid #0f172a',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 2,
                        boxShadow: '0 0 20px rgba(229, 9, 20, 0.5)'
                      }}
                    />
                    
                    {/* Card */}
                    <div 
                      className={`col-5 ${
                        edu.position === 'left' ? 'text-end' : ''
                      }`}
                    >
                      <div
                        className="glass-card education-card"
                        style={{
                          position: 'relative',
                          boxShadow: '15px 15px 35px rgba(0,0,0,0.4)',
                          borderRadius: '15px',
                          backdropFilter: 'blur(10px)',
                          background: edu.gradient,
                          padding: '2rem',
                          transformStyle: 'preserve-3d',
                          borderTop: '1px solid rgba(255,255,255,0.3)',
                          borderLeft: '1px solid rgba(255,255,255,0.3)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          border: '3px solid transparent',
                          backgroundClip: 'padding-box'
                        }}
                      >
                        <div className="card-content">
                          <h4 className="h5 text-white fw-bold mb-3">{edu.degree}</h4>
                          <p className="text-white/90 mb-2 d-flex align-items-center gap-2 justify-content-start">
                            <FiMapPin size={16} />
                            {edu.institution}
                          </p>
                          <p className="text-white/80 mb-3 d-flex align-items-center gap-2 justify-content-start">
                            <FiCalendar size={16} />
                            {edu.period}
                          </p>
                          <div className="badge bg-white/20 text-white px-3 py-2 rounded-pill">
                            {edu.grade}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Empty space for opposite side */}
                    <div className="col-5"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="row">
          <div className="col-12">
            <motion.div variants={itemVariants}>
              <h3 className="h4 text-white mb-5 text-center d-flex align-items-center justify-content-center gap-2">
                <FiAward className="text-primary" />
                Professional Certifications
              </h3>
              <div className="row g-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="col-lg-6 col-md-6">
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -8,
                        boxShadow: '0 30px 60px rgba(0,0,0,0.15), 0 15px 30px rgba(0,0,0,0.1)'
                      }}
                      className="certification-card h-100"
                      onClick={() => {
                        console.log('Opening certificate:', cert.pdfPath);
                        window.open(cert.pdfPath, '_blank');
                      }}
                    >
                      <div
                        className="certification-card-white h-100"
                        style={{
                          position: 'relative',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.05)',
                          borderRadius: '15px',
                          background: '#ffffff',
                          padding: '2rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          border: '2px solid #000000'
                        }}
                      >
                        <div className="d-flex align-items-start gap-3 flex-grow-1">
                          <motion.div
                            className={`certification-icon cert-icon-${index}`}
                            whileHover={{ 
                              scale: 1.1
                            }}
                            transition={{ 
                              duration: 0.3,
                              type: "spring",
                              stiffness: 300
                            }}
                            style={{
                              width: '60px',
                              height: '60px',
                              background: '#f8f9fa',
                              borderRadius: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              cursor: 'pointer',
                              position: 'relative',
                              border: '3px solid transparent',
                              backgroundClip: 'padding-box'
                            }}
                          >
                            <cert.icon 
                              size={28} 
                              style={{ color: cert.iconColor }}
                            />
                          </motion.div>
                          <div className="flex-grow-1">
                            <h5 className="h6 fw-bold mb-2" style={{ color: '#000000' }}>{cert.title}</h5>
                            <p className="mb-3 fw-semibold" style={{ color: '#666666' }}>{cert.issuer}</p>
                            <p className="mb-0" style={{ color: '#333333' }}>{cert.description}</p>
                            <div className="mt-3">
                              <small className="text-muted d-flex align-items-center gap-1">
                                <FiEye size={12} />
                                Click to view certificate
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Netflix Red Border Animation for Education Cards */}
        <style>{`
          .education-card {
            --netflix-red: #E50914;
            --netflix-red-light: rgba(229, 9, 20, 0.1);
            border: 3px solid;
            border-image: conic-gradient(from 0deg, var(--netflix-red-light), var(--netflix-red) 0.1turn, var(--netflix-red) 0.15turn, var(--netflix-red-light) 0.25turn) 1;
            animation: borderRotate 3s linear infinite forwards;
          }
          
          .education-card:hover {
            animation-play-state: paused;
            transform: scale(1.02) translateY(-5px);
            box-shadow: 
              20px 20px 50px rgba(0,0,0,0.5),
              0 0 50px var(--netflix-red),
              0 0 80px var(--netflix-red),
              inset 0 0 30px rgba(255,255,255,0.2);
          }
          
          /* Certification Icon Animations */
          .cert-icon-0 {
            --c1: #47A248;
            --c2: rgba(71, 162, 72, 0.1);
            border: 3px solid;
            border-image: conic-gradient(from var(--angle, 0deg), var(--c2), var(--c1) 0.1turn, var(--c1) 0.15turn, var(--c2) 0.25turn) 1;
            animation: certIconRotate 2.5s linear infinite forwards;
          }
          
          .cert-icon-1 {
            --c1: #F80000;
            --c2: rgba(248, 0, 0, 0.1);
            border: 3px solid;
            border-image: conic-gradient(from var(--angle, 0deg), var(--c2), var(--c1) 0.1turn, var(--c1) 0.15turn, var(--c2) 0.25turn) 1;
            animation: certIconRotate 2.5s linear infinite forwards;
          }
          
          .cert-icon-2 {
            --c1: #181717;
            --c2: rgba(24, 23, 23, 0.1);
            border: 3px solid;
            border-image: conic-gradient(from var(--angle, 0deg), var(--c2), var(--c1) 0.1turn, var(--c1) 0.15turn, var(--c2) 0.25turn) 1;
            animation: certIconRotate 2.5s linear infinite forwards;
          }
          
          .cert-icon-3 {
            --c1: #DD0031;
            --c2: rgba(221, 0, 49, 0.1);
            border: 3px solid;
            border-image: conic-gradient(from var(--angle, 0deg), var(--c2), var(--c1) 0.1turn, var(--c1) 0.15turn, var(--c2) 0.25turn) 1;
            animation: certIconRotate 2.5s linear infinite forwards;
          }
          
          .certification-icon:hover {
            animation-play-state: paused;
            box-shadow: 0 0 20px var(--c1);
            border-color: var(--c1) !important;
          }
          
          @keyframes borderRotate {
            0% {
              border-image: conic-gradient(from 0deg, var(--netflix-red-light), var(--netflix-red) 0.1turn, var(--netflix-red) 0.15turn, var(--netflix-red-light) 0.25turn) 1;
            }
            25% {
              border-image: conic-gradient(from 90deg, var(--netflix-red-light), var(--netflix-red) 0.1turn, var(--netflix-red) 0.15turn, var(--netflix-red-light) 0.25turn) 1;
            }
            50% {
              border-image: conic-gradient(from 180deg, var(--netflix-red-light), var(--netflix-red) 0.1turn, var(--netflix-red) 0.15turn, var(--netflix-red-light) 0.25turn) 1;
            }
            75% {
              border-image: conic-gradient(from 270deg, var(--netflix-red-light), var(--netflix-red) 0.1turn, var(--netflix-red) 0.15turn, var(--netflix-red-light) 0.25turn) 1;
            }
            100% {
              border-image: conic-gradient(from 360deg, var(--netflix-red-light), var(--netflix-red) 0.1turn, var(--netflix-red) 0.15turn, var(--netflix-red-light) 0.25turn) 1;
            }
          }
          
          @keyframes certIconRotate {
            0% {
              --angle: 0deg;
            }
            100% {
              --angle: 360deg;
            }
          }
          
          .education-timeline {
            padding: 2rem 0;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Experience;
