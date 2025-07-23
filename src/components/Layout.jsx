import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='app-layout'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/settings'>Settings</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>
          © {new Date().getFullYear()} {import.meta.env.VITE_APP_TITLE}
        </p>
        <p>Version: {import.meta.env.VITE_APP_VERSION}</p>
      </footer>
    </div>
  );
}

export default Layout;
