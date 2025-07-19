import React from 'react';
import { CheckCircle, XCircle, AlertCircle, BarChart2 } from 'lucide-react';
import BugCounter from './UI/BugCounter';
import TestPlayground from './UI/TestPlayground';
import Card from './UI/Card';

const QADashboard: React.FC = () => {
  return (
    <section id="qa-dashboard" className="py-20 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins">
            Dashboard <span className="text-primary-600 dark:text-primary-400">QA</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Uma demonstração interativa da minha abordagem de garantia de qualidade e visualização de processos
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <BugCounter 
            targetCount={243} 
            title="Bugs Encontrados" 
            subtitle="Em todos os projetos"
            className="p-6 bg-white dark:bg-dark-800 rounded-lg shadow-md border border-gray-200 dark:border-dark-600"
          />
          <BugCounter 
            targetCount={189} 
            title="Testes Criados" 
            subtitle="Casos de teste automatizados"
            className="p-6 bg-white dark:bg-dark-800 rounded-lg shadow-md border border-gray-200 dark:border-dark-600"
          />
          <BugCounter 
            targetCount={97} 
            title="Melhorias" 
            subtitle="Sugestões de UI/UX"
            className="p-6 bg-white dark:bg-dark-800 rounded-lg shadow-md border border-gray-200 dark:border-dark-600"
          />
          <BugCounter 
            targetCount={14} 
            title="Projetos" 
            subtitle="Qualidade assegurada"
            className="p-6 bg-white dark:bg-dark-800 rounded-lg shadow-md border border-gray-200 dark:border-dark-600"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 md:col-span-2">
            <div className="flex items-center mb-4">
              <BarChart2 className="text-primary-600 dark:text-primary-400 mr-2" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Métricas de Qualidade
              </h3>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Cobertura de Testes</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">92%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
                  <div className="bg-primary-600 h-2.5 rounded-full transition-all duration-1000" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Taxa de Detecção de Bugs</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">88%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
                  <div className="bg-primary-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: '88%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Eficiência da Automação</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Qualidade de Release</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">94%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Tipos de Teste
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <CheckCircle className="text-green-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Testes Funcionais</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Fluxos end-to-end e verificação de funcionalidades principais
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <AlertCircle className="text-yellow-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Testes de Performance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Testes de carga e otimização de tempo de resposta
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <XCircle className="text-red-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Testes de Segurança</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Avaliação de vulnerabilidades e proteção de dados
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <CheckCircle className="text-green-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Testes de UI/UX</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Consistência de interface e acessibilidade
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <TestPlayground />
      </div>
    </section>
  );
};

export default QADashboard;