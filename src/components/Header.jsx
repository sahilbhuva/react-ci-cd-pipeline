import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-blue-600 text-white p-4 shadow-md'>
      <nav className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='text-2xl font-bold'>
          CI/CD Demo
        </Link>
        <div className='space-x-4'>
          <Link to='/' className='hover:text-blue-200'>
            Dashboard
          </Link>
          <Link to='/pipeline-status' className='hover:text-blue-200'>
            Pipeline Status
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
