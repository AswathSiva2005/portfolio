import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown, FiInstagram } from 'react-icons/fi';
// Assets moved to public folder for deployment
const profileImage = '/profile.jpg';
const heroVideo = '/hero-bg.mp4';

const Hero = () => {
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

  const socialLinks = [
    { 
      icon: FiGithub, 
      href: 'https://github.com/AswathSiva2005', 
      label: 'GitHub',
      hoverColor: '#000000',
      textColor: '#FFFFFF'
    },
    { 
      icon: FiLinkedin, 
      href: 'https://www.linkedin.com/in/aswath-siva-312b44320/', 
      label: 'LinkedIn',
      hoverColor: '#0077B5',
      textColor: '#FFFFFF'
    },
    { 
      icon: FiInstagram, 
      href: 'https://www.instagram.com/_.a.xwth._/', 
      label: 'Instagram',
      hoverColor: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d, #f56040, #f77737, #fcaf45, #ffdc80)',
      textColor: '#FFFFFF'
    },
    { 
      icon: FiMail, 
      href: 'mailto:aswathsiva0420@gmail.com', 
      label: 'Email',
      hoverColor: '#4285F4',
      textColor: '#FFFFFF'
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero-poster.jpg"
          onLoadedData={(e) => e.target.play()}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'block';
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div 
          className="absolute inset-0 w-full h-full object-cover bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" 
          style={{display: 'none'}}
        ></div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 col-md-12 order-lg-1 order-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center text-lg-start"
            >
              <motion.div variants={itemVariants} className="mb-4">
                {/* <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full text-sm font-medium">
                  👋 Welcome to my portfolio
                </span> */}
              </motion.div>

              <motion.h1 variants={itemVariants} className="display-3 fw-bold mb-4 text-white">
                {/* 👨‍🎓Hi, I'm{' '} */}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Aswath Siva</span>
              </motion.h1>

              <motion.div variants={itemVariants} className="mb-4">
                <h2 className="h3 text-white/80">
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer',
                      2000,
                      'React Specialist',
                      2000,
                      'UI/UX Designer',
                      2000,
                      'Problem Solver',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </h2>
              </motion.div>

              <motion.p variants={itemVariants} className="lead text-white/90 mb-5">
                I create exceptional digital experiences that combine beautiful design 
                with powerful functionality. Let's build something amazing together.
              </motion.p>

              <motion.div variants={itemVariants} className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-5">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="btn-primary-custom d-inline-flex align-items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get In Touch
                  <FiMail />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-custom d-inline-flex align-items-center gap-2"
                  download
                >
                  Download CV
                  <FiDownload />
                </motion.a>
              </motion.div>

              <motion.div variants={itemVariants} className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap mb-4 mb-md-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center w-12 h-12 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full transition-all duration-300 social-icon"
                    style={{ 
                      width: '48px', 
                      height: '48px',
                      '--hover-bg': social.hoverColor,
                      '--hover-text': social.textColor
                    }}
                    onMouseEnter={(e) => {
                      if (social.label === 'Instagram') {
                        e.target.style.background = social.hoverColor;
                      } else {
                        e.target.style.backgroundColor = social.hoverColor;
                      }
                      e.target.style.color = social.textColor;
                      e.target.style.borderColor = social.hoverColor;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '';
                      e.target.style.backgroundColor = '';
                      e.target.style.color = '';
                      e.target.style.borderColor = '';
                    }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="col-lg-6 col-md-12 order-lg-2 order-1 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center position-relative"
            >
              {/* Profile Image Container */}
              <div className="position-relative d-inline-block">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="position-absolute inset-0 w-100 h-100 border-4 border-blue-300 dark:border-blue-700 rounded-circle"
                  style={{ top: '-10px', left: '-10px', width: 'calc(100% + 20px)', height: 'calc(100% + 20px)' }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="position-absolute inset-0 w-100 h-100 border-4 border-purple-300 dark:border-purple-700 rounded-circle"
                  style={{ top: '-20px', left: '-20px', width: 'calc(100% + 40px)', height: 'calc(100% + 40px)' }}
                />
                <div 
                  className="position-relative rounded-circle overflow-hidden shadow-2xl"
                  style={{ width: '300px', height: '300px' }}
                >
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                  <div className="position-absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-circle"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="position-absolute top-0 start-0 bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-3 border border-white/30 text-white"
              >
                <div className="d-flex align-items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-circle"></div>
                  <span className="small fw-medium">Available for work</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="position-absolute bottom-0 end-0 bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-3 border border-white/30 text-white"
              >
                <div className="d-flex align-items-center gap-2">
                  <span className="small fw-medium">Currently pursuing B.tech IT</span>
                  <div className="w-3 h-3 bg-blue-500 rounded-circle"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="position-absolute bottom-8 start-50 translate-middle-x text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="d-flex flex-column align-items-center gap-2 text-white/80"
          >
            <span className="small">Scroll to explore</span>
            <FiArrowDown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
