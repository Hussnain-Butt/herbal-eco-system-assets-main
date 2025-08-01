import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Users, GraduationCap } from 'lucide-react';

const Problem = () => {
  const statistics = [
    {
      icon: AlertTriangle,
      number: "82%",
      description: "Probability that a child with an incarcerated parent will end up in prison",
      color: "from-red-500 to-red-600"
    },
    {
      icon: TrendingDown,
      number: "$74B",
      description: "Annual spending on prison population (2014)",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      number: "6.6M",
      description: "At-risk population of potential school dropouts",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: GraduationCap,
      number: "78%",
      description: "Of prison population lacks post-secondary education",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const challenges = [
    {
      title: "Children's Challenges",
      items: [
        "Increased depression and behavioral problems",
        "Higher aggression and attention issues",
        "Educational disadvantages compared to peers",
        "Social exclusion and stigma"
      ],
      image: "https://images.unsplash.com/photo-1517554558809-9b4971b38f39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxmYXRoZXIlMjBjaGlsZHxlbnwwfHx8fDE3NTM1NTQxMTZ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Fathers' Struggles",
      items: [
        "Physical and emotional separation from children",
        "Shame and embarrassment explaining incarceration",
        "Unable to provide financial support",
        "Restricted movement affecting visitation"
      ],
      image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxmYXRoZXIlMjBjaGlsZHxlbnwwfHx8fDE3NTM1NTQxMTZ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Mothers' Burden",
      items: [
        "Sole responsibility for maintaining father-child relationships",
        "Managing difficult family dynamics",
        "Financial strain without partner support",
        "Navigating new relationships and father figures"
      ],
      image: "https://images.unsplash.com/photo-1522543558187-768b6df7c25c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxjb21tdW5pdHklMjBzdXBwb3J0fGVufDB8fHx8MTc1MzU1NDEyNXww&ixlib=rb-4.1.0&q=85"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-slate-50">
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
            The <span className="text-red-600">Crisis</span> We Face
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Over 1.7 million children in the U.S. have a parent in prison, creating a cycle of disadvantage that affects entire families and communities.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
              <p className="text-sm text-slate-600 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Challenges Section */}
        <div className="space-y-12">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="flex-1 lg:max-w-lg">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={challenge.image}
                    alt={challenge.title}
                    className="w-full h-64 lg:h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-bold text-slate-800">{challenge.title}</h3>
                <div className="space-y-4">
                  {challenge.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Breaking the Cycle Starts Here
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            The challenges are real, but so is the solution. Evidence-based interventions can decrease recidivism by 72% and transform families forever.
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('solution');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Our Solution
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;