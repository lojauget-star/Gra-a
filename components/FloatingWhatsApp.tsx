
import React from 'react';
import { WhatsAppIcon } from './Icons';

const FloatingWhatsApp: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/5512978129642?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Dra.%20Graciana.";
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out z-40"
      aria-label="Fale com a Dra. Graciana no WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsApp;