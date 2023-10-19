import React from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import Greeter from './projects/Greeter';

function App() {
  return (
    <div className='container'>
      <ProjectsPage/>
      <Greeter/>
    </div>
  );
}

export default App;
