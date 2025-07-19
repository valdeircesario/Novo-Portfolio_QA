import React from 'react';
import { ChevronDown, Code, Terminal, Bug, Phone, Mail, MapPin } from 'lucide-react';
import Button from './UI/Button';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with modern gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-orange-500/5 to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-12 w-24 h-24 bg-orange-500/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-orange-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-orange-400/30 rounded-full blur-lg animate-bounce-slow"></div>
        
        {/* Floating code elements */}
        <div className="absolute top-20 left-1/4 text-orange-500/30 text-6xl font-mono animate-float">{'{ }'}</div>
        <div className="absolute bottom-20 right-1/3 text-orange-500/30 text-4xl font-mono animate-float delay-300">{'</>'}</div>
        <div className="absolute top-1/2 left-10 text-orange-500/30 text-5xl font-mono animate-bounce-slow">{'[]'}</div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full mb-6 backdrop-blur-sm border border-orange-500/20">
              <Terminal size={16} className="text-orange-400 mr-2" />
              <span className="text-sm text-orange-400">Full Stack Developer | QA Engineer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins leading-tight">
              <span className="text-orange-500 relative">
                VALDEIR CESÁRIO
                <Bug className="absolute -top-6 -right-8 text-orange-400 animate-bounce-slow" size={24} />
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                SILVA
              </span>
            </h1>
            
            <p className="text-xl text-gray-100/90 mb-8 max-w-lg leading-relaxed">
              Transformando ideias em soluções tecnológicas inovadoras através de desenvolvimento full-stack e garantia de qualidade.
            </p>

            {/* Contact Info */}
            <div className="mb-8 space-y-2 text-gray-300">
              <div className="flex items-center justify-center md:justify-start">
                <Phone size={16} className="mr-2 text-orange-400" />
                <span>(61) 98408-0130</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail size={16} className="mr-2 text-orange-400" />
                <span>valdeircesario11@hotmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin size={16} className="mr-2 text-orange-400" />
                <span>Luziânia, Goiás, Brasil</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button 
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-orange-500/25"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Iniciar Conversa
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-orange-500/50 text-white backdrop-blur-sm hover:bg-orange-500/10 hover:border-orange-400"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Projetos
              </Button>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 animate-gradient p-1">
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-black to-gray-900 p-1">
                  <img 
                    src="/imagens/fotoperfil0011.jpg" 
                    alt="Valdeir Cesário Silva" 
                    className="rounded-full w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -right-4 top-1/4 transform rotate-12 bg-black/90 backdrop-blur-sm p-4 rounded-lg border border-orange-500/30 animate-float shadow-lg">
                <Code size={24} className="text-orange-400" />
              </div>
              <div className="absolute -left-6 bottom-1/4 transform -rotate-12 bg-black/90 backdrop-blur-sm p-4 rounded-lg border border-orange-500/30 animate-float delay-100 shadow-lg">
                <Terminal size={24} className="text-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#about" className="group" aria-label="Rolar para seção Sobre">
          <ChevronDown size={30} className="group-hover:text-orange-400 transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default Hero;