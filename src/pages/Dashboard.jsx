import React from 'react';

function Dashboard() {
  const {
    VITE_APP_NAME,
    VITE_APP_VERSION,
    VITE_DEPLOYMENT_ENV,
    VITE_GITHUB_ACTIONS_RUN_ID,
    VITE_GITHUB_SHA,
  } = import.meta.env;

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6'>Dashboard</h1>
      <div className='bg-white shadow-md rounded-lg p-6'>
        <h2 className='text-2xl font-semibold mb-4'>Application Details</h2>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <strong>App Name:</strong> {VITE_APP_NAME}
          </div>
          <div>
            <strong>Version:</strong> {VITE_APP_VERSION}
          </div>
          <div>
            <strong>Environment:</strong> {VITE_DEPLOYMENT_ENV}
          </div>
          <div>
            <strong>GitHub Actions Run ID:</strong> {VITE_GITHUB_ACTIONS_RUN_ID}
          </div>
          <div>
            <strong>GitHub SHA:</strong> {VITE_GITHUB_SHA}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
