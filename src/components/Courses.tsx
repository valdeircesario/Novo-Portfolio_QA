import React from 'react';
import { courses } from '../data/courses';
import { FileText, Calendar, Clock } from 'lucide-react';
import Card from './UI/Card';
import Button from './UI/Button';

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins">
            Cursos & <span className="text-primary-600 dark:text-primary-400">Certificações</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Desenvolvimento profissional e aprendizado contínuo em metodologias de QA
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} hoverEffect className="p-6 group">
              <div className="flex items-center mb-4 text-primary-600 dark:text-primary-400">
                <FileText size={24} />
                <h3 className="text-xl font-semibold ml-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {course.title}
                </h3>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
                  <Calendar size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
                  <span>{course.institution} - {course.year}</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Clock size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
                  <span>{course.duration}</span>
                </div>
              </div>
              
              {course.certificateUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-auto border-primary-500/50 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                  onClick={() => window.open(course.certificateUrl, '_blank')}
                >
                  Ver Certificado
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;