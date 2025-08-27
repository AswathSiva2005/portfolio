import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import emailjs from 'emailjs-com';
const heroVideo = '/hero-bg.mp4';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    
    // EmailJS configuration
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'aswathsiva0420@gmail.com'
    };
    
    // Send email using EmailJS
    // Note: Replace these with your actual EmailJS credentials
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
    
    // Check if credentials are configured
    if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      console.log('EmailJS not configured - using demo mode');
      
      // Demo mode - simulate successful email sending
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }, 2000);
      return;
    }
    
    emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    )
    .then((response) => {
      console.log('Email sent successfully:', response.status, response.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'aswathsiva0420@gmail.com',
      link: 'mailto:aswathsiva0420@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 8072607334',
      link: 'tel:+918072607334'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Tiruppur, TamilNadu',
      link: '#'
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
    <section id="contact" className="py-5 relative overflow-hidden">
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
          className="absolute inset-0 w-full h-full object-cover bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900" 
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
              Get In Touch
            </span>
            <h2 className="display-5 fw-bold mb-4 text-white">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h2>
            {/* <p className="lead text-white/80 mb-0" style={{ maxWidth: '600px' }}>
              Have a project in mind or just want to chat? I'd love to hear from you. 
              Let's discuss how we can work together to bring your ideas to life.
            </p> */}
          </motion.div>
        </motion.div>

        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-4">
            <motion.div variants={itemVariants} className="mb-5">
              <h3 className="h4 fw-bold mb-4 text-white">Contact Information</h3>
              <p className="text-white/80 mb-4">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="d-flex align-items-center gap-4 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg mb-3"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
                  }}
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="d-inline-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: '50%',
                      boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
                    }}
                  >
                    <info.icon size={24} className="text-white" />
                  </motion.div>
                  <div>
                    <h3 className="h5 fw-bold mb-2 text-white">{info.title}</h3>
                    <p className="text-white/80 mb-2">{info.description}</p>
                    <a
                      href={info.link}
                      className="text-white/80 text-decoration-none hover:text-primary-600"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mt-5">
              <h4 className="h5 fw-bold mb-3 text-white">Follow Me</h4>
              <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-md-start">
                {[
                  { name: 'GitHub', icon: FiGithub, link: 'https://github.com/AswathSiva2005', gradient: '#667eea, #764ba2' },
                  { name: 'LinkedIn', icon: FiLinkedin, link: 'https://www.linkedin.com/in/aswath-siva-312b44320/', gradient: '#0077b5, #00a0dc' },
                  { name: 'Instagram', icon: FiInstagram, link: 'https://www.instagram.com/_.a.xwth._/', gradient: '#f093fb, #f5576c' },
                  { name: 'Mail', icon: FiMail, link: 'mailto:aswathsiva0420@gmail.com', gradient: '#4facfe, #00f2fe' }
                ].map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center text-white rounded-full transition-all duration-300"
                    style={{ 
                      width: '50px', 
                      height: '50px',
                      background: `linear-gradient(135deg, ${platform.gradient})`,
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}
                  >
                    <platform.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8 col-md-12">
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-lg shadow-lg h-100"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
              }}
            >
              <h3 className="h4 fw-bold mb-4 text-white">Send Me a Message</h3>
              
              {submitStatus === 'sending' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="alert alert-info d-flex align-items-center gap-2 mb-4"
                  style={{
                    backgroundColor: 'rgba(13, 202, 240, 0.1)',
                    border: '1px solid rgba(13, 202, 240, 0.3)',
                    color: '#0dcaf0'
                  }}
                >
                  <div className="spinner-border spinner-border-sm me-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  Sending your message...
                </motion.div>
              )}

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="alert alert-success d-flex align-items-center gap-2 mb-4"
                  style={{
                    backgroundColor: 'rgba(25, 135, 84, 0.1)',
                    border: '1px solid rgba(25, 135, 84, 0.3)',
                    color: '#198754'
                  }}
                >
                  <FiSend />
                  ✅ Thank you! Your message has been sent successfully to aswathsiva0420@gmail.com
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="alert alert-danger d-flex align-items-center gap-2 mb-4"
                  style={{
                    backgroundColor: 'rgba(220, 53, 69, 0.1)',
                    border: '1px solid rgba(220, 53, 69, 0.3)',
                    color: '#dc3545'
                  }}
                >
                  <FiMessageSquare />
                  Failed to send message. Please try again or contact directly at aswathsiva0420@gmail.com
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3 position-relative">
                      <label htmlFor="name" className="form-label d-flex align-items-center gap-2 text-white/80 mb-2">
                        <FiUser size={16} />
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          color: 'white',
                          paddingTop: '12px',
                          paddingBottom: '12px'
                        }}
                        onFocus={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.15)'}
                        onBlur={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3 position-relative">
                      <label htmlFor="email" className="form-label d-flex align-items-center gap-2 text-white/80 mb-2">
                        <FiMail size={16} />
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          color: 'white',
                          paddingTop: '12px',
                          paddingBottom: '12px'
                        }}
                        onFocus={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.15)'}
                        onBlur={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3 position-relative">
                      <label htmlFor="subject" className="form-label d-flex align-items-center gap-2 text-white/80 mb-2">
                        <FiMessageSquare size={16} />
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          color: 'white',
                          paddingTop: '12px',
                          paddingBottom: '12px'
                        }}
                        onFocus={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.15)'}
                        onBlur={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-4 position-relative">
                      <label htmlFor="message" className="form-label text-white/80 mb-2">Your Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        style={{ 
                          height: '150px',
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          color: 'white',
                          paddingTop: '12px',
                          paddingBottom: '12px'
                        }}
                        onFocus={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.15)'}
                        onBlur={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-100 d-flex align-items-center justify-content-center gap-2 btn border-0 text-white fw-bold py-3 rounded-lg"
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="spinner-border spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Additional CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-5"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg p-5 text-white"
          >
            <h3 className="h4 fw-bold mb-3">Ready to Start Your Project?</h3>
            <p className="mb-4">
              Let's schedule a call to discuss your project requirements and how I can help bring your vision to life.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:your.email@example.com"
                className="btn btn-light"
              >
                Schedule a Call
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
                download
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
