import React from 'react';
import { skills } from '../data/skills';
import SkillBadge from './UI/SkillBadge';
import Card from './UI/Card';

const Skills: React.FC = () => {
  const hardSkills = skills.filter(skill => skill.category === 'hard');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white font-poppins">
            Minhas <span className="text-primary-600 dark:text-primary-400">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Expertise técnica e qualidades pessoais que me tornam eficiente em QA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
              Habilidades Técnicas
            </h3>
            <div className="space-y-6">
              {hardSkills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
                    <div 
                      className="bg-primary-600 h-2.5 rounded-full transition-all duration-1000" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
              Habilidades Comportamentais
            </h3>
            <div className="space-y-6">
              {softSkills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
                    <div 
                      className="bg-primary-500 h-2.5 rounded-full transition-all duration-1000" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-16 bg-white dark:bg-dark-700 rounded-lg p-8 border border-gray-200 dark:border-dark-600">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
            Visão Geral das Habilidades
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} showLevel={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;