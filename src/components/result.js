import React from 'react';

function Result ({ result }) {
    return (
        <div className="movie-result">
        <img src={result.Poster} alt="movie-poster"/>
        <h3>{result.Title}</h3>
        </div>
    )
}

export default Result;