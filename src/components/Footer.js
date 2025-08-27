import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiMail, FiArrowUp, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/AswathSiva2005', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/aswath-siva-312b44320/', label: 'LinkedIn' },
    { icon: FiInstagram, href: 'https://www.instagram.com/_.a.xwth._/', label: 'Instagram' },
    { icon: FiMail, href: 'mailto:aswathsiva0420@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-dark-900 text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h5 className="gradient-text fw-bold mb-3">Portfolio</h5>
              <p className="text-gray-300 mb-4">
                Passionate developer creating exceptional digital experiences 
                with modern technologies and innovative solutions.
              </p>
              <div className="d-flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center w-10 h-10 bg-dark-700 text-gray-300 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300"
                    style={{ width: '40px', height: '40px' }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="col-lg-2 col-md-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h6 className="fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                  <li key={item} className="mb-2">
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 text-decoration-none hover:text-primary-400 transition-colors duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(`#${item.toLowerCase()}`).scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="col-lg-3 col-md-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h6 className="fw-bold mb-3">Services</h6>
              <ul className="list-unstyled">
                {[
                  'Web Development',
                  'Frontend Development',
                  'Backend Development',
                  'UI/UX Design',
                  'Consulting'
                ].map((service, index) => (
                  <li key={service} className="mb-2">
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="col-lg-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h6 className="fw-bold mb-3">Get In Touch</h6>
              <p className="text-gray-300 mb-3">
                Ready to start your next project? Let's discuss how we can work together.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn-primary-custom btn-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start a Project
              </motion.a>
            </motion.div>
          </div>
        </div>

        <hr className="my-4 border-dark-700" />

        <div className="row align-items-center">
          <div className="col-md-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 mb-0"
            >
              © {currentYear} Portfolio. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                <FiHeart className="d-inline" />
              </motion.span>{' '}
              by Aswath Siva
            </motion.p>
          </div>
          {/* <div className="col-md-6 text-md-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="btn btn-outline-light btn-sm d-inline-flex align-items-center gap-2"
            >
              <FiArrowUp />
              Back to Top
            </motion.button>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
