import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { projects } from '../data/projects';
import Card from './UI/Card';
import Button from './UI/Button';
import ProjectModal from './UI/ProjectModal';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins">
            Meus <span className="text-orange-600 dark:text-orange-400">Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Uma coleção de projetos que demonstram minhas habilidades em desenvolvimento full-stack e qualidade de software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Card key={project.id} hoverEffect className="overflow-hidden h-full flex flex-col group">
              <div className="h-48 sm:h-56 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow bg-white dark:bg-gray-800">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs rounded-full border border-orange-200 dark:border-orange-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 mt-auto">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<Eye size={16} />}
                    onClick={() => openModal(project)}
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    Demonstração
                  </Button>
                  {project.repoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<Github size={16} />}
                      onClick={() => window.open(project.repoUrl, '_blank')}
                      className="border-orange-500/50 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                    >
                      Código
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<ExternalLink size={16} />}
                      onClick={() => window.open(project.demoUrl, '_blank')}
                      className="border-orange-500/50 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;