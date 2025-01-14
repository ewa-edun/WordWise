import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to WordWise</h1>
      <p>Empowering students, one word at a time</p>
      <Link to="/home">
        <button className="get-started-btn">Get Started</button>
      </Link>
    </div>
  );
};

export default Landing;
