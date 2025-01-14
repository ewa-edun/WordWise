import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      textAlign: 'center',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      borderTop: '1px solid #e7e7e7'
    }}>
      <p>© {new Date().getFullYear()} WordWise. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
