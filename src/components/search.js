import React from 'react';

function Search({ handleInput, userSearch }) {
    return (
        <section className="search-div">
            <input type="text"
                className="search-box"
                placeholder="Search movie database for a title . . . "
                onChange={handleInput}
                onKeyPress={userSearch} />
        </section>
    )
}

export default Search;