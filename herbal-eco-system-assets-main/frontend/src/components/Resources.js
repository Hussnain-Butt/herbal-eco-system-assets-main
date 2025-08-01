import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  FileText, 
  BookOpen, 
  Video, 
  Headphones,
  ExternalLink,
  Search,
  Filter,
  Star,
  Users,
  Clock,
  Bookmark
} from 'lucide-react';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', icon: BookOpen },
    { id: 'parenting', name: 'Parenting Guides', icon: Users },
    { id: 'legal', name: 'Legal Resources', icon: FileText },
    { id: 'employment', name: 'Employment', icon: Bookmark },
    { id: 'wellness', name: 'Mental Health', icon: Star },
    { id: 'family', name: 'Family Support', icon: Users }
  ];

  const resources = [
    {
      title: "Father-Child Bonding Activities",
      description: "Age-appropriate activities to strengthen the relationship between fathers and their children during visits and after reunification.",
      type: "PDF Guide",
      category: "parenting",
      downloadSize: "2.3 MB",
      downloads: 1247,
      rating: 4.9,
      icon: FileText,
      featured: true
    },
    {
      title: "Understanding Child Development Stages",
      description: "Comprehensive guide covering child development from infancy through adolescence, with practical parenting tips for each stage.",
      type: "Interactive Guide",
      category: "parenting",
      downloadSize: "4.1 MB",
      downloads: 892,
      rating: 4.8,
      icon: BookOpen,
      featured: true
    },
    {
      title: "Legal Rights for Formerly Incarcerated Fathers",
      description: "Know your rights regarding visitation, custody, and child support. Includes template letters and legal resources.",
      type: "Legal Handbook",
      category: "legal",
      downloadSize: "3.2 MB",
      downloads: 756,
      rating: 4.7,
      icon: FileText,
      featured: false
    },
    {
      title: "Job Interview Success for Returning Citizens",
      description: "Strategies for addressing criminal history in job interviews, resume templates, and employer outreach tips.",
      type: "Career Guide",
      category: "employment",
      downloadSize: "1.8 MB",
      downloads: 634,
      rating: 4.6,
      icon: Bookmark,
      featured: false
    },
    {
      title: "Managing Stress and Anxiety",
      description: "Mental health resources and coping strategies for fathers dealing with reintegration challenges.",
      type: "Wellness Guide",
      category: "wellness",
      downloadSize: "2.1 MB",
      downloads: 543,
      rating: 4.8,
      icon: Star,
      featured: false
    },
    {
      title: "Effective Co-Parenting Communication",
      description: "Scripts, templates, and strategies for healthy communication with your child's mother or caregiver.",
      type: "Communication Guide",
      category: "family",
      downloadSize: "1.9 MB",
      downloads: 721,
      rating: 4.7,
      icon: Users,
      featured: false
    },
    {
      title: "Building Trust with Your Children",
      description: "Step-by-step guide for rebuilding relationships and trust with children after incarceration.",
      type: "Relationship Guide",
      category: "parenting",
      downloadSize: "2.7 MB",
      downloads: 923,
      rating: 4.9,
      icon: Users,
      featured: true
    },
    {
      title: "Financial Planning for Families",
      description: "Budgeting, saving, and financial responsibility resources for supporting your family.",
      type: "Financial Guide",
      category: "employment",
      downloadSize: "2.4 MB",
      downloads: 456,
      rating: 4.5,
      icon: Bookmark,
      featured: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
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
            Resource <span className="text-green-600">Library</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Free downloadable guides, templates, and resources to support your journey as a father and help you build stronger family relationships.
          </p>
        </motion.div>

        {/* Featured Resources */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Featured Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 relative overflow-hidden"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Featured
                  </span>
                </div>
                
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-lg font-semibold text-slate-800 mb-2 pr-16">
                  {resource.title}
                </h4>
                
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <span>{resource.type}</span>
                  <span>{resource.downloadSize}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-slate-700">{resource.rating}</span>
                  </div>
                  <span className="text-sm text-slate-500">{resource.downloads} downloads</span>
                </div>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4" />
                  <span>Download Free</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="w-5 h-5 text-slate-500" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeCategory === category.id
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* All Resources Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {filteredResources.map((resource, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              whileHover={{ y: -3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mb-4">
                <resource.icon className="w-6 h-6 text-white" />
              </div>
              
              <h4 className="text-lg font-semibold text-slate-800 mb-2">
                {resource.title}
              </h4>
              
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {resource.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                <span>{resource.type}</span>
                <span>{resource.downloadSize}</span>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-slate-700">{resource.rating}</span>
                </div>
                <span className="text-sm text-slate-500">{resource.downloads} downloads</span>
              </div>
              
              <motion.button
                className="w-full bg-slate-100 text-slate-700 py-2 px-4 rounded-full font-medium hover:bg-slate-200 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 lg:p-12 text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with New Resources
          </h3>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Get notified when we add new guides, resources, and tools to help you on your journey as a father.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <motion.button
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;