import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChatMessage, Message } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { UserList, ChatUser } from './UserList';
import { useToast } from '../../hooks/useToast';
import { ToastContainer } from './ToastContainer';
import { Settings, Users, MessageCircle } from 'lucide-react';

export const ChatRoom: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<ChatUser[]>([]);
  const [currentUser] = useState<ChatUser>({
    id: 'user-1',
    name: 'You',
    status: 'online',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  });
  const [showUserList, setShowUserList] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toasts, success, info, warning, error } = useToast();

  // Simulate connection and initial data
  useEffect(() => {
    // Simulate connecting to chat
    setTimeout(() => {
      setIsConnected(true);
      success('Connected', 'Successfully connected to chat room');
      
      // Add initial users
      setUsers([
        currentUser,
        {
          id: 'user-2',
          name: 'Alice Johnson',
          status: 'online',
          avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
        },
        {
          id: 'user-3',
          name: 'Bob Smith',
          status: 'away',
          avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
        },
        {
          id: 'user-4',
          name: 'Carol Davis',
          status: 'offline',
          lastSeen: new Date(Date.now() - 300000), // 5 minutes ago
        }
      ]);

      // Add welcome message
      setMessages([
        {
          id: 'welcome',
          text: 'Welcome to the chat room! 👋',
          sender: 'system',
          timestamp: new Date()
        }
      ]);
    }, 1000);

    // Simulate user status changes
    const statusInterval = setInterval(() => {
      setUsers(prev => prev.map(user => {
        if (user.id !== currentUser.id && Math.random() > 0.8) {
          const statuses: ChatUser['status'][] = ['online', 'away', 'offline'];
          const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
          
          if (newStatus !== user.status) {
            if (newStatus === 'online') {
              info('User Online', `${user.name} is now online`);
            } else if (newStatus === 'offline') {
              warning('User Offline', `${user.name} went offline`);
            }
          }
          
          return { ...user, status: newStatus };
        }
        return user;
      }));
    }, 10000);

    // Simulate incoming messages
    const messageInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const senders = users.filter(u => u.id !== currentUser.id && u.status === 'online');
        if (senders.length > 0) {
          const sender = senders[Math.floor(Math.random() * senders.length)];
          const sampleMessages = [
            "Hey everyone! How's it going?",
            "Just finished a great project 🎉",
            "Anyone working on something interesting?",
            "The weather is amazing today!",
            "Check out this cool article I found",
            "Coffee break time ☕",
            "Happy to be here with you all!"
          ];
          
          const newMessage: Message = {
            id: Date.now().toString(),
            text: sampleMessages[Math.floor(Math.random() * sampleMessages.length)],
            sender: 'user',
            timestamp: new Date(),
            username: sender.name,
            avatar: sender.avatar
          };
          
          setMessages(prev => [...prev, newMessage]);
          info('New Message', `${sender.name} sent a message`);
        }
      }
    }, 15000);

    return () => {
      clearInterval(statusInterval);
      clearInterval(messageInterval);
    };
  }, [currentUser, users, success, info, warning]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!isConnected) {
      error('Connection Error', 'Not connected to chat room');
      return;
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
      username: currentUser.name,
      avatar: currentUser.avatar
    };

    setMessages(prev => [...prev, newMessage]);
    success('Message Sent', 'Your message was delivered successfully');

    // Simulate bot response occasionally
    if (Math.random() > 0.7) {
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "Thanks for your message! I'm a bot assistant here to help.",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        info('Bot Response', 'Assistant replied to your message');
      }, 1000);
    }
  };

  const handleUserSelect = (user: ChatUser) => {
    info('User Selected', `Selected ${user.name} for private chat`);
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* User List Sidebar */}
      {showUserList && (
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <UserList
            users={users}
            currentUserId={currentUser.id}
            onUserSelect={handleUserSelect}
          />
        </motion.div>
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowUserList(!showUserList)}
                className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Users className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-6 h-6 text-blue-500" />
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Chat Room
                </h1>
                <div className={`w-2 h-2 rounded-full ${
                  isConnected ? 'bg-green-500' : 'bg-red-500'
                }`} />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {users.filter(u => u.status === 'online').length} online
              </span>
              <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              isOwn={message.sender === 'user' && message.username === currentUser.name}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <ChatInput
          onSendMessage={handleSendMessage}
          disabled={!isConnected}
          placeholder={isConnected ? "Type a message..." : "Connecting..."}
        />
      </div>

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={() => {}} />
    </div>
  );
};