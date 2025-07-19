import React from 'react';
import { Skill } from '../../types';

interface SkillBadgeProps {
  skill: Skill;
  showLevel?: boolean;
  className?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ 
  skill, 
  showLevel = true, 
  className = '' 
}) => {
  const getColorClass = () => {
    if (skill.category === 'soft') {
      return 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 border border-primary-200 dark:border-primary-700';
    }
    return 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 border border-primary-200 dark:border-primary-700';
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium transition-colors hover:bg-primary-200 dark:hover:bg-primary-800/50 ${getColorClass()}`}>
        {skill.name}
      </div>
      
      {showLevel && (
        <div className="mt-1 w-full bg-gray-200 dark:bg-dark-700 rounded-full h-1.5">
          <div 
            className={`h-1.5 rounded-full ${skill.category === 'soft' ? 'bg-primary-500' : 'bg-primary-500'}`}
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SkillBadge;