import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = "5541999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de saber mais sobre os serviços da ENG MEDICAL.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center gap-2 px-4 py-3 transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <MessageCircle size={24} />
      <span className="font-semibold">WhatsApp</span>
    </motion.button>
  );
};

export default WhatsAppButton;