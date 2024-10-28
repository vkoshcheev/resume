import React from 'react';
import './App.scss';
import Credentials from './sections/Credentials/Credentials';

const App: React.FC = () => {
  return (
    <div className="main-container">
      <Credentials />
    </div>
  );
};

export default App;
