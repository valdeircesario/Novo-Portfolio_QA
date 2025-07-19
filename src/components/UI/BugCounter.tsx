import React, { useState, useEffect } from 'react';
import { Bug } from 'lucide-react';

interface BugCounterProps {
  targetCount: number;
  title: string;
  subtitle: string;
  duration?: number;
  className?: string;
}

const BugCounter: React.FC<BugCounterProps> = ({
  targetCount,
  title,
  subtitle,
  duration = 2000,
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('bug-counter');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const incrementSize = Math.ceil(targetCount / 50);
    const interval = Math.floor(duration / (targetCount / incrementSize));
    
    const timer = setInterval(() => {
      start += incrementSize;
      if (start > targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [isInView, targetCount, duration]);

  return (
    <div id="bug-counter" className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center mb-2">
        <Bug className="text-primary-500 mr-2" size={24} />
        <span className="text-4xl font-bold text-gray-900 dark:text-white">{count}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>
    </div>
  );
};

export default BugCounter;