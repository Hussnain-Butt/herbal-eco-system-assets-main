import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Briefcase, Scale, Home, Car, UserCheck } from 'lucide-react';

const Solution = () => {
  const interventions = [
    {
      icon: BookOpen,
      title: "Parenting Education",
      description: "Teaching fathers child development, safety precautions, and behavior management skills",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Co-Parenting Skills",
      description: "Developing healthy communication, goal setting, and problem-solving between parents",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Individual & Group Therapy",
      description: "Building self-esteem and addressing family dynamics through professional counseling",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Briefcase,
      title: "Employment Assistance",
      description: "Helping fathers obtain and maintain stable employment to support their families",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Scale,
      title: "Legal Support",
      description: "Providing assistance with visitation, child support, warrants, and legal matters",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Home,
      title: "Housing Assistance",
      description: "Supporting fathers in securing stable housing for family reunification",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Car,
      title: "Transportation Support",
      description: "Providing transportation assistance for visiting children and attending programs",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: UserCheck,
      title: "Mentorship Program",
      description: "Connecting fathers with mentors who have successfully navigated similar challenges",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const principles = {
    title: "Our Evidence-Based Approach",
    items: [
      "Holistic family perspective focusing on reunification",
      "Sequential, modular, and flexible interventions",
      "Father-friendly environment building trust and engagement",
      "Individual needs assessment and customized support",
      "Building upon each intervention for sustained success",
      "Community support integration and extended family involvement"
    ]
  };

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-green-600">Solution</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            D.A.D.S. provides comprehensive, evidence-based interventions designed to break the cycle of incarceration and rebuild family bonds.
          </p>
        </motion.div>

        {/* Hero Image with Overlay Content */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-20 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1553073520-80b5ad5ec870?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxjb21tdW5pdHklMjBzdXBwb3J0fGVufDB8fHx8MTc1MzU1NDEyNXww&ixlib=rb-4.1.0&q=85"
            alt="Community support and love"
            className="w-full h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-6">
              <motion.h3
                className="text-3xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Transforming Lives Through Love & Support
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl text-slate-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Evidence shows that graduating from our programs can decrease recidivism by 72%
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Principles Section */}
        <motion.div
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-8">{principles.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.items.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-slate-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interventions Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {interventions.map((intervention, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group"
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${intervention.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <intervention.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-3">{intervention.title}</h4>
              <p className="text-slate-600 leading-relaxed">{intervention.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Proven Results, Lasting Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">72%</div>
              <div className="text-slate-300">Recidivism Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
              <div className="text-slate-300">Family Reunification Success</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-slate-300">Program Completion Rate</div>
            </div>
          </div>
          <motion.button
            onClick={() => {
              const element = document.getElementById('services');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;