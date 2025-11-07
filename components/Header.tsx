
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, WhatsAppIcon } from './Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const WHATSAPP_LINK = "https://wa.me/5512978129642?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Dra.%20Graciana.";

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="text-xl font-bold text-teal-800 hover:text-teal-600 transition-colors">
          Graciana de França
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-600 hover:text-teal-600 transition-colors">{link.label}</a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-teal-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-teal-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
          >
            <WhatsAppIcon className="w-5 h-5 mr-2" />
            Fale com a Dra. Graciana
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-teal-800">
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="bg-white shadow-lg px-6 pb-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-teal-600 transition-colors py-2">{link.label}</a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors"
          >
            Fale com a Dra. Graciana
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;