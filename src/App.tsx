import React from 'react';
import './App.scss';
import Credentials from './sections/Credentials/Credentials';
import ShortBio from './sections/ShortBio/ShortBio';

const App: React.FC = () => {
  return (
    <div className="main-container">
      <Credentials />
      <ShortBio />
    </div>
  );
};

export default App;
