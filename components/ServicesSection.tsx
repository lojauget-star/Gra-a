
import React from 'react';
import { ServiceIcon1, ServiceIcon2, ServiceIcon3, ServiceIcon4, ServiceIcon5, ServiceIcon6, ServiceIcon7, ServiceIcon8 } from './Icons';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <ServiceIcon1 />,
    title: 'Cálculos Trabalhistas',
    description: 'Revisões, rescisões e horas extras detalhadas.',
  },
  {
    icon: <ServiceIcon2 />,
    title: 'Elaboração de Contratos',
    description: 'Contratos personalizados e juridicamente seguros.',
  },
  {
    icon: <ServiceIcon3 />,
    title: 'Auxílio BPC/LOAS',
    description: 'Acompanhamento completo para solicitação e defesa.',
  },
  {
    icon: <ServiceIcon4 />,
    title: 'Auxílio por Incapacidade',
    description: 'Orientação e requerimento junto ao INSS.',
  },
  {
    icon: <ServiceIcon5 />,
    title: 'Currículos e Documentos',
    description: 'Clareza, formatação e foco em oportunidades.',
  },
  {
    icon: <ServiceIcon6 />,
    title: 'Recuperação de Senhas',
    description: 'Apoio em sistemas governamentais (Gov.br, etc).',
  },
  {
    icon: <ServiceIcon7 />,
    title: 'Correspondência Jurídica',
    description: 'Suporte em protocolos e diligências.',
  },
  {
    icon: <ServiceIcon8 />,
    title: 'Consultoria Jurídica',
    description: 'Orientações preventivas e solução de dúvidas legais.',
  },
];

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out text-center flex flex-col items-center transform hover:-translate-y-2">
    {icon}
    <h3 className="text-xl font-semibold text-teal-800 mb-2">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800">Serviços Principais</h2>
          <p className="text-lg text-gray-600 mt-2">Soluções práticas para suas necessidades.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;