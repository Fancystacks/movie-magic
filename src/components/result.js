import React from 'react';

function Result ({ result, openTab }) {
    return (
        <div className="result" onClick={() => openTab(result.imdbID)}>
        <img src={result.Poster} 
        alt="movie-poster"/>
        <h3>{result.Title}</h3>
        </div>
    )
}

export default Result;