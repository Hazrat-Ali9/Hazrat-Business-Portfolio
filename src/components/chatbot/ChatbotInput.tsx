import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Paperclip, 
  Smile, 
  Mic, 
  MicOff, 
  Image, 
  FileText,
  Camera
} from 'lucide-react';

interface ChatbotInputProps {
  onSendMessage: (message: string) => void;
  onFileUpload?: (file: File) => void;
  onVoiceMessage?: (audioBlob: Blob) => void;
  disabled?: boolean;
  placeholder?: string;
}

export const ChatbotInput: React.FC<ChatbotInputProps> = ({
  onSendMessage,
  onFileUpload,
  onVoiceMessage,
  disabled = false,
  placeholder = "Type your message..."
}) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [showAttachments, setShowAttachments] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const emojis = ['😊', '😂', '❤️', '👍', '👎', '😢', '😮', '😡', '🎉', '🔥', '💯', '✨'];

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onFileUpload) {
      onFileUpload(file);
    }
    setShowAttachments(false);
  };

  const handleEmojiSelect = (emoji: string) => {
    setMessage(prev => prev + emoji);
    setShowEmojis(false);
    textareaRef.current?.focus();
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Voice recording logic would go here
  };

  const attachmentOptions = [
    { icon: Image, label: 'Photo', accept: 'image/*' },
    { icon: FileText, label: 'Document', accept: '.pdf,.doc,.docx,.txt' },
    { icon: Camera, label: 'Camera', accept: 'image/*' },
  ];

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
      {/* Emoji Picker */}
      <AnimatePresence>
        {showEmojis && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600"
          >
            <div className="grid grid-cols-6 gap-2">
              {emojis.map((emoji, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleEmojiSelect(emoji)}
                  className="p-2 text-xl hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {emoji}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Attachment Options */}
      <AnimatePresence>
        {showAttachments && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600"
          >
            <div className="grid grid-cols-3 gap-3">
              {attachmentOptions.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => fileInputRef.current?.click()}
                  className="flex flex-col items-center space-y-2 p-3 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <option.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300">{option.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Input Area */}
      <form onSubmit={handleSubmit} className="flex items-end space-x-3">
        {/* Attachment Button */}
        <motion.button
          type="button"
          onClick={() => setShowAttachments(!showAttachments)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`flex-shrink-0 p-2 rounded-full transition-colors ${
            showAttachments 
              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
              : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
          aria-label="Attach file"
        >
          <Paperclip className="w-5 h-5" />
        </motion.button>

        {/* Message Input Container */}
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            disabled={disabled}
            rows={1}
            className="w-full px-4 py-3 pr-12 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            style={{ minHeight: '48px', maxHeight: '120px' }}
          />
          
          {/* Emoji Button */}
          <motion.button
            type="button"
            onClick={() => setShowEmojis(!showEmojis)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`absolute right-3 bottom-3 p-1 rounded-full transition-colors ${
              showEmojis 
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
            }`}
            aria-label="Add emoji"
          >
            <Smile className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Voice/Send Button */}
        {message.trim() ? (
          <motion.button
            type="submit"
            disabled={disabled}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <Send className="w-5 h-5" />
          </motion.button>
        ) : (
          <motion.button
            type="button"
            onClick={toggleRecording}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-shrink-0 p-3 rounded-full transition-all duration-200 ${
              isRecording
                ? 'bg-red-500 text-white shadow-lg animate-pulse'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            aria-label={isRecording ? "Stop recording" : "Start voice message"}
          >
            {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </motion.button>
        )}
      </form>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileSelect}
        className="hidden"
        accept="image/*,.pdf,.doc,.docx,.txt"
      />

      {/* Recording Indicator */}
      <AnimatePresence>
        {isRecording && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-3 flex items-center justify-center space-x-2 text-red-500"
          >
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Recording voice message...</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};