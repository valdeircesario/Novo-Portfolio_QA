import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  icon,
  disabled = false,
}) => {
  const baseStyles = `
    relative overflow-hidden rounded-lg font-medium transition-all duration-300
    inline-flex items-center justify-center
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 
    before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700
    focus:outline-none focus:ring-2 focus:ring-primary-500/50
  `;
  
  const variantStyles = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-primary-500/25 border border-primary-600',
    secondary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-primary-500/25 border border-primary-500',
    outline: 'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-600',
    text: 'bg-transparent text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:underline',
  };
  
  const sizeStyles = {
    sm: 'text-xs py-1.5 px-3 gap-1.5',
    md: 'text-sm py-2 px-4 gap-2',
    lg: 'text-base py-2.5 px-6 gap-2.5',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles} 
        ${variantStyles[variant]} 
        ${sizeStyles[size]} 
        ${widthStyles} 
        ${disabledStyles} 
        ${className}
      `}
    >
      {icon && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;