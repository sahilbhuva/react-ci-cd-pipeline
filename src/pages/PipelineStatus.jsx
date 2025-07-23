import React from 'react';

function PipelineStatus() {
  const { VITE_APP_NAME, VITE_GITHUB_ACTIONS_RUN_ID } = import.meta.env;

  const pipelineSteps = [
    { name: 'Code Checkout', status: 'Completed' },
    { name: 'Install Dependencies', status: 'Completed' },
    { name: 'Lint Code', status: 'Completed' },
    { name: 'Run Tests', status: 'Completed' },
    { name: 'Build Project', status: 'Completed' },
    { name: 'Deploy to GitHub Pages', status: 'Completed' },
  ];

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6'>CI/CD Pipeline Status</h1>
      <div className='bg-white shadow-md rounded-lg p-6'>
        <h2 className='text-2xl font-semibold mb-4'>Pipeline Run Details</h2>
        <div className='mb-4'>
          <strong>Application:</strong> {VITE_APP_NAME}
          <br />
          <strong>Run ID:</strong> {VITE_GITHUB_ACTIONS_RUN_ID}
        </div>
        <div className='grid gap-4'>
          {pipelineSteps.map((step, index) => (
            <div
              key={index}
              className='flex justify-between items-center p-4 bg-green-100 rounded-lg'
            >
              <span>{step.name}</span>
              <span className='text-green-600 font-bold'>{step.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PipelineStatus;
