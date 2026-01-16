import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const WhatsAppButton = () => {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Integração WhatsApp",
      description: "🚧 Este recurso ainda não está implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <MessageCircle className="text-white" size={28} />
      <motion.div
        className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20"
        initial={false}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default WhatsAppButton;