import React, { useState } from 'react';

const SearchFilterApp = () => {
  // State for search input
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data - list of fruits
  const fruitList = [
    "Apple", "Banana", "Orange", "Mango", "Pineapple",
    "Grapes", "Watermelon", "Strawberry", "Blueberry", "Peach",
    "Pear", "Kiwi", "Cherry", "Lemon", "Lime",
    "Coconut", "Papaya", "Apricot", "Plum", "Raspberry"
  ];

  // Filter fruits based on search term
  const filteredFruits = fruitList.filter(fruit =>
    fruit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Fruit Search Filter</h1>
      
      {/* Search input */}
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />
      
      {/* Results count */}
      <p style={styles.resultsCount}>
        {filteredFruits.length} {filteredFruits.length === 1 ? 'result' : 'results'} found
      </p>
      
      {/* Fruits list */}
      <div style={styles.resultsContainer}>
        {filteredFruits.length > 0 ? (
          <ul style={styles.list}>
            {filteredFruits.map((fruit, index) => (
              <li key={index} style={styles.listItem}>
                {fruit}
              </li>
            ))}
          </ul>
        ) : (
          <p style={styles.noResults}>No fruits found matching "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

// Styles object
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  title: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '30px'
  },
  searchInput: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '20px',
    boxSizing: 'border-box'
  },
  resultsCount: {
    color: '#7f8c8d',
    marginBottom: '15px',
    fontSize: '14px'
  },
  resultsContainer: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '15px',
    minHeight: '200px'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  listItem: {
    padding: '10px 15px',
    borderBottom: '1px solid #eee',
    fontSize: '16px',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#f0f0f0'
    }
  },
  noResults: {
    textAlign: 'center',
    color: '#e74c3c',
    padding: '20px'
  }
};

export default App;