'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const greeting = "🙏 Welcome to Al Mahata Al Wahedah Auto Maintenance. How may I help you today?";

  return (
    <motion.a
      href={`https://wa.me/971556132145?text=${encodeURIComponent(greeting)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 end-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      {/* Ping */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      {/* Tooltip */}
      <span className="absolute bottom-full end-0 mb-2 px-3 py-1.5 bg-card border border-border rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Chat on WhatsApp
        <span className="absolute top-full end-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border" />
      </span>
    </motion.a>
  );
}