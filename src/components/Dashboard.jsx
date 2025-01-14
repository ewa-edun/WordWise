import React from 'react';

const Dashboard = () => {
  // Placeholder data - in a real app, this would come from your backend
  const totalWords = 42;
  const wordTypes = {
    Nouns: 15,
    Verbs: 12,
    Adjectives: 10,
    Adverbs: 5
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Your Vocabulary Dashboard</h2>
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Statistics</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '1rem'
        }}>
          <div style={{ 
            padding: '1rem', 
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h4>Total Words</h4>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{totalWords}</p>
          </div>
          
          <div style={{ 
            padding: '1rem', 
            backgroundColor: '#f8f9fa',
            borderRadius: '8px'
          }}>
            <h4>Word Types</h4>
            {Object.entries(wordTypes).map(([type, count]) => (
              <div key={type} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{type}:</span>
                <span>{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Recent Words</h3>
        <div style={{ 
          backgroundColor: '#f8f9fa',
          padding: '1rem',
          borderRadius: '8px',
          marginTop: '1rem'
        }}>
          <p>No words added yet. Start building your vocabulary!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
