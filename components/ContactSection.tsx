
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const whatsappNumber = "5512978129642";
    const text = `Olá! Meu nome é ${name} (e-mail: ${email}).\n\nMinha mensagem é:\n${message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800">Entre em Contato</h2>
          <p className="text-lg text-gray-600 mt-2">Conte comigo para resolver o que você precisa, sem complicação.</p>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="bg-stone-50 p-8 md:p-12 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Seu nome</label>
                        <input 
                            type="text" 
                            id="name" 
                            className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500" 
                            placeholder="Como podemos te chamar?" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Seu e-mail</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500" 
                            placeholder="seu.email@exemplo.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Sua mensagem</label>
                        <textarea 
                            id="message" 
                            rows={6} 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-teal-500 focus:border-teal-500" 
                            placeholder="Descreva brevemente sua necessidade..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-600 shadow-md hover:bg-teal-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out focus:ring-4 focus:outline-none focus:ring-teal-300">Enviar Mensagem</button>
                </form>
                 <div className="mt-8 text-center text-gray-600">
                    <p>Você também pode me encontrar em:</p>
                    <div className="flex justify-center items-center space-x-6 mt-4">
                        <a href="mailto:contato@gracianafranca.adv.br" className="hover:text-teal-600">contato@gracianafranca.adv.br</a>
                        <span>|</span>
                        <a href="#" className="hover:text-teal-600">LinkedIn</a>
                        <span>|</span>
                         <a href="https://www.instagram.com/motagraciana/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
