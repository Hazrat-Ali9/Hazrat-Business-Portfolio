import React from 'react';
import { motion } from 'framer-motion';
import { User, Circle } from 'lucide-react';

export interface ChatUser {
  id: string;
  name: string;
  avatar?: string;
  status: 'online' | 'offline' | 'away';
  lastSeen?: Date;
}

interface UserListProps {
  users: ChatUser[];
  currentUserId?: string;
  onUserSelect?: (user: ChatUser) => void;
}

export const UserList: React.FC<UserListProps> = ({ users, currentUserId, onUserSelect }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'text-green-500';
      case 'away':
        return 'text-yellow-500';
      case 'offline':
        return 'text-gray-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusText = (user: ChatUser) => {
    if (user.status === 'online') return 'Online';
    if (user.status === 'away') return 'Away';
    if (user.lastSeen) {
      const now = new Date();
      const diff = now.getTime() - user.lastSeen.getTime();
      const minutes = Math.floor(diff / 60000);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      
      if (days > 0) return `${days}d ago`;
      if (hours > 0) return `${hours}h ago`;
      if (minutes > 0) return `${minutes}m ago`;
      return 'Just now';
    }
    return 'Offline';
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 w-80 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Users ({users.length})
        </h2>
      </div>

      {/* User list */}
      <div className="flex-1 overflow-y-auto">
        {users.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => onUserSelect?.(user)}
            className={`p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer ${
              user.id === currentUserId ? 'bg-blue-50 dark:bg-blue-900/20' : ''
            }`}
          >
            <div className="flex items-center space-x-3">
              {/* Avatar */}
              <div className="relative">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </div>
                )}
                
                {/* Status indicator */}
                <div className="absolute -bottom-1 -right-1">
                  <Circle className={`w-4 h-4 ${getStatusColor(user.status)} fill-current`} />
                </div>
              </div>

              {/* User info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {user.name}
                  {user.id === currentUserId && (
                    <span className="text-xs text-gray-500 ml-1">(You)</span>
                  )}
                </h3>
                <p className={`text-xs ${getStatusColor(user.status)} truncate`}>
                  {getStatusText(user)}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};