import React from 'react';
import { X, Github, ExternalLink, Code, Zap } from 'lucide-react';
import { Project } from '../../types';
import Button from './Button';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 rounded-t-xl sm:rounded-t-2xl">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white pr-4">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Image Gallery */}
          {project.demoImages && project.demoImages.length > 0 && (
            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <Code className="mr-2 text-orange-500" size={20} />
                Demonstração Visual
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {project.demoImages.map((image, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${project.title} - Imagem ${index + 1}`}
                      className="w-full h-32 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Sobre o Projeto
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <Zap className="mr-2 text-orange-500" size={20} />
                Principais Funcionalidades
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Tecnologias Utilizadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs sm:text-sm rounded-full border border-orange-200 dark:border-orange-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            {project.repoUrl && (
              <Button
                variant="outline"
                icon={<Github size={18} />}
                onClick={() => window.open(project.repoUrl, '_blank')}
                className="border-orange-500/50 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20"
              >
                Ver Código Fonte
              </Button>
            )}
            {project.demoUrl && (
              <Button
                variant="primary"
                icon={<ExternalLink size={18} />}
                onClick={() => window.open(project.demoUrl, '_blank')}
                className="bg-orange-600 hover:bg-orange-700"
              >
                Ver Demonstração
              </Button>
            )}
            <Button
              variant="outline"
              onClick={onClose}
              className="border-gray-300 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Fechar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;