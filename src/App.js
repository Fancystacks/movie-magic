import React, { useState } from 'react';
import Search from './components/search';
import Results from './components/results';
import './index.css';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    newSearch: "",
    results: [],
    selected: {}
  });
  const apiKEY = "http://www.omdbapi.com/?i=tt3896198&apikey=954e89e9";

  const search = (event) => {
    if (event.key === "Enter") {
      axios(`${apiKEY}&s=${state.newSearch}`).then(({ data }) => {
        let result = data.Search;
        
        setState(prevState => {
        return { ...prevState, results: result }
        })
      });
    }
  }
  const handleInput = (event) => {
    let searchQuery = event.target.value;

    setState(prevState => {
      return { ...prevState, newSearch : searchQuery}
    });
    console.log(state.newSearch);
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Magic</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;