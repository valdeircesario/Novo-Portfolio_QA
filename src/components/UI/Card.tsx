import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false 
}) => {
  return (
    <div 
      className={`
        relative overflow-hidden
        bg-white dark:bg-dark-800 rounded-xl shadow-lg border border-gray-200 dark:border-dark-600
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary-500/5 before:via-transparent before:to-primary-500/5 before:opacity-0
        ${hoverEffect ? `
          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10
          hover:before:opacity-100 before:transition-opacity before:duration-300
          hover:border-primary-500/30
        ` : ''}
        ${className}
      `}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;