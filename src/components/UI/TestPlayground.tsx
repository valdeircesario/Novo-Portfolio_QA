import React, { useState } from 'react';
import { Check, X, Clock, Play, RefreshCw, Bug } from 'lucide-react';
import Button from './Button';
import { TestCase } from '../../types';
import { testCases as initialTestCases } from '../../data/testCases';

const TestPlayground: React.FC = () => {
  const [testCases, setTestCases] = useState<TestCase[]>(initialTestCases);
  const [isRunning, setIsRunning] = useState(false);
  
  const getTestStatusIcon = (status: TestCase['status']) => {
    switch (status) {
      case 'passed':
        return <Check className="text-green-500" size={20} />;
      case 'failed':
        return <X className="text-red-500" size={20} />;
      case 'pending':
        return <Clock className="text-yellow-500" size={20} />;
    }
  };
  
  const resetTests = () => {
    setTestCases(initialTestCases);
  };
  
  const runTests = () => {
    setIsRunning(true);
    
    // Simulate test running with delays
    const runTest = (index: number) => {
      if (index >= testCases.length) {
        setIsRunning(false);
        return;
      }
      
      setTestCases(prev => {
        const updated = [...prev];
        updated[index] = { ...updated[index], status: 'pending' };
        return updated;
      });
      
      // Simulate test execution time
      setTimeout(() => {
        setTestCases(prev => {
          const updated = [...prev];
          // Randomly determine test result (for demo purposes)
          // In a real app, this would be determined by actual test execution
          const result = Math.random() > 0.3 ? 'passed' : 'failed';
          updated[index] = { ...updated[index], status: result };
          return updated;
        });
        
        // Run next test
        runTest(index + 1);
      }, 800);
    };
    
    runTest(0);
  };
  
  return (
    <div className="bg-white dark:bg-dark-800 rounded-lg shadow-lg p-6 max-w-2xl mx-auto border border-gray-200 dark:border-dark-600">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
          <Bug className="mr-2 text-primary-500" />
          Playground de Testes
        </h3>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetTests}
            icon={<RefreshCw size={16} />}
            disabled={isRunning}
            className="border-primary-500/50 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20"
          >
            Resetar
          </Button>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={runTests}
            icon={<Play size={16} />}
            disabled={isRunning}
          >
            Executar Testes
          </Button>
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        {testCases.map((test) => (
          <div 
            key={test.id}
            className={`
              p-3 border rounded-md flex justify-between items-center
              ${test.status === 'passed' ? 'border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800' : 
                test.status === 'failed' ? 'border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800' : 
                'border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-800'}
              transition-colors duration-300
            `}
          >
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">{test.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{test.description}</p>
            </div>
            <div className="flex items-center">
              {getTestStatusIcon(test.status)}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-sm text-gray-600 dark:text-gray-400 border-t pt-4 dark:border-gray-700">
        <p>Este playground demonstra como os testes de QA são executados e monitorados. Clique em "Executar Testes" para ver o processo de teste em ação.</p>
      </div>
    </div>
  );
};

export default TestPlayground;