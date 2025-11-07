
import React from 'react';

const Footer: React.FC = () => {
    const WHATSAPP_LINK = "https://wa.me/5512978129642?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Dra.%20Graciana.";
  return (
    <footer className="bg-teal-800 text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <p className="font-semibold">Graciana de França | Bacharel em Direito</p>
        <div className="flex justify-center space-x-6 mt-4 text-sm text-teal-100">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
          <a href="#" className="hover:text-white">Política de Privacidade</a>
        </div>
        <p className="text-sm text-teal-200 mt-6">
          &copy; {new Date().getFullYear()} Graciana de França. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;