import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, Users, Zap, Shield } from 'lucide-react';
import { ChatRoom } from '../chat/ChatRoom';
import { useState } from 'react';

export const Chat = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showChat, setShowChat] = useState(false);

  const features = [
    {
      icon: MessageCircle,
      title: 'Real-time Messaging',
      description: 'Instant message delivery with WebSocket connections'
    },
    {
      icon: Users,
      title: 'User Presence',
      description: 'See who\'s online, away, or offline in real-time'
    },
    {
      icon: Zap,
      title: 'Lottie Animations',
      description: 'Beautiful 3D animations for notifications and interactions'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'End-to-end encryption and reliable message delivery'
    }
  ];

  if (showChat) {
    return (
      <section id="chat" className="min-h-screen">
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={() => setShowChat(false)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Portfolio
          </button>
        </div>
        <ChatRoom />
      </section>
    );
  }

  return (
    <section id="chat" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Real-time <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Chat</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience our advanced chat application with smooth Lottie animations, 
            toast notifications, and real-time messaging capabilities.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200/20 dark:border-blue-700/20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Try the Live Demo
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Experience the full chat application with Lottie animations, toast notifications, 
            and real-time messaging. See how smooth animations enhance user experience.
          </p>
          
          <motion.button
            onClick={() => setShowChat(true)}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-purple-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Launch Chat Demo
          </motion.button>
        </motion.div>

        {/* Technical Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Animation Features
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>• Message sent confirmation animations</li>
              <li>• New message arrival notifications</li>
              <li>• User status change indicators</li>
              <li>• Error and success toast animations</li>
              <li>• Smooth fade-out transitions</li>
              <li>• Performance optimized rendering</li>
            </ul>
          </div>

          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Toast Notifications
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>• Auto-dismiss after 3 seconds</li>
              <li>• Manual dismissal with click</li>
              <li>• Progress bar indicators</li>
              <li>• Multiple position support</li>
              <li>• Accessible with ARIA attributes</li>
              <li>• Customizable duration and styling</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};