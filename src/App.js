import React from 'react';
import './App.css';
import ProductGrid from './pages/ProductGrid'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App!</h1>
        <p>This is the homepage. Start editing to see your changes live!</p>
      </header>
      
      {/* Render ProductGrid component */}
      <ProductGrid /> {/* This will show the product grid table */}
    </div>
  );
}

export default App;
