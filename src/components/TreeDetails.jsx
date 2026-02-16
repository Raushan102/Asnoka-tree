import React from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle, FaSpa, FaHeart, FaBookOpen } from 'react-icons/fa';
import { GiMeditation, GiIndiaGate } from 'react-icons/gi';
import { projectData } from '../data';
import BackgroundImages from '../BackgroundImages';

const TreeDetails = () => {
  const highlights = [
    {
      icon: <FaSpa />,
      title: "Evergreen",
      description: "Maintains lush green foliage throughout the year.",
      color: "text-green-500",
    },
    {
      icon: <FaHeart />,
      title: "Sacred",
      description: "Deeply revered in Indian spiritual traditions.",
      color: "text-red-500",
    },
    {
      icon: <GiMeditation />,
      title: "Healing",
      description: "Core element in Ayurvedic medicinal practices.",
      color: "text-blue-500",
    },
    {
      icon: <GiIndiaGate />,
      title: "Heritage",
      description: "Significant presence in historical literature.",
      color: "text-orange-500",
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* 🏷️ Minimal Header */}
          <div className="mb-16 border-l-4 border-green-500 pl-6">
            <p className="text-green-500 font-fira text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Technical Overview</p>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
              About the <span className="text-green-500">Species</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {/* 🛠️ Main Description Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <FaBookOpen className="text-green-500 text-xl" />
                <span className="text-white font-fira text-xs uppercase tracking-widest font-bold">General Description</span>
              </div>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
                {projectData.description}
              </p>
            </motion.div>

            {/* 🌸 Highlight Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-green-500 rounded-3xl p-8 flex flex-col justify-center text-black"
            >
              <p className="font-fira text-[10px] font-black uppercase tracking-widest mb-4 opacity-60 italic">Botanical Trivia</p>
              <h3 className="text-2xl font-black uppercase leading-tight tracking-tighter">
                "The Remover of Sorrow"
              </h3>
              <p className="mt-4 text-sm font-bold opacity-80">
                The Ashoka tree blooms with vibrant orange-red clusters during the spring season.
              </p>
            </motion.div>
          </div>

          {/* 📌 Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20"
              >
                <div className={`${item.color} text-2xl mb-6 opacity-80`}>
                  {item.icon}
                </div>
                <h4 className="text-white text-sm font-black uppercase tracking-widest mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs font-medium leading-relaxed font-fira">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TreeDetails;
