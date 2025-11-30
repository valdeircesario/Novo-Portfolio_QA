import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import DarkModeToggle from './UI/DarkModeToggle';
import Button from './UI/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Dashboard QA', href: '#qa-dashboard' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Cursos', href: '#courses' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-lg sm:text-xl font-bold text-primary-600 dark:text-primary-400">
              Valdeir<span className="text-primary-500">QA</span>
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex items-center space-x-3">
              <DarkModeToggle />
              <a
                href="https://1drv.ms/b/c/47a39077082d73ae/EbRSb1-f-xFKp0T3b0KYO2cBr6tglt9aWn4efGg3Jq47RQ?e=ow56Ht" // coloque aqui o caminho ou link do seu currículo
                download
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button 
                variant="outline" 
                size="sm"
                icon={<FileDown size={16} />}
                className="border-primary-500/50 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20"
              >
                Currículo
              </Button>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-3">
            <DarkModeToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          lg:hidden fixed inset-0 z-40 bg-white dark:bg-black transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          pt-20 px-4 sm:px-6
        `}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 text-lg font-medium py-2 border-b border-gray-100 dark:border-dark-700"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-4">
            <Button 
              variant="outline" 
              size="md"
              icon={<FileDown size={18} />}
              fullWidth
              className="border-primary-500/50 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20"
            >
              Baixar Currículo
            </Button>
            <div className="flex justify-center space-x-6 pt-4">
              <a href="https://github.com" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                <GitHub size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contato@valdeirsilva.com" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
