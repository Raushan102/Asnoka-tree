import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaTree, FaUniversity } from 'react-icons/fa';
import { projectData } from '../data';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black py-12 overflow-hidden">

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">

        {/* Main Footer Content */}
        <div className="max-w-4xl mx-auto text-center">

          {/* University Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaUniversity className="text-green-400 text-3xl" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {projectData.university}
              </h3>
            </div>
            <p className="text-gray-400 text-base md:text-lg">
              {projectData.department}
            </p>
            <p className="text-green-400 font-semibold mt-2">
              {projectData.degree}
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent mb-8"></div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-dark rounded-2xl p-6 mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <FaTree className="text-green-400 text-2xl" />
              <h4 className="text-xl md:text-2xl font-bold text-white">
                Green Initiative 2026
              </h4>
            </div>
            <p className="text-gray-300 text-sm md:text-base">
              Group 01 | Planted: {projectData.plantedDate}
            </p>
            <p className="text-green-300 font-semibold mt-2">
              {projectData.treeNames.english} ({projectData.treeNames.scientific})
            </p>
          </motion.div>

          {/* Team Count */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-gray-400 text-sm md:text-base">
              A collaborative effort by <span className="text-green-400 font-bold">{projectData.students.length} dedicated students</span>
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent mb-6"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm md:text-base flex items-center justify-center gap-2 flex-wrap">
              Made with
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaHeart className="text-red-500" />
              </motion.span>
              for a Greener Future
            </p>
            <p className="text-gray-500 text-xs mt-3">
              © 2026 Group 01 - Department of Mining | All Rights Reserved
            </p>
          </motion.div>

          {/* Decorative Tree Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaTree className="text-green-400/50 text-5xl" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-green-500/10 blur-3xl rounded-full"></div>
    </footer>
  );
};

export default Footer;
