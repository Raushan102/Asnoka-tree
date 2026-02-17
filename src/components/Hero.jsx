import React from 'react';
import { motion } from 'framer-motion';
import { FaTree, FaUniversity, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { projectData } from '../data';
import BackgroundImages from '../BackgroundImages';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
      style={{
        backgroundImage: `url(${BackgroundImages.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-[#050505]/85 backdrop-blur-[2px]"></div>

      <motion.div
        className="relative z-10 container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto text-center">

          {/* 🔍 Top Badge - Compact & Modern */}
          <motion.div variants={itemVariants} className="flex justify-center mb-10">
            <div className="bg-green-500/10 border border-green-500/20 rounded-full px-5 py-2 flex items-center gap-2">
              <HiSparkles className="text-green-400 text-sm" />
              <span className="text-green-200 font-bold text-[10px] font-fira uppercase tracking-[0.4em]">
                Green Initiative 2026
              </span>
              <HiSparkles className="text-green-400 text-sm" />
            </div>
          </motion.div>

          {/* 🏛️ University Icon & Name (Simplified) */}
          <motion.div variants={itemVariants} className="mb-20">
            {/* University Icon replaced the "Official Project" text */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-28 h-28 md:w-32 md:h-32   border-green-500/20 rounded-[40px] flex items-center justify-center mx-auto mb-8 backdrop-blur-3xl shadow-2xl"
            >
              <img className="text-green-400 text-5xl md:text-6xl rounded-full"  src='/logo.jpg'/>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight uppercase tracking-tighter">
              {projectData.university}
            </h1>
            <div className="w-16 h-1 bg-green-500 mx-auto mt-8 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
            {/* Group Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] backdrop-blur-xl rounded-[32px] p-10 border border-white/10 text-left relative overflow-hidden group"
            >
              <div className="relative z-10">
                <p className="text-green-500 font-fira text-[10px] font-bold mb-4 uppercase tracking-[0.3em]">Team Group</p>
                <h2 className="text-6xl font-black text-white mb-2 tracking-tighter">
                  {projectData.groupNumber}
                </h2>
                <p className="text-gray-400 text-sm font-fira">
                  {projectData.students.length} Members Assigned
                </p>
              </div>
            </motion.div>

            {/* Department Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] backdrop-blur-xl rounded-[32px] p-10 border border-white/10 text-left relative overflow-hidden group"
            >
              <div className="relative z-10">
                <p className="text-blue-400 font-fira text-[10px] font-bold mb-4 uppercase tracking-[0.3em]">Department</p>
                <h3 className="text-xl md:text-2xl font-black text-white mb-2 uppercase tracking-tight">
                  {projectData.department}
                </h3>
                <p className="text-gray-400 text-sm font-fira">
                  {projectData.degree}
                </p>
              </div>
            </motion.div>
          </div>

          {/* 📌 Tree Planted Spotlight */}
          <motion.div
            variants={itemVariants}
            className="bg-white/[0.02] rounded-[40px] p-8 mb-16 max-w-5xl mx-auto border border-white/5 shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 text-left">
              <div className="flex items-center gap-6">
                <div className="bg-green-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
                  <FaTree className="text-white text-3xl" />
                </div>
                <div>
                  <p className="text-green-500 font-fira text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Tree Planted On</p>
                  <h3 className="text-4xl font-black text-white tracking-tighter leading-none">
                    {projectData.plantedDate}
                  </h3>
                </div>
              </div>
              <p className="text-gray-500 text-sm font-medium max-w-[220px] md:text-right">
                A small step towards a greener tomorrow
              </p>
            </div>
          </motion.div>

          {/* 🖱️ Scroll Indicator */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 opacity-40">
            <div className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1 bg-green-500 rounded-full"
              />
            </div>
            <p className="text-white font-fira text-[9px] uppercase tracking-[0.4em]">Scroll</p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
