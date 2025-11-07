import React from 'react';
import { WhatsAppIcon } from './Icons';
import { gracianaHeroImage } from './Image';

const HeroSection: React.FC = () => {
    const WHATSAPP_LINK = "https://wa.me/5512978129642?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Dra.%20Graciana.";

  return (
    <section id="inicio" className="relative bg-stone-50 pt-24 md:pt-32 pb-16 md:pb-24">
       <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')"}}></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4 leading-tight">
              Soluções jurídicas acessíveis, com empatia e eficiência.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Atendimento humanizado para quem precisa resolver questões legais, benefícios sociais e cálculos trabalhistas.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-teal-700 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              <WhatsAppIcon className="w-6 h-6 mr-3" />
              Fale Agora pelo WhatsApp
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-stone-200 rounded-full transform -translate-x-4 -translate-y-4"></div>
                <img
                    src={gracianaHeroImage}
                    alt="Dra. Graciana de França"
                    className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;