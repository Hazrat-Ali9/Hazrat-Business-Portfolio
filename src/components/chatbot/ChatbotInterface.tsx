import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatbotMessage, ChatbotMessageData } from './ChatbotMessage';
import { ChatbotInput } from './ChatbotInput';
import { TypingIndicator } from './TypingIndicator';
import { Bot, Minimize2, Maximize2, X, RotateCcw } from 'lucide-react';
// Chatbot interface
export const ChatbotInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatbotMessageData[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample bot responses with quick replies and suggestions
  const botResponses = [
    {
      text: "Hello! I'm your AI assistant. How can I help you today?",
      quickReplies: ["Get started", "Learn more", "Contact support"],
      suggestions: ["What can you do?", "Show me features", "Help with account"]
    },
    {
      text: "I can help you with various tasks including answering questions, providing information, and assisting with your needs.",
      quickReplies: ["Ask a question", "Browse features", "Get help"],
      suggestions: ["How does this work?", "What are your capabilities?", "Show examples"]
    },
    {
      text: "Great question! I'm designed to provide helpful, accurate, and timely responses to assist you with your inquiries.",
      quickReplies: ["That's helpful", "Tell me more", "What else?"],
      suggestions: ["Can you help with technical issues?", "Do you support multiple languages?"]
    }
  ];

  useEffect(() => {
    // Initial welcome message
    const welcomeMessage: ChatbotMessageData = {
      id: 'welcome',
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
      status: 'read',
      quickReplies: ["Get started", "Learn more", "Contact support"],
      suggestions: ["What can you do?", "Show me features", "Help with account"]
    };
    
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    const userMessage: ChatbotMessageData = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
      status: 'sending'
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate message status updates
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === userMessage.id ? { ...msg, status: 'sent' } : msg
      ));
    }, 500);

    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === userMessage.id ? { ...msg, status: 'delivered' } : msg
      ));
    }, 1000);

    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === userMessage.id ? { ...msg, status: 'read' } : msg
      ));
    }, 1500);

    // Simulate bot typing and response
    setTimeout(() => {
      setIsTyping(true);
    }, 2000);

    setTimeout(() => {
      setIsTyping(false);
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage: ChatbotMessageData = {
        id: (Date.now() + 1).toString(),
        text: randomResponse.text,
        sender: 'bot',
        timestamp: new Date(),
        status: 'read',
        quickReplies: randomResponse.quickReplies,
        suggestions: randomResponse.suggestions
      };
      setMessages(prev => [...prev, botMessage]);
    }, 4000);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const handleFileUpload = (file: File) => {
    const fileMessage: ChatbotMessageData = {
      id: Date.now().toString(),
      text: `📎 Uploaded: ${file.name}`,
      sender: 'user',
      timestamp: new Date(),
      status: 'sent'
    };
    setMessages(prev => [...prev, fileMessage]);
  };

  const clearChat = () => {
    setMessages([]);
    setTimeout(() => {
      const welcomeMessage: ChatbotMessageData = {
        id: 'welcome-new',
        text: "Chat cleared! How can I help you today?",
        sender: 'bot',
        timestamp: new Date(),
        status: 'read',
        quickReplies: ["Get started", "Learn more", "Contact support"]
      };
      setMessages([welcomeMessage]);
    }, 500);
  };

  if (isMinimized) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <motion.button
          onClick={() => setIsMinimized(false)}
          className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Bot className="w-5 h-5" />
          <span className="font-medium">AI Assistant</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 right-4 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden z-50"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold">AI Assistant</h3>
            <div className="flex items-center space-x-2 text-sm opacity-90">
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'}`} />
              <span>{isConnected ? 'Online' : 'Offline'}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <motion.button
            onClick={clearChat}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Clear chat"
          >
            <RotateCcw className="w-4 h-4" />
          </motion.button>
          <motion.button
            onClick={() => setIsMinimized(true)}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Minimize"
          >
            <Minimize2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
        <AnimatePresence mode="popLayout">
          {messages.map((message) => (
            <ChatbotMessage
              key={message.id}
              message={message}
              onQuickReply={handleQuickReply}
              onSuggestionClick={handleSuggestionClick}
            />
          ))}
        </AnimatePresence>
        
        <AnimatePresence>
          {isTyping && <TypingIndicator />}
        </AnimatePresence>
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <ChatbotInput
        onSendMessage={handleSendMessage}
        onFileUpload={handleFileUpload}
        disabled={!isConnected}
        placeholder={isConnected ? "Type your message..." : "Reconnecting..."}
      />
    </motion.div>
  );
};