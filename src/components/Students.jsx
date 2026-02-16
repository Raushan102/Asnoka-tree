import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCrown, FaUser, FaGraduationCap } from 'react-icons/fa';
import { projectData } from '../data';
import BackgroundImages from '../BackgroundImages';

const Students = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      className="relative min-h-screen py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${BackgroundImages.students})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85"></div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-5 text-green-400/10 text-9xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <FaUsers />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaGraduationCap className="text-green-400 text-4xl md:text-5xl" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow-lg mb-4">
            Our Green Warriors
          </h2>
          <p className="text-green-300 text-lg md:text-xl">
            Group 01 - Department of Mining
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-light rounded-3xl p-6 md:p-8 mb-12 max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-green-400 text-3xl md:text-4xl font-bold mb-2">
                {projectData.students.length}
              </p>
              <p className="text-white text-sm md:text-base">Team Members</p>
            </div>
            <div>
              <p className="text-green-400 text-3xl md:text-4xl font-bold mb-2">01</p>
              <p className="text-white text-sm md:text-base">Group Number</p>
            </div>
            <div>
              <p className="text-green-400 text-3xl md:text-4xl font-bold mb-2">01</p>
              <p className="text-white text-sm md:text-base">Tree Planted</p>
            </div>
          </div>
        </motion.div>

        {/* Students Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto"
        >
          {projectData.students.map((student, index) => (
            <motion.div
              key={student.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className={`
                ${student.leader
                  ? 'glass-light border-2 border-green-400 shadow-green-400/50'
                  : 'glass-dark'
                }
                rounded-2xl p-6 card-hover relative overflow-hidden
              `}
            >
              {/* Leader Badge */}
              {student.leader && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute top-4 right-4"
                >
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-full shadow-lg">
                    <FaCrown className="text-white text-xl" />
                  </div>
                </motion.div>
              )}

              {/* Student Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`
                  ${student.leader
                    ? 'bg-gradient-to-br from-green-400 to-emerald-600'
                    : 'bg-gradient-to-br from-gray-600 to-gray-800'
                  }
                  w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0
                `}>
                  <FaUser className="text-white text-xl md:text-2xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`
                    ${student.leader ? 'text-green-400' : 'text-white'}
                    font-bold text-base md:text-lg mb-1 truncate
                  `}>
                    {student.name}
                  </h3>
                  {student.leader && (
                    <span className="inline-block bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full font-semibold">
                      Team Leader
                    </span>
                  )}
                </div>
              </div>

              {/* Roll Number */}
              <div className="glass-dark rounded-lg p-3 mt-3">
                <p className="text-gray-400 text-xs mb-1">Roll Number</p>
                <p className="text-green-300 font-mono text-sm md:text-base font-semibold">
                  {student.roll}
                </p>
              </div>

              {/* Student Number Badge */}
              <div className="absolute bottom-4 right-4 bg-green-500/20 text-green-400 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                {student.id}
              </div>

              {/* Decorative Corner */}
              <div className={`
                absolute top-0 left-0 w-20 h-20
                ${student.leader ? 'bg-green-400/10' : 'bg-gray-600/10'}
                rounded-br-full
              `}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-light rounded-3xl p-8 md:p-10 max-w-3xl mx-auto">
            <p className="text-white text-lg md:text-xl leading-relaxed mb-4">
              "Together we plant today, for a greener tomorrow"
            </p>
            <p className="text-green-400 text-2xl md:text-3xl font-bold">
              🌱 One Team, One Dream, One Tree 🌱
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Students;
