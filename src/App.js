import React from 'react';
import { Component } from 'react';

import Routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

import './styles.css';
import Main from './pages/main';

const App = () => (
  <div className="App">
        <Header />
          <Routes />
        <Footer />
  </div>
);

export default App;
