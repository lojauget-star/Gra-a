
import React from 'react';
import { ArrowRightIcon } from './Icons';
import { gracianaAboutImage } from './Image';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-2/5 flex justify-center">
            <img
              src={gracianaAboutImage}
              alt="Retrato da Dra. Graciana de França"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-3/5 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
              Sobre a Dra. Graciana de França
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Sou a Dra. Graciana de França, Bacharel em Direito, dedicada a transformar burocracia em soluções. Atendo com empatia, linguagem simples e foco em resultados, para que você tenha tranquilidade e seus direitos garantidos.
            </p>
            <div className="text-gray-500 mb-6">
              <p><strong>Formação:</strong> Direito no UNISAL | Centro Universitário Salesiano de São Paulo</p>
            </div>
            <a href="#servicos" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800 transition-colors">
              Conheça meu jeito de atuar
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
