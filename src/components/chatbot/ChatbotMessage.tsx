import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User, Check, CheckCheck, Clock } from 'lucide-react';

export interface ChatbotMessageData {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  status?: 'sending' | 'sent' | 'delivered' | 'read';
  quickReplies?: string[];
  suggestions?: string[];
}

interface ChatbotMessageProps {
  message: ChatbotMessageData;
  onQuickReply?: (reply: string) => void;
  onSuggestionClick?: (suggestion: string) => void;
}

export const ChatbotMessage: React.FC<ChatbotMessageProps> = ({
  message,
  onQuickReply,
  onSuggestionClick
}) => {
  const isBot = message.sender === 'bot';
  const isUser = message.sender === 'user';

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusIcon = () => {
    switch (message.status) {
      case 'sending':
        return <Clock className="w-3 h-3 text-gray-400" />;
      case 'sent':
        return <Check className="w-3 h-3 text-gray-400" />;
      case 'delivered':
        return <CheckCheck className="w-3 h-3 text-gray-400" />;
      case 'read':
        return <CheckCheck className="w-3 h-3 text-blue-500" />;
      default:
        return null;
    }
  };

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
      className={`flex items-end space-x-2 mb-4 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isBot 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
            : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
        }`}>
          {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
        </div>
      </div>

      {/* Message Content */}
      <div className={`max-w-xs lg:max-w-md ${isUser ? 'items-end' : 'items-start'} flex flex-col`}>
        {/* Message Bubble */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`relative px-4 py-3 rounded-2xl shadow-sm ${
            isUser
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-md'
              : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 rounded-bl-md'
          }`}
        >
          {/* Bot indicator */}
          {isBot && (
            <div className="flex items-center space-x-2 mb-2 text-xs text-gray-500 dark:text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>AI Assistant</span>
            </div>
          )}
          
          <p className="text-sm leading-relaxed break-words">{message.text}</p>
          
          {/* Timestamp and Status */}
          <div className={`flex items-center space-x-1 mt-2 ${
            isUser ? 'justify-end text-blue-100' : 'justify-start text-gray-500 dark:text-gray-400'
          }`}>
            <span className="text-xs">{formatTime(message.timestamp)}</span>
            {isUser && getStatusIcon()}
          </div>
        </motion.div>

        {/* Quick Replies */}
        {isBot && message.quickReplies && message.quickReplies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 mt-3"
          >
            {message.quickReplies.map((reply, index) => (
              <motion.button
                key={index}
                onClick={() => onQuickReply?.(reply)}
                className="px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors border border-blue-200 dark:border-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {reply}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Suggestions */}
        {isBot && message.suggestions && message.suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-3"
          >
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggested responses:</p>
            <div className="flex flex-wrap gap-2">
              {message.suggestions.map((suggestion, index) => (
                <motion.button
                  key={index}
                  onClick={() => onSuggestionClick?.(suggestion)}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {suggestion}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};