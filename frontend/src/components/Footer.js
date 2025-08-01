import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ExternalLink,
  ArrowUp,
  Users,
  BookOpen,
  Calendar,
  Gift
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    programs: [
      { name: 'Parenting Education', id: 'services' },
      { name: 'Co-Parenting Support', id: 'services' },
      { name: 'Individual Therapy', id: 'services' },
      { name: 'Employment Assistance', id: 'services' },
      { name: 'Legal Support', id: 'services' },
      { name: 'Mentorship Program', id: 'services' }
    ],
    resources: [
      { name: 'Download Resources', id: 'resources' },
      { name: 'Parenting Guides', id: 'resources' },
      { name: 'Legal Information', id: 'resources' },
      { name: 'Success Stories', id: 'leadership' },
      { name: 'Research & Data', id: 'problem' },
      { name: 'Community Calendar', id: 'events' }
    ],
    getInvolved: [
      { name: 'Make a Donation', id: 'get-involved' },
      { name: 'Volunteer Opportunities', id: 'get-involved' },
      { name: 'Corporate Partnerships', id: 'get-involved' },
      { name: 'Upcoming Events', id: 'events' },
      { name: 'Newsletter Signup', id: 'resources' },
      { name: 'Contact Us', id: 'contact' }
    ],
    about: [
      { name: 'Our Mission', id: 'hero' },
      { name: 'The Problem We Solve', id: 'problem' },
      { name: 'Our Solution', id: 'solution' },
      { name: 'Leadership Team', id: 'leadership' },
      { name: 'Dr. Lisa LaCon', id: 'leadership' },
      { name: 'Board of Directors', id: 'leadership' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickActions = [
    { icon: Gift, text: 'Donate Now', action: () => scrollToSection('get-involved'), color: 'from-green-500 to-emerald-600' },
    { icon: Users, text: 'Get Help', action: () => scrollToSection('contact'), color: 'from-blue-500 to-blue-600' },
    { icon: Calendar, text: 'Join Event', action: () => scrollToSection('events'), color: 'from-purple-500 to-purple-600' },
    { icon: BookOpen, text: 'Resources', action: () => scrollToSection('resources'), color: 'from-orange-500 to-orange-600' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Quick Actions Bar */}
      <motion.div
        className="bg-gradient-to-r from-green-600 to-emerald-600 py-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to Make a Difference?
            </h3>
            <p className="text-green-100 text-lg">
              Take action today and help transform lives in our community
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                onClick={action.action}
                className={`bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 rounded-2xl p-6 text-center transition-all duration-300 group`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <action.icon className="w-8 h-8 text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white font-semibold text-sm">{action.text}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Organization Info */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Logo and Tagline */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src="/images/dads-logo.png" 
                  alt="DADS Program Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl items-center justify-center hidden">
                  <Heart className="w-6 h-6 text-white fill-current" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">DADS</h3>
                <p className="text-sm text-slate-300">Advancing Daughters & Sons</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Breaking the cycle of incarceration through evidence-based interventions that help fathers reconnect with their families and communities.
            </p>

            {/* Mission Statement */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
              <blockquote className="text-green-300 italic font-medium text-lg">
                "Coming together is a beginning, Keeping together is a process, Working together is a success!"
              </blockquote>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300">
                  <p>303 Washington St. Ste. 330</p>
                  <p>Newark, NJ 07102</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="tel:973-555-3237" className="text-slate-300 hover:text-white transition-colors duration-300">
                  (973) 555-DADS (3237)
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="mailto:help@dadsProgram.org" className="text-slate-300 hover:text-white transition-colors duration-300">
                  help@dadsProgram.org
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Our Programs</h4>
              <ul className="space-y-3">
                {footerLinks.programs.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-slate-300 hover:text-green-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-slate-300 hover:text-green-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Get Involved */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Get Involved</h4>
              <ul className="space-y-3">
                {footerLinks.getInvolved.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-slate-300 hover:text-green-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">About DADS</h4>
              <ul className="space-y-3">
                {footerLinks.about.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-slate-300 hover:text-green-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-3xl p-8 border border-green-500/20 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h4 className="text-2xl font-bold text-white mb-2">Stay Connected</h4>
            <p className="text-green-200">Get updates on our programs, events, and success stories</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <motion.button
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              <p>&copy; 2025 DADS Program - Dads Advancing Daughters and Sons. All rights reserved.</p>
              <p className="text-xs mt-1">Tax-exempt non-profit organization 501(c)(3)</p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-slate-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-slate-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-slate-400 hover:text-white transition-colors duration-300">
                Accessibility
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;