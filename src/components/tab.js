import React from 'react';

function Tab ({ selected, closeTab }) {
    return (
        <section className="open-card">
            <div className="info">
    <h2>{selected.Title}</h2> <span>({ selected.Year })</span>
    <p className="rating">Rating: {selected.imdbRating}</p>
    <div className="plot">
        <img src={selected.Poster} alt="poster" />
    <p>{selected.Plot}</p>
    </div>
    <button className="close-tab" onClick={closeTab}>Close</button>
            </div>
        </section>
    )
}

export default Tab;