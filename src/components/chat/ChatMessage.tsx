import React from 'react';
import { motion } from 'framer-motion';
import { User, Bot } from 'lucide-react';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot' | 'system';
  timestamp: Date;
  avatar?: string;
  username?: string;
}

interface ChatMessageProps {
  message: Message;
  isOwn: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isOwn }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (message.sender === 'system') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center my-4"
      >
        <div className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-full text-sm">
          {message.text}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 30,
        opacity: { duration: 0.2 }
      }}
      className={`flex items-end space-x-2 mb-4 ${isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        {message.avatar ? (
          <img
            src={message.avatar}
            alt={message.username || 'User'}
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            message.sender === 'bot' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
          }`}>
            {message.sender === 'bot' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
          </div>
        )}
      </div>

      {/* Message bubble */}
      <div className={`max-w-xs lg:max-w-md ${isOwn ? 'items-end' : 'items-start'} flex flex-col`}>
        {!isOwn && message.username && (
          <span className="text-xs text-gray-500 dark:text-gray-400 mb-1 px-3">
            {message.username}
          </span>
        )}
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`relative px-4 py-2 rounded-2xl shadow-sm ${
            isOwn
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-md'
              : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 rounded-bl-md'
          }`}
        >
          <p className="text-sm leading-relaxed break-words">{message.text}</p>
          
          {/* Timestamp */}
          <div className={`text-xs mt-1 ${
            isOwn ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
          }`}>
            {formatTime(message.timestamp)}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};