import React from 'react';
import { Github as GitHub, Linkedin, Mail, FileDown, ExternalLink, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Valdeir<span className="text-orange-500">Dev</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Desenvolvedor Full Stack e especialista em QA, transformando ideias em soluções tecnológicas inovadoras com foco na qualidade e experiência do usuário.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/valdeircesario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/valdeircesario2023/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:valdeircesario11@hotmail.com"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/5561984080130"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                aria-label="WhatsApp"
                >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#hero" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Início</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Sobre</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Projetos</a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Habilidades</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Contato</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-400 text-sm">valdeircesario11@hotmail.com</span>
                </li>
                <li>
                  <span className="text-gray-400 text-sm">(61) 98408-0130</span>
                </li>
                <li>
                  <span className="text-gray-400 text-sm">Luziânia, GO - Brasil</span>
                </li>
                <li>
                  <a 
                    href="https://portfoliovcs.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-200 flex items-center text-sm"
                  >
                    Portfólio Online <ExternalLink size={14} className="ml-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-6 mt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Valdeir Cesário Silva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;