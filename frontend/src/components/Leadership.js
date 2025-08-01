import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Users, 
  Heart, 
  BookOpen, 
  Mic,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

const Leadership = () => {
  const teamMembers = [
    {
      name: "Dr. Lisa LaCon",
      title: "Founder & Executive Director",
      image: "/api/placeholder/400/400", // We'll use Dr. LaCon's provided photo
      bio: "Dr. Lisa LaCon is the visionary founder and executive director of the DADS program. With extensive experience in criminal justice reform and family reunification, she brings a passion for breaking the cycle of incarceration through evidence-based interventions.",
      credentials: [
        "Ph.D. in Criminal Justice",
        "20+ years in social work",
        "Published researcher on family reunification",
        "National speaker on criminal justice reform"
      ],
      specialties: [
        "Family Systems Therapy",
        "Criminal Justice Reform",
        "Evidence-Based Interventions",
        "Community Program Development"
      ],
      contact: {
        email: "dr.lacon@dadsProgram.org",
        phone: "(973) 555-0123"
      }
    }
  ];

  const boardMembers = [
    {
      name: "Rev. Marcus Johnson",
      title: "Board Chair",
      bio: "Community leader with 15 years experience in faith-based rehabilitation programs.",
      icon: Users
    },
    {
      name: "Sarah Williams, LCSW",
      title: "Clinical Director",
      bio: "Licensed clinical social worker specializing in trauma-informed family therapy.",
      icon: Heart
    },
    {
      name: "Judge Robert Martinez (Ret.)",
      title: "Legal Advisor",
      bio: "Retired family court judge passionate about alternative sentencing and rehabilitation.",
      icon: Award
    },
    {
      name: "Dr. Michael Thompson",
      title: "Research Director",
      bio: "Academic researcher focusing on recidivism reduction and program evaluation.",
      icon: BookOpen
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "500+",
      description: "Fathers Successfully Reunited"
    },
    {
      icon: GraduationCap,
      number: "72%",
      description: "Reduction in Recidivism"
    },
    {
      icon: Heart,
      number: "1,200+",
      description: "Children Reconnected with Fathers"
    },
    {
      icon: Award,
      number: "5",
      description: "Community Excellence Awards"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-white">
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
            Our <span className="text-green-600">Leadership</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the dedicated professionals and advocates working tirelessly to transform lives and rebuild families.
          </p>
        </motion.div>

        {/* Founder Spotlight */}
        <motion.div
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl overflow-hidden shadow-2xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-96 lg:h-full">
              <img
                src="/images/dr-lisa-lacon-1.jpg"
                alt="Dr. Lisa LaCon, Founder and Executive Director of DADS Program"
                className="w-full h-full object-cover rounded-l-3xl lg:rounded-l-none"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 hidden items-center justify-center rounded-l-3xl lg:rounded-l-none">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-slate-600">Dr. Lisa LaCon's Photo</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-slate-800 mb-2">
                  {teamMembers[0].name}
                </h3>
                <p className="text-xl text-green-600 font-semibold mb-6">
                  {teamMembers[0].title}
                </p>
                
                <p className="text-slate-700 leading-relaxed mb-8">
                  {teamMembers[0].bio}
                </p>

                {/* Credentials */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Credentials & Experience</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {teamMembers[0].credentials.map((credential, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-slate-700">{credential}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers[0].specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={`mailto:${teamMembers[0].contact.email}`}
                    className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Dr. LaCon</span>
                  </motion.a>
                  <motion.a
                    href={`tel:${teamMembers[0].contact.phone}`}
                    className="flex items-center space-x-2 bg-slate-600 text-white px-4 py-2 rounded-full hover:bg-slate-700 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Office</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Board Members */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Board of Directors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <member.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-1">{member.name}</h4>
                <p className="text-green-600 font-medium mb-3">{member.title}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Impact Under Dr. LaCon's Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-slate-300">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Mic className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6 italic">
            "Every father deserves a second chance to be the parent their children need. At DADS, we don't just break the cycle of incarceration—we build bridges to brighter futures."
          </blockquote>
          <cite className="text-lg text-green-600 font-medium">
            — Dr. Lisa LaCon, Founder & Executive Director
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;