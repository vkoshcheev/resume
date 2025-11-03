import React from 'react';
import './App.scss';
import CatGrid from './sections/CatGrid/CatGrid';
import Credentials from './sections/Credentials/Credentials';
import ShortBio from './sections/ShortBio/ShortBio';
import SkillsList from './sections/SkillsList/SkillsList';
import Workplaces from './sections/Workplaces/Workplaces';
import WebVitalsDisplay from './sections/WebVitalsDisplay/WebVitalsDisplay';

const App: React.FC = () => {
  return (
    <div className="main-container">
      <WebVitalsDisplay />
      <Credentials />
      <ShortBio />
      <Workplaces />
      <SkillsList />
      <CatGrid />
    </div>
  );
};

export default App;
