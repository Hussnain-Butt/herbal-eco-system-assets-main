import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  BookOpen, 
  Heart,
  ArrowRight,
  Filter,
  Plus,
  Video,
  UserCheck,
  Coffee,
  Briefcase
} from 'lucide-react';

const Events = () => {
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const eventTypes = [
    { id: 'all', name: 'All Events', icon: Calendar },
    { id: 'workshop', name: 'Workshops', icon: BookOpen },
    { id: 'support', name: 'Support Groups', icon: Heart },
    { id: 'training', name: 'Training', icon: UserCheck },
    { id: 'social', name: 'Social Events', icon: Coffee }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Parenting Skills Workshop",
      description: "Learn effective parenting strategies and communication techniques for reconnecting with your children.",
      date: "2025-01-15",
      time: "6:00 PM - 8:00 PM",
      location: "DADS Community Center",
      address: "303 Washington St. Ste. 330, Newark NJ",
      type: "workshop",
      capacity: 25,
      registered: 18,
      facilitator: "Dr. Sarah Johnson, LCSW",
      cost: "Free",
      featured: true,
      virtual: false,
      requirements: ["Must be enrolled in DADS program", "Bring notebook and pen"]
    },
    {
      id: 2,
      title: "Father-Child Bonding Activities",
      description: "Interactive session with age-appropriate activities to strengthen your relationship with your children.",
      date: "2025-01-18",
      time: "10:00 AM - 12:00 PM",
      location: "Community Park Pavilion",
      address: "Branch Brook Park, Newark NJ",
      type: "social",
      capacity: 30,
      registered: 12,
      facilitator: "Marcus Williams, Family Counselor",
      cost: "Free",
      featured: false,
      virtual: false,
      requirements: ["Children welcome", "Bring snacks to share"]
    },
    {
      id: 3,
      title: "Employment Readiness Training",
      description: "Resume building, interview skills, and job search strategies for formerly incarcerated individuals.",
      date: "2025-01-20",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Session",
      address: "Online via Zoom",
      type: "training",
      capacity: 50,
      registered: 35,
      facilitator: "Career Development Team",
      cost: "Free",
      featured: true,
      virtual: true,
      requirements: ["Laptop or smartphone with internet", "Resume draft (if available)"]
    },
    {
      id: 4,
      title: "Weekly Support Group",
      description: "Peer support group for fathers working through reintegration challenges and family relationships.",
      date: "2025-01-22",
      time: "7:00 PM - 8:30 PM",
      location: "DADS Community Center",
      address: "303 Washington St. Ste. 330, Newark NJ",
      type: "support",
      capacity: 15,
      registered: 8,
      facilitator: "Rev. Marcus Johnson",
      cost: "Free",
      featured: false,
      virtual: false,
      requirements: ["Confidentiality agreement", "Regular attendance encouraged"]
    },
    {
      id: 5,
      title: "Legal Rights Workshop",
      description: "Understanding your rights regarding child custody, visitation, and child support modifications.",
      date: "2025-01-25",
      time: "1:00 PM - 4:00 PM",
      location: "Newark Legal Aid Office",
      address: "123 Market Street, Newark NJ",
      type: "workshop",
      capacity: 20,
      registered: 15,
      facilitator: "Legal Aid Attorney",
      cost: "Free",
      featured: false,
      virtual: false,
      requirements: ["Bring relevant legal documents", "Photo ID required"]
    },
    {
      id: 6,
      title: "Family Fun Day",
      description: "A day of games, food, and activities for fathers and their children to enjoy together.",
      date: "2025-01-28",
      time: "11:00 AM - 4:00 PM",
      location: "Community Recreation Center",
      address: "456 Central Ave, Newark NJ",
      type: "social",
      capacity: 100,
      registered: 45,
      facilitator: "DADS Volunteer Team",
      cost: "Free",
      featured: true,
      virtual: false,
      requirements: ["Children must be accompanied by parent", "Lunch provided"]
    }
  ];

  const filteredEvents = upcomingEvents.filter(event => 
    filter === 'all' || event.type === filter
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'workshop': return BookOpen;
      case 'support': return Heart;
      case 'training': return UserCheck;
      case 'social': return Coffee;
      default: return Calendar;
    }
  };

  const getEventColor = (type) => {
    switch (type) {
      case 'workshop': return 'from-blue-500 to-blue-600';
      case 'support': return 'from-pink-500 to-pink-600';
      case 'training': return 'from-purple-500 to-purple-600';
      case 'social': return 'from-yellow-500 to-yellow-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
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
            Upcoming <span className="text-green-600">Events</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join us for workshops, support groups, and community events designed to support your journey as a father.
          </p>
        </motion.div>

        {/* Event Filters */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-slate-500" />
              <span className="font-medium text-slate-700">Filter by type:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setFilter(type.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                    filter === type.id
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <type.icon className="w-4 h-4" />
                  <span>{type.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Events */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Featured Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.filter(event => event.featured).map((event, index) => {
              const EventIcon = getEventIcon(event.type);
              return (
                <motion.div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  </div>
                  
                  <div className={`h-2 bg-gradient-to-r ${getEventColor(event.type)}`}></div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getEventColor(event.type)} rounded-xl flex items-center justify-center`}>
                        <EventIcon className="w-6 h-6 text-white" />
                      </div>
                      {event.virtual && (
                        <div className="flex items-center space-x-1 text-purple-600 text-sm">
                          <Video className="w-4 h-4" />
                          <span>Virtual</span>
                        </div>
                      )}
                    </div>
                    
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                      {event.title}
                    </h4>
                    
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <Calendar className="w-4 h-4 text-green-500" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <Clock className="w-4 h-4 text-green-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <MapPin className="w-4 h-4 text-green-500" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <Users className="w-4 h-4 text-green-500" />
                        <span>{event.registered}/{event.capacity} registered</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-green-600">{event.cost}</span>
                      <motion.button
                        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Register</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* All Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">All Upcoming Events</h3>
          <div className="space-y-4">
            {filteredEvents.map((event, index) => {
              const EventIcon = getEventIcon(event.type);
              return (
                <motion.div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      {/* Event Icon and Date */}
                      <div className="flex items-center space-x-4 lg:min-w-0 lg:w-48">
                        <div className={`w-12 h-12 bg-gradient-to-r ${getEventColor(event.type)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <EventIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-slate-800">
                            {formatDate(event.date).split(',')[0]}
                          </div>
                          <div className="text-xs text-slate-600">
                            {formatDate(event.date).split(',').slice(1).join(',')}
                          </div>
                        </div>
                      </div>
                      
                      {/* Event Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-semibold text-slate-800">{event.title}</h4>
                          {event.virtual && (
                            <div className="flex items-center space-x-1 text-purple-600 text-sm ml-4">
                              <Video className="w-4 h-4" />
                              <span>Virtual</span>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs text-slate-600">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span className="truncate">{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>{event.registered}/{event.capacity} spots</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Registration */}
                      <div className="flex flex-col items-end space-y-2 lg:min-w-0 lg:w-32">
                        <span className="text-lg font-bold text-green-600">{event.cost}</span>
                        <motion.button
                          className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-all duration-300 whitespace-nowrap"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Register Now
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Event Registration CTA */}
        <motion.div
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 lg:p-12 text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See What You're Looking For?
          </h3>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            We're always adding new events and programs. Contact us to suggest an event or get notified about upcoming opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-4 h-4" />
              <span>Suggest an Event</span>
            </motion.button>
            <motion.button
              className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-4 h-4" />
              <span>Join Our Calendar</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;