import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiFigma, FiExternalLink } from 'react-icons/fi';
import heroVideo from '../assets/hero-bg.mp4';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Figma designs data
  const figmaDesigns = [
    {
      id: 1,
      title: "Shoe Store Design",
      description: "Modern e-commerce shoe store interface with clean design",
      thumbnail: "/shoe design - figma.png",
      figmaUrl: "https://www.figma.com/design/F1BbNFk9ixgHSJW7MxNJRF/shoe--1st-design-?node-id=0-1&t=AaIl6aZZYTR0Upwy-1",
      category: "E-commerce"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="gallery" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Video */}
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
            if (e.target) {
              e.target.style.display = 'none';
              if (e.target.nextElementSibling) {
                e.target.nextElementSibling.style.display = 'block';
              }
            }
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div 
          className="absolute inset-0 w-full h-full object-cover bg-gradient-to-br from-purple-900 via-pink-900 to-red-900" 
          style={{display: 'none'}}
        ></div>
        <div className="absolute inset-0 bg-black/60 dark:bg-black/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full border border-white/20 mb-6"
          >
            <FiFigma className="text-purple-400" />
            <span className="text-sm font-medium text-white">Design Gallery</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
          >
            Figma Designs
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore my creative design portfolio showcasing UI/UX designs, 
            prototypes, and interactive experiences crafted in Figma.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {figmaDesigns.map((design) => (
            <motion.div
              key={design.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Design Thumbnail */}
                <div className="relative h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-auto scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent hover:scrollbar-thumb-purple-400/70">
                  <img
                    src={design.thumbnail}
                    alt={design.title}
                    className="w-full min-h-full object-cover transition-transform duration-500 group-hover:scale-102 cursor-pointer"
                    onError={(e) => {
                      console.log('Image failed to load:', design.thumbnail);
                      if (e.target) {
                        e.target.style.display = 'none';
                        if (e.target.nextElementSibling) {
                          e.target.nextElementSibling.style.display = 'flex';
                        }
                      }
                    }}
                    onLoad={() => console.log('Image loaded successfully')}
                  />
                  {/* Fallback for missing image */}
                  <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600">
                    <FiFigma className="text-6xl text-white/80" />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {design.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="text-center"
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-4 mx-auto w-fit">
                        <FiExternalLink className="text-2xl text-white" />
                      </div>
                      <p className="text-white font-medium text-lg mb-2">Live Demo in Figma</p>
                      <p className="text-gray-300 text-sm">Click to view interactive prototype</p>
                    </motion.div>
                  </div>
                </div>

                {/* Design Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {design.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {design.description}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open(design.figmaUrl, '_blank')}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <FiFigma className="text-lg group-hover/btn:rotate-12 transition-transform" />
                    View in Figma
                    <FiExternalLink className="text-sm opacity-70" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in collaborating on a design project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-purple-400/50 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
          >
            Let's Create Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
