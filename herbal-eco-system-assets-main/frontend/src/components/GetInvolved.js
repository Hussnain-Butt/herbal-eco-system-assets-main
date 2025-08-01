import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  DollarSign, 
  Users, 
  Calendar, 
  Gift,
  CreditCard,
  Smartphone,
  Building,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const GetInvolved = () => {
  const [donationAmount, setDonationAmount] = useState(50);
  const [donationType, setDonationType] = useState('monthly');
  const [selectedPayment, setSelectedPayment] = useState('card');

  const donationAmounts = [25, 50, 100, 250, 500];
  
  const donationImpacts = {
    25: "Provides transportation for 2 father-child visits",
    50: "Funds one counseling session for a family",
    100: "Supports a father through one week of our program",
    250: "Covers legal assistance for child support modification",
    500: "Sponsors a complete parenting education course"
  };

  const volunteerOpportunities = [
    {
      title: "Mentorship Coordinator",
      description: "Help match fathers with experienced mentors and coordinate ongoing relationships.",
      commitment: "4-6 hours/week",
      icon: Users,
      urgent: true
    },
    {
      title: "Transportation Volunteer",
      description: "Provide rides to program sessions, court dates, and family visits.",
      commitment: "Flexible scheduling",
      icon: Calendar,
      urgent: false
    },
    {
      title: "Workshop Assistant",
      description: "Support facilitators during parenting classes and group therapy sessions.",
      commitment: "2-3 hours/week",
      icon: Star,
      urgent: false
    },
    {
      title: "Administrative Support",
      description: "Help with data entry, filing, phone calls, and general office tasks.",
      commitment: "3-4 hours/week",
      icon: Building,
      urgent: true
    }
  ];

  const corporatePartnership = [
    {
      title: "Employment Partner",
      description: "Provide job opportunities and interview skills training for program participants.",
      benefits: ["Tax benefits", "Community recognition", "Employee engagement opportunities"]
    },
    {
      title: "Event Sponsor",
      description: "Sponsor community events, workshops, and family reunification celebrations.",
      benefits: ["Brand visibility", "Networking opportunities", "Social impact storytelling"]
    },
    {
      title: "In-Kind Donations",
      description: "Donate goods, services, or professional expertise to support our programs.",
      benefits: ["Direct community impact", "Employee volunteer opportunities", "Partnership recognition"]
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-white">
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
            Get <span className="text-green-600">Involved</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join us in breaking the cycle of incarceration and rebuilding families. Every contribution makes a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Donation Section */}
          <motion.div
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white fill-current" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Make a Donation</h3>
              <p className="text-slate-600">Your support directly impacts fathers and families in our community</p>
            </div>

            {/* Donation Type Toggle */}
            <div className="bg-white rounded-xl p-1 flex mb-6">
              <button
                onClick={() => setDonationType('monthly')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  donationType === 'monthly' 
                    ? 'bg-green-500 text-white shadow-lg' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setDonationType('one-time')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  donationType === 'one-time' 
                    ? 'bg-green-500 text-white shadow-lg' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                One-time
              </button>
            </div>

            {/* Amount Selection */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {donationAmounts.map((amount) => (
                <motion.button
                  key={amount}
                  onClick={() => setDonationAmount(amount)}
                  className={`p-4 rounded-xl font-semibold transition-all duration-300 ${
                    donationAmount === amount
                      ? 'bg-green-500 text-white shadow-lg scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                  }`}
                  whileHover={{ scale: donationAmount === amount ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ${amount}
                </motion.button>
              ))}
              <input
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                className="p-4 rounded-xl border border-slate-200 font-semibold text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Custom"
              />
            </div>

            {/* Impact Statement */}
            <div className="bg-white rounded-xl p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Gift className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <p className="text-sm font-medium text-slate-800">Your ${donationAmount} {donationType} donation:</p>
                  <p className="text-sm text-slate-600 mt-1">
                    {donationImpacts[donationAmount] || "Provides vital support for our programs and services"}
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-3 mb-6">
              {[
                { id: 'card', icon: CreditCard, label: 'Credit/Debit Card' },
                { id: 'paypal', icon: Smartphone, label: 'PayPal' },
                { id: 'bank', icon: Building, label: 'Bank Transfer' }
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`w-full p-4 rounded-xl flex items-center space-x-3 transition-all duration-300 ${
                    selectedPayment === method.id
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <method.icon className="w-5 h-5" />
                  <span className="font-medium">{method.label}</span>
                  {selectedPayment === method.id && <CheckCircle className="w-5 h-5 ml-auto" />}
                </button>
              ))}
            </div>

            {/* Donate Button */}
            <motion.button
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Heart className="w-5 h-5 fill-current" />
              <span>Donate ${donationAmount} {donationType === 'monthly' ? '/month' : ''}</span>
            </motion.button>

            <p className="text-xs text-slate-500 text-center mt-4">
              Secure donation processing. Tax-deductible receipt provided.
            </p>
          </motion.div>

          {/* Volunteer Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Volunteer With Us</h3>
              <p className="text-slate-600">Contribute your time and skills to make a direct impact</p>
            </div>

            <div className="space-y-4">
              {volunteerOpportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  {opportunity.urgent && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Urgent Need
                    </div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <opportunity.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-800 mb-2 pr-16">
                        {opportunity.title}
                      </h4>
                      <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                        {opportunity.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-blue-600 font-medium">
                          {opportunity.commitment}
                        </span>
                        <motion.button
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1"
                          whileHover={{ x: 5 }}
                        >
                          <span>Apply Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="w-full mt-6 bg-blue-500 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Volunteer Opportunities
            </motion.button>
          </motion.div>
        </div>

        {/* Corporate Partnership */}
        <motion.div
          className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Corporate Partnerships
            </h3>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Partner with us to create meaningful change in your community while achieving your corporate social responsibility goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporatePartnership.map((partnership, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-xl font-semibold text-white mb-3">
                  {partnership.title}
                </h4>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {partnership.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-green-400 mb-2">Benefits:</p>
                  {partnership.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Partnership Opportunities
            </motion.button>
          </div>
        </motion.div>

        {/* Community Impact */}
        <motion.div
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Your Impact in Numbers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Fathers Supported" },
              { number: "1,200+", label: "Children Reconnected" },
              { number: "150", label: "Active Volunteers" },
              { number: "$2M+", label: "Community Investment" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolved;