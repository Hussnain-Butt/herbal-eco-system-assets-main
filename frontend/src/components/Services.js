import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Heart, 
  Briefcase, 
  Scale, 
  Home, 
  Car, 
  UserCheck, 
  Calendar,
  Clock,
  MapPin,
  Phone
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: BookOpen,
      title: "Parenting Education Program",
      shortDesc: "Comprehensive parenting skills for fathers",
      fullDesc: "Our evidence-based parenting program teaches fathers about child development, age-appropriate activities, safety measures, and effective behavior management techniques. Specially designed for fathers who have been recently released.",
      features: [
        "Child development stages and milestones",
        "Age-appropriate parenting strategies",
        "Safety precautions for different ages",
        "Managing difficult behaviors",
        "Building trust with children",
        "Effective communication techniques"
      ],
      duration: "12 weeks",
      schedule: "Twice weekly sessions",
      location: "Newark Community Center"
    },
    {
      icon: Users,
      title: "Co-Parenting Support",
      shortDesc: "Healthy communication between parents",
      fullDesc: "Helping both parents develop effective co-parenting strategies that prioritize the children's wellbeing while addressing the unique challenges faced by formerly incarcerated fathers.",
      features: [
        "Communication skills development",
        "Conflict resolution strategies",
        "Goal setting for family success",
        "Understanding children's needs",
        "Managing transitions and visits",
        "Building cooperative relationships"
      ],
      duration: "8 weeks",
      schedule: "Weekly joint sessions",
      location: "Various locations available"
    },
    {
      icon: Heart,
      title: "Individual & Group Therapy",
      shortDesc: "Mental health and emotional support",
      fullDesc: "Professional counseling services addressing the emotional challenges of reintegration, building self-esteem, and developing healthy coping mechanisms for fathers and their families.",
      features: [
        "Individual counseling sessions",
        "Group therapy with peers",
        "Family therapy sessions",
        "Trauma-informed care",
        "Self-esteem building",
        "Stress management techniques"
      ],
      duration: "Ongoing",
      schedule: "Weekly sessions",
      location: "Professional therapy offices"
    },
    {
      icon: Briefcase,
      title: "Employment Assistance",
      shortDesc: "Job training and placement support",
      fullDesc: "Comprehensive employment services helping fathers secure stable employment, from resume building to job placement and retention support.",
      features: [
        "Resume writing and interview prep",
        "Job search assistance",
        "Skills training programs",
        "Employer partnership network",
        "Financial literacy education",
        "Career development planning"
      ],
      duration: "3-6 months",
      schedule: "Flexible scheduling",
      location: "Career development center"
    },
    {
      icon: Scale,
      title: "Legal Assistance",
      shortDesc: "Navigate legal challenges",
      fullDesc: "Professional legal support for issues affecting family reunification, including visitation rights, child support modifications, and resolving outstanding legal matters.",
      features: [
        "Visitation rights advocacy",
        "Child support modifications",
        "Warrant resolution assistance",
        "Family court representation",
        "Legal document preparation",
        "Rights education and advocacy"
      ],
      duration: "As needed",
      schedule: "By appointment",
      location: "Legal aid offices"
    },
    {
      icon: Home,
      title: "Housing Support",
      shortDesc: "Secure stable housing",
      fullDesc: "Assistance in finding and maintaining stable housing, which is crucial for family visitation and reunification efforts.",
      features: [
        "Housing search assistance",
        "Application support",
        "Landlord mediation",
        "Transitional housing options",
        "Housing stability counseling",
        "Emergency shelter coordination"
      ],
      duration: "Ongoing support",
      schedule: "As needed",
      location: "Community partnerships"
    },
    {
      icon: UserCheck,
      title: "Mentorship Program",
      shortDesc: "Peer support and guidance",
      fullDesc: "Connecting fathers with successful mentors who have navigated similar challenges, providing ongoing support and real-world guidance.",
      features: [
        "One-on-one mentoring relationships",
        "Peer support groups",
        "Success story sharing",
        "Goal accountability",
        "Life skills coaching",
        "Ongoing encouragement"
      ],
      duration: "12+ months",
      schedule: "Weekly meetings",
      location: "Community locations"
    },
    {
      icon: Car,
      title: "Transportation Support",
      shortDesc: "Travel assistance for programs",
      fullDesc: "Providing transportation assistance to ensure fathers can attend programs, visit their children, and maintain employment.",
      features: [
        "Program transportation",
        "Visitation travel support",
        "Employment commute assistance",
        "Bus passes and vouchers",
        "Emergency transportation",
        "Transportation planning"
      ],
      duration: "As needed",
      schedule: "Flexible",
      location: "Various pickup points"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
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
            Our <span className="text-green-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive, evidence-based support services designed to help fathers successfully reunite with their families and communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Service Navigation */}
          <div className="lg:col-span-4">
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-24"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Choose a Service</h3>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveService(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center space-x-3 ${
                        activeService === index 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg' 
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <service.icon className={`w-5 h-5 ${activeService === index ? 'text-white' : 'text-green-600'}`} />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{service.title}</div>
                        <div className={`text-xs ${activeService === index ? 'text-green-100' : 'text-slate-500'}`}>
                          {service.shortDesc}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-8">
                  {/* Service Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                      {React.createElement(services[activeService].icon, {
                        className: "w-8 h-8 text-white"
                      })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">
                        {services[activeService].title}
                      </h3>
                      <p className="text-slate-600">{services[activeService].shortDesc}</p>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-slate-700 text-lg leading-relaxed mb-8">
                    {services[activeService].fullDesc}
                  </p>

                  {/* Service Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="text-sm font-medium text-slate-800">Duration</div>
                        <div className="text-sm text-slate-600">{services[activeService].duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="text-sm font-medium text-slate-800">Schedule</div>
                        <div className="text-sm text-slate-600">{services[activeService].schedule}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="text-sm font-medium text-slate-800">Location</div>
                        <div className="text-sm text-slate-600">{services[activeService].location}</div>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">What's Included:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services[activeService].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Heart className="w-4 h-4" />
                      <span>Get Help Today</span>
                    </motion.button>
                    <motion.button
                      className="flex-1 bg-slate-100 text-slate-700 px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call (973) 555-DADS</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <motion.div
          className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Immediate Help?
          </h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            If you're facing an emergency situation or need immediate assistance, don't wait. Reach out now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="tel:973-555-3237"
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency Line</span>
            </motion.a>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-red-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;