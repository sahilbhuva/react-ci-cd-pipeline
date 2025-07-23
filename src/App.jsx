import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import PipelineStatus from './pages/PipelineStatus';

function App() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/pipeline-status' element={<PipelineStatus />} />
      </Routes>
    </div>
  );
}

export default App;
