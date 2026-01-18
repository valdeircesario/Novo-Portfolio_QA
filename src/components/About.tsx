import React from 'react';
import { User, Briefcase, GraduationCap, Award, ArrowRight, MapPin } from 'lucide-react';
import Button from './UI/Button';
import Card from './UI/Card';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins">
            Sobre <span className="text-orange-600 dark:text-orange-400">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Especialista QA (Quality Assurance) & QC (Quality Control) comprometido com a excelência e qualidade de software
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="mb-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Olá! Sou <strong className="text-orange-600 dark:text-orange-400">Valdeir Cesário Silva</strong>, estudante de Sistemas de Informação, entusiasta em desenvolvimento web, com foco na criação de soluções tecnológicas eficientes e inovadoras.
              </p>
              <p className="mb-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Atualmente cursando <strong>Bacharelado em Sistemas de Informação</strong> no Instituto Federal de Goiás (7º período), busco sempre focar na experiência dos usuários, dando qualidade e serviço.
              </p>
              <p className="mb-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Como <strong>estagiário na FHE POUPEX</strong>, atuo no desenvolvimento e testes de software, contribuindo para a melhoria contínua e qualidade dos sistemas. Trabalho de forma colaborativa, aplicando boas práticas de programação e testes para garantir um produto robusto e confiável.
              </p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Tenho resiliência, proatividade e estou sempre em busca de novas oportunidades para aprimorar minhas habilidades em desenvolvimento e garantia de qualidade.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
              <Button 
                variant="primary" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                icon={<ArrowRight size={18} />}
                className="bg-orange-600 hover:bg-orange-700"
              >
                Ver Meus Projetos
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-orange-500/50 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20"
              >
                Entre em Contato
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0">
            <Card className="p-6">
              <div className="text-orange-600 dark:text-orange-400 mb-4">
                <Briefcase size={36} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Experiência</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Estagiário na FHE POUPEX, atuando no desenvolvimento e na qualidade do software
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="text-orange-500 mb-4">
                <GraduationCap size={36} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Educação</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Bacharelado em Sistemas de Informação (7º período), Instituto Federal de Goiás
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="text-orange-600 dark:text-orange-400 mb-4">
                <User size={36} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Especialidades</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Desenvolvimento Full Stack, Testes de Software, Qualidade de Software
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="text-orange-500 mb-4">
                <MapPin size={36} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Localização</h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Luziânia, Goiás, Brasil
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
