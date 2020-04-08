import React, { useState } from 'react';
import Search from './components/search';
import Results from './components/results';
import './index.css';
import Tab from './components/tab';
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

  const openTab = (id) => {
    axios(`${apiKEY}&i=${id}`).then(({ data }) => {
      let result = data;

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closeTab = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Magic</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openTab={openTab}/>
      {(typeof state.selected.Title != "undefined") ? <Tab selected={state.selected} closeTab={closeTab} /> : false}
      </main>
    </div>
  );
}

export default App;