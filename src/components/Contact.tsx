import React, { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from './UI/Button';
import Card from './UI/Card';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    setStatus('loading');
    
    try {
      // Enviar email usando EmailJS
      const result = await emailjs.send(
        'service_ez3wgiv', // Service ID
        'template_3kn6b7g', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'jfATqsEVSWFyMD4Tz' // Public Key
      );
      
      console.log('Email enviado com sucesso:', result.text);
      setStatus('success');
      
      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Resetar status após 5 segundos
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setStatus('error');
      
      // Resetar status após 5 segundos
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins">
            Entre em <span className="text-orange-600 dark:text-orange-400">Contato</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Tem uma pergunta ou quer trabalhar junto? Fique à vontade para me contatar.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 group hover:border-orange-500/50 transition-colors">
              <div className="flex items-center mb-4 text-orange-600 dark:text-orange-400">
                <Mail size={24} />
                <h3 className="text-lg sm:text-xl font-semibold ml-2 text-gray-900 dark:text-white">
                  E-mail
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 break-all">
                valdeircesario11@hotmail.com
              </p>
            </Card>
            
            <Card className="p-6 group hover:border-orange-500/50 transition-colors">
              <div className="flex items-center mb-4 text-orange-600 dark:text-orange-400">
                <Phone size={24} />
                <h3 className="text-lg sm:text-xl font-semibold ml-2 text-gray-900 dark:text-white">
                  Telefone
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                (61) 98408-0130
              </p>
            </Card>
            
            <Card className="p-6 group hover:border-orange-500/50 transition-colors">
              <div className="flex items-center mb-4 text-orange-600 dark:text-orange-400">
                <MapPin size={24} />
                <h3 className="text-lg sm:text-xl font-semibold ml-2 text-gray-900 dark:text-white">
                  Localização
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Luziânia, Goiás, Brasil
              </p>
            </Card>

            {/* Social Links */}
            <Card className="p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Redes Sociais
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/valdeircesario2023/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/valdeircesario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="p-6 sm:p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Seu Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="João Silva"
                      disabled={status === 'loading'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Seu E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="joao@exemplo.com"
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Oportunidade de Projeto"
                    disabled={status === 'loading'}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                    placeholder="Sua mensagem aqui..."
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={status === 'loading'}
                  icon={<Send size={18} />}
                  className="bg-orange-600 hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
                
                {status === 'success' && (
                  <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-md border border-green-200 dark:border-green-700">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      ✅ Mensagem enviada com sucesso! Entrarei em contato em breve.
                  </div>
                </div>
                )}
                
                {status === 'error' && (
                  <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-md border border-red-200 dark:border-red-700">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      ❌ Erro ao enviar mensagem. Verifique sua conexão e tente novamente.
                    </div>
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;