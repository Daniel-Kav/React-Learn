import React from 'react';
import Button from './components/Button';

const App = () => {
  const number = 40
  return (
    <div className="min-h-screen flex items-center  justify-center p-8 bg-blue-300">
      <div className="bg-white p-6 rounded-lg shadow-lg ">
        <h1 className="text-2xl font-bold mb-4">Welcome to Vite + React + Tailwind CSS</h1>
        <p className="mb-4 ">This is a simple example of using Tailwind CSS with a Vite React project.</p>
        <Button text="Click me!"/>
      </div>
    </div>
  );
};

export default App;
