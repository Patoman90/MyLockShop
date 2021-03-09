import React from 'react';
import './App.css';
import { HeaderComponent } from './components/Header';
import { MainComponent } from './components/Main';
import { FooterComponent } from './components/Footer';

function App() {
  return (
    <body className="App">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </body>
  );
}

export default App;
