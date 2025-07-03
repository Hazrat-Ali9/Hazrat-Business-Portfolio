import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, MessageCircle, Zap, Shield, Smartphone, Brain } from 'lucide-react';
import { ChatbotInterface } from '../chatbot/ChatbotInterface';

export const ChatbotDemo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showChatbot, setShowChatbot] = useState(false);

  const features = [
    {
      icon: MessageCircle,
      title: 'Natural Conversations',
      description: 'Engage in human-like conversations with advanced AI'
    },
    {
      icon: Zap,
      title: 'Instant Responses',
      description: 'Get immediate answers with lightning-fast processing'
    },
    {
      icon: Brain,
      title: 'Smart Suggestions',
      description: 'Receive intelligent quick replies and suggestions'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Perfect experience across all devices and screen sizes'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your conversations are protected with enterprise-grade security'
    },
    {
      icon: Bot,
      title: 'Always Available',
      description: '24/7 assistance whenever you need help or support'
    }
  ];

  return (
    <section id="chatbot-demo" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            AI-Powered <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Chatbot</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of customer interaction with our intelligent chatbot featuring 
            natural language processing, smart suggestions, and seamless user experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200/20 dark:border-blue-700/20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Try the Interactive Demo
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Experience our chatbot's capabilities firsthand. Test natural language processing, 
            quick replies, file uploads, and voice messaging in a realistic conversation flow.
          </p>
          
          <motion.button
            onClick={() => setShowChatbot(true)}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-purple-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Launch Chatbot Demo
          </motion.button>
        </motion.div>

        {/* Technical Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              🎨 Design Features
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>• Modern messenger-style interface</li>
              <li>• Smooth animations and micro-interactions</li>
              <li>• Responsive design for all devices</li>
              <li>• Dark/light mode support</li>
              <li>• Accessibility-first approach</li>
              <li>• Customizable themes and branding</li>
            </ul>
          </div>

          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              ⚡ Technical Capabilities
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>• Real-time message delivery</li>
              <li>• File and media upload support</li>
              <li>• Voice message recording</li>
              <li>• Quick reply buttons</li>
              <li>• Smart response suggestions</li>
              <li>• Typing indicators and read receipts</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Chatbot Interface */}
      {showChatbot && <ChatbotInterface />}
    </section>
  );
};