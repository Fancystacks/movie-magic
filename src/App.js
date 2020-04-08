import React from 'react';
import Search from './components/search';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Movie Magic</h1>
      </header>
      <main>
        <Search/>
      </main>
    </div>
  );
}

export default App;
