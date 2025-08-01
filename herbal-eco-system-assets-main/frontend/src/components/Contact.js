import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Heart,
  AlertCircle,
  CheckCircle,
  User,
  FileText
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'help',
    message: '',
    urgent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'help',
        message: '',
        urgent: false
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "(973) 555-DADS (3237)",
      subDetails: "Monday - Friday, 9 AM - 6 PM",
      action: "tel:973-555-3237",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "help@dadsProgram.org",
      subDetails: "We respond within 24 hours",
      action: "mailto:help@dadsProgram.org",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "303 Washington St. Ste. 330",
      subDetails: "Newark, NJ 07102",
      action: "https://maps.google.com",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 9 AM - 6 PM",
      subDetails: "Sat: 10 AM - 2 PM",
      action: null,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const inquiryTypes = [
    { value: 'help', label: 'I Need Help', icon: Heart },
    { value: 'volunteer', label: 'Volunteer Interest', icon: User },
    { value: 'partnership', label: 'Partnership Inquiry', icon: MessageCircle },
    { value: 'media', label: 'Media/Press', icon: FileText },
    { value: 'other', label: 'Other', icon: MessageCircle }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
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
            Get in <span className="text-green-600">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Whether you need help, want to volunteer, or have questions about our programs, we're here for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-green-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-800 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-slate-700 font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-slate-600 text-sm">
                        {info.subDetails}
                      </p>
                      {info.action && (
                        <motion.a
                          href={info.action}
                          className="inline-flex items-center space-x-1 text-green-600 hover:text-green-700 font-medium text-sm mt-2"
                          whileHover={{ x: 5 }}
                        >
                          <span>Contact Now</span>
                          <Send className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency Contact */}
            <motion.div
              className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-red-200 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Crisis Support</h4>
                  <p className="text-red-100 text-sm mb-3 leading-relaxed">
                    If you're in immediate crisis or need urgent assistance, please call our emergency line or contact local emergency services.
                  </p>
                  <motion.a
                    href="tel:973-555-4357"
                    className="inline-flex items-center space-x-2 bg-white text-red-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-red-50 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-4 h-4" />
                    <span>Emergency: (973) 555-HELP</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h4>
                  <p className="text-slate-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      How can we help you? *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {inquiryTypes.map((type) => (
                        <motion.label
                          key={type.value}
                          className={`flex items-center space-x-3 p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            formData.inquiryType === type.value
                              ? 'border-green-500 bg-green-50'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <input
                            type="radio"
                            name="inquiryType"
                            value={type.value}
                            checked={formData.inquiryType === type.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <type.icon className={`w-5 h-5 ${
                            formData.inquiryType === type.value ? 'text-green-600' : 'text-slate-400'
                          }`} />
                          <span className={`text-sm font-medium ${
                            formData.inquiryType === type.value ? 'text-green-800' : 'text-slate-700'
                          }`}>
                            {type.label}
                          </span>
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Please tell us how we can help you..."
                    />
                  </div>

                  {/* Urgent Checkbox */}
                  <motion.label
                    className={`flex items-start space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      formData.urgent
                        ? 'border-red-500 bg-red-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    whileHover={{ scale: 1.01 }}
                  >
                    <input
                      type="checkbox"
                      name="urgent"
                      checked={formData.urgent}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                    <div>
                      <span className={`font-medium ${
                        formData.urgent ? 'text-red-800' : 'text-slate-700'
                      }`}>
                        This is urgent
                      </span>
                      <p className={`text-sm ${
                        formData.urgent ? 'text-red-600' : 'text-slate-600'
                      }`}>
                        Check this if you need immediate assistance or are in crisis
                      </p>
                    </div>
                  </motion.label>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting
                        ? 'bg-slate-400 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-xl'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Find Us</h3>
          <div className="bg-gradient-to-br from-slate-100 to-green-100 rounded-3xl p-8 text-center">
            <MapPin className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h4 className="text-xl font-semibold text-slate-800 mb-2">
              DADS Program - Newark Office
            </h4>
            <p className="text-slate-600 mb-4">
              303 Washington St. Ste. 330<br />
              Newark, NJ 07102
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://maps.google.com/?q=303+Washington+St.+Ste.+330,+Newark+NJ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions</span>
              </motion.a>
              <motion.a
                href="tel:973-555-3237"
                className="bg-slate-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                <span>Call Before Visit</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;