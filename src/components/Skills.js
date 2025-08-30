import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, 
  SiJavascript, 
  SiVite, 
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs, 
  SiMongodb, 
  SiMysql,
  SiFirebase,
  SiGit, 
  SiVisualstudiocode,
  SiGithub,
  SiFigma,
  SiPostman,
  SiRender,
  SiVercel,
  SiTableau
} from 'react-icons/si';
import { FaCoffee } from 'react-icons/fa';

const heroVideo = '/hero-bg.mp4';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Statistics data
  const statsData = [
    { number: 50, suffix: '+', label: 'Projects Completed', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', icon: '🚀' },
    { number: 30, suffix: '+', label: 'Happy Clients', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', icon: '😊' },
    { number: 5, suffix: '+', label: 'Awards Won', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', icon: '🏆' },
    { number: 1000, suffix: '+', label: 'Cups of Coffee', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', icon: '☕' }
  ];

  // Counter animation hook
  const useCounter = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      if (inView && !hasAnimated) {
        setHasAnimated(true);
        let startTime;
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easeOutQuart * (end - start) + start));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [inView, end, duration, start, hasAnimated]);

    return count;
  };

  // Call hooks at component level
  const count1 = useCounter(statsData[0].number, 2000);
  const count2 = useCounter(statsData[1].number, 2200);
  const count3 = useCounter(statsData[2].number, 2400);
  const count4 = useCounter(statsData[3].number, 2600);
  
  const counts = [count1, count2, count3, count4];

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
        { name: 'Vite', icon: SiVite, color: '#646CFF' },
        { name: 'Angular', icon: SiAngular, color: '#DD0031' },
        { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Java', icon: FaCoffee, color: '#ED8B00' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' }
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Render', icon: () => (
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 7.5L12 12l5.5 4.5v-9zM6.5 7.5v9L12 12 6.5 7.5z"/>
          </svg>
        ), color: '#46E3B7' },
        { name: 'Vercel', icon: SiVercel, color: '#000000' },
        { name: 'Tableau', icon: SiTableau, color: '#E97627' }
      ]
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
    <section id="skills" className="py-5 relative overflow-hidden">
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
          className="absolute inset-0 w-full h-full object-cover bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" 
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
            {/* <span className="badge bg-white/20 backdrop-blur-md text-white border border-white/30 mb-3">
              Skills & Expertise
            </span> */}
            <h2 className="display-5 fw-bold mb-4 text-white">
              Technologies I Work With
            </h2>
            {/* <p className="lead text-white/80 mb-0" style={{ maxWidth: '600px' }}>
              I'm constantly learning and adapting to new technologies to deliver 
              cutting-edge solutions that meet modern web standards.
            </p> */}
          </motion.div>
        </motion.div>

        <div className="row g-4">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="col-lg-4">
              <motion.div
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-4 p-5 h-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 
                  className="h4 fw-bold text-center mb-4"
                  style={{
                    background: category.title === 'Frontend' ? 'linear-gradient(45deg, #60A5FA, #22D3EE)' :
                               category.title === 'Backend' ? 'linear-gradient(45deg, #4ADE80, #10B981)' :
                               'linear-gradient(45deg, #FB923C, #EF4444)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {category.title}
                </h3>
                
                <div className="row g-3 justify-content-center">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="col-4 d-flex justify-content-center">
                      <motion.div
                        variants={itemVariants}
                        whileHover={{ 
                          scale: 1.3,
                          y: -8,
                          transition: { 
                            duration: 0.2,
                            ease: "easeOut"
                          }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="skill-icon-container position-relative d-flex align-items-center justify-content-center"
                        style={{
                          cursor: 'pointer',
                          width: '60px',
                          height: '60px'
                        }}
                        onMouseEnter={(e) => {
                          const icon = e.currentTarget.querySelector('.skill-icon');
                          const tooltip = e.currentTarget.querySelector('.skill-tooltip');
                          
                          if (icon) {
                            icon.style.color = skill.color;
                            icon.style.filter = `drop-shadow(0 0 15px ${skill.color})`;
                          }
                          
                          if (tooltip) {
                            tooltip.style.opacity = '1';
                            tooltip.style.transform = 'translateX(-50%) translateY(-5px)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          const icon = e.currentTarget.querySelector('.skill-icon');
                          const tooltip = e.currentTarget.querySelector('.skill-tooltip');
                          
                          if (icon) {
                            icon.style.color = '';
                            icon.style.filter = '';
                          }
                          
                          if (tooltip) {
                            tooltip.style.opacity = '0';
                            tooltip.style.transform = 'translateX(-50%) translateY(0)';
                          }
                        }}
                      >
                        <skill.icon 
                          size={40} 
                          className="skill-icon text-white/80 transition-all duration-300" 
                        />
                        
                        {/* Tooltip */}
                        <div 
                          className="skill-tooltip position-absolute bg-black/90 backdrop-blur-sm text-white px-2 py-1 rounded small fw-medium transition-all duration-200"
                          style={{
                            bottom: '70px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            opacity: 0,
                            pointerEvents: 'none',
                            whiteSpace: 'nowrap',
                            zIndex: 10,
                            fontSize: '0.75rem'
                          }}
                        >
                          {skill.name}
                          <div 
                            className="position-absolute"
                            style={{
                              top: '100%',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: 0,
                              height: 0,
                              borderLeft: '4px solid transparent',
                              borderRight: '4px solid transparent',
                              borderTop: '4px solid rgba(0,0,0,0.9)'
                            }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>



        {/* Additional Skills Cloud */}

      </div>
    </section>
  );
};

export default Skills;
