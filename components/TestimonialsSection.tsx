
import React from 'react';
import { QuoteIcon } from './Icons';

interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'A Dra. Graciana foi muito atenciosa e resolveu meu problema com o INSS rápido. Recomendo demais o trabalho dela!',
    author: 'Maria S.',
  },
  {
    quote: 'Fez o cálculo trabalhista com clareza e me explicou tudo, cada detalhe. Profissional excelente e muito paciente.',
    author: 'João P.',
  },
  {
    quote: 'Precisava de um contrato de aluguel seguro e ela me ajudou com tudo. Me senti muito mais seguro com o apoio dela.',
    author: 'Carlos R.',
  },
];

const TestimonialCard: React.FC<Testimonial> = ({ quote, author }) => (
  <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-lg md:border-r shadow-lg transform hover:scale-105 transition-transform duration-300">
    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-600 lg:mb-8">
      <QuoteIcon />
      <p className="my-4">"{quote}"</p>
    </blockquote>
    <figcaption className="flex items-center justify-center space-x-3">
      <div className="space-y-0.5 font-medium text-left">
        <div className="text-teal-800">{author}</div>
        <div className="text-sm text-gray-500">Cliente Satisfeito</div>
      </div>
    </figcaption>
  </figure>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800">O que meus clientes dizem</h2>
          <p className="text-lg text-gray-600 mt-2">Confiança e resultados que falam por si.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
