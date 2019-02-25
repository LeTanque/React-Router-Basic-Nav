import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <React.Fragment>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/about'>About</Link>
        </div>
        <div>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
