import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Palette, 
  Database, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Full-stack web applications with modern technologies',
    features: ['React/Next.js', 'Node.js/Express', 'TypeScript', 'API Development'],
    color: 'from-blue-500 to-cyan-500',
    popular: true
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications',
    features: ['React Native', 'Flutter', 'iOS/Android', 'App Store Deployment'],
    color: 'from-green-500 to-teal-500',
    popular: false
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment',
    features: ['AWS/Azure', 'Docker/Kubernetes', 'CI/CD Pipelines', 'Monitoring'],
    color: 'from-purple-500 to-pink-500',
    popular: false
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces',
    features: ['Figma/Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
    color: 'from-orange-500 to-red-500',
    popular: false
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Efficient database architecture and optimization',
    features: ['PostgreSQL/MongoDB', 'Database Modeling', 'Query Optimization', 'Data Migration'],
    color: 'from-indigo-500 to-purple-500',
    popular: false
  },
  {
    icon: Shield,
    title: 'Security & Performance',
    description: 'Secure and high-performance applications',
    features: ['Security Audits', 'Performance Optimization', 'SSL Implementation', 'Load Testing'],
    color: 'from-teal-500 to-blue-500',
    popular: false
  },
];

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions to bring your digital vision to life with cutting-edge technology 
            and best practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300 overflow-hidden">
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="group/btn w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-purple-600 hover:to-teal-600 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Hover effect background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200/20 dark:border-blue-700/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with the perfect combination 
              of technology and creativity.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-purple-600 hover:to-teal-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};