import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <React.Fragment>
      <div className="App">
        <h1>React Router Mini</h1>
        <nav className='d-flex'>
          <Link to='/' className='Nav-link'>Home</Link>
          <Link to='/about' className='Nav-link'>About</Link>
          <Link to='/contact' className='Nav-link'>Contact</Link>
        </nav>
      </div>
      <hr></hr>
    </React.Fragment>
  );
};

export default Navigation;
