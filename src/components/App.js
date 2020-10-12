import React from 'react';

import NavMain from './navbar/nav_main';
import LandingMain from './landing/landing_main';
import AboutMain from './about/about_main';
import ExperienceMain from './experience/experience_main';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMain />
      <LandingMain />
      <AboutMain />
      <ExperienceMain />
    </div>
  );
}

export default App;
