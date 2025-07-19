import { useEffect } from 'react';

export interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal(selector: string, options: AnimationOptions = {}) {
  useEffect(() => {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px',
      once: true,
    };

    const mergedOptions = { ...defaultOptions, ...options };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
          if (mergedOptions.once) {
            observer.unobserve(entry.target);
          }
        } else if (!mergedOptions.once) {
          entry.target.classList.remove('animate-reveal');
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: mergedOptions.threshold,
      rootMargin: mergedOptions.rootMargin,
    });

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, options]);
}

export function addCssAnimation() {
  // This adds CSS animation classes to the stylesheet
  const style = document.createElement('style');
  style.textContent = `
    .animate-reveal {
      animation: reveal 0.8s ease forwards;
    }
    
    @keyframes reveal {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .fade-in {
      opacity: 0;
      transition: opacity 0.6s ease-in-out;
    }
    
    .fade-in.visible {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);
}