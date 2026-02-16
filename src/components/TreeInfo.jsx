import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaBook } from 'react-icons/fa';
import { GiFlowerPot, GiTreeGrowth } from 'react-icons/gi';
import { projectData } from '../data';
import BackgroundImages from '../BackgroundImages';

const TreeInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      id="tree-info"
      className="relative min-h-screen py-24 flex items-center bg-[#050505]"
    >
      {/* 🖼️ Subtle Background Image with Heavy Dimming */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${BackgroundImages.treeInfo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* 🏷️ Simple Header */}
          <motion.div variants={itemVariants} className="mb-16 border-l-4 border-green-500 pl-6">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
              Tree <span className="text-green-500">Profile</span>
            </h2>
            <p className="text-gray-400 font-fira text-sm uppercase tracking-[0.3em]">
              Botanical Data & Classification
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* 🖼️ Clean Image Section */}
            <motion.div variants={itemVariants} className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-2">
                <img
                  src={BackgroundImages.ashokaTree}
                  alt="Tree"
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-xl"
                />
              </div>
              {/* Simple Float Label */}
              <div className="absolute -bottom-6 -right-6 bg-green-500 text-black px-6 py-4 rounded-xl shadow-2xl">
                <p className="font-fira font-bold text-xs uppercase tracking-widest mb-1">Status</p>
                <p className="font-black text-xl uppercase leading-none">Evergreen</p>
              </div>
            </motion.div>

            {/* 📋 Minimal Data Cards */}
            <div className="space-y-4">

              {/* English Name Card */}
              <motion.div variants={itemVariants} className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-white/[0.05] transition-colors">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-xl">
                  <FaLeaf />
                </div>
                <div>
                  <p className="text-green-500 font-fira text-[10px] font-bold uppercase tracking-widest mb-1">Common English Name</p>
                  <p className="text-3xl font-black text-white uppercase tracking-tight">
                    {projectData.treeNames.english}
                  </p>
                </div>
              </motion.div>

              {/* Hindi Name Card */}
              <motion.div variants={itemVariants} className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-white/[0.05] transition-colors">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 text-xl">
                  <FaBook />
                </div>
                <div>
                  <p className="text-orange-400 font-fira text-[10px] font-bold uppercase tracking-widest mb-1">हिंदी नाम</p>
                  <p className="text-3xl font-black text-white uppercase tracking-tight">
                    {projectData.treeNames.hindi}
                  </p>
                </div>
              </motion.div>

              {/* Scientific Name Card */}
              <motion.div variants={itemVariants} className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-white/[0.05] transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl">
                  <GiTreeGrowth />
                </div>
                <div>
                  <p className="text-blue-400 font-fira text-[10px] font-bold uppercase tracking-widest mb-1">Scientific Taxonomy</p>
                  <p className="text-2xl font-bold font-fira text-white tracking-tight">
                    {projectData.treeNames.scientific}
                  </p>
                </div>
              </motion.div>

              {/* Simple Footnote */}
              <motion.div variants={itemVariants} className="pt-4 opacity-30">
                <p className="font-fira text-[9px] uppercase tracking-[0.4em] text-white">
                  Verified Botanical Entry — Group {projectData.groupNumber}
                </p>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TreeInfo;
