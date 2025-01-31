import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
          WordWise
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/words" style={{ textDecoration: 'none' }}>Words</Link>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>Dashboard</Link>
          <Link to="/quiz" style={{ textDecoration: 'none' }}>Quiz</Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
