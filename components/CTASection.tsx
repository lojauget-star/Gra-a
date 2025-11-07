
import React from 'react';

const CTASection: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/5512978129642?text=Olá!%20Gostaria%20de%20agendar%20um%20atendimento.";
  return (
    <section className="bg-teal-700 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tenha orientação confiável e acessível.
        </h2>
        <p className="text-xl text-teal-100 mb-8">
          A justiça começa com um bom atendimento.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-teal-700 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-stone-100 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Agendar Atendimento
        </a>
      </div>
    </section>
  );
};

export default CTASection;
