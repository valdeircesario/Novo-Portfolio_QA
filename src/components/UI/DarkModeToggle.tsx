import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has set a preference
    const userPreference = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial state based on user preference or system preference
    if (userPreference === 'dark' || (!userPreference && systemPreference)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Update DOM and localStorage when state changes
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <button 
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-dark-700 text-gray-800 dark:text-gray-200 transition-colors duration-200"
    >
      {darkMode ? (
        <Sun size={20} className="animate-pulse-slow" />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
};

export default DarkModeToggle;