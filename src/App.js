import React from 'react';
import { Route } from 'react-router-dom';
import './css/index.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <React.Fragment>
    <Navigation />
    <Route path='/' exact component={Home} />
    <Route path='/about' exact component={About} />
    <Route path='/contact' exact component={Contact} />
  </React.Fragment>
);

export default App;
