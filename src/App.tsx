import React from 'react';
import './App.scss';
import Credentials from './sections/Credentials/Credentials';
import ShortBio from './sections/ShortBio/ShortBio';
import SkillsList from './sections/SkillsList/SkillsList';
import Workplaces from './sections/Workplaces/Workplaces';

const App: React.FC = () => {
  return (
    <div className="main-container">
      <Credentials />
      <ShortBio />
      <Workplaces />
      <SkillsList />
    </div>
  );
};

export default App;
