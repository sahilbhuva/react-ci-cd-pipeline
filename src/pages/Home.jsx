import React from 'react';

function Home() {
  return (
    <div className='home-page'>
      <h1>Welcome to {import.meta.env.VITE_APP_TITLE} </h1>
      <p>This is the home page of our admin application.</p>
    </div>
  );
}

export default Home;
