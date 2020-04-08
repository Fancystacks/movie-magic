import React from 'react';

function Search({ handleInput, search }) {
    return (
        <section className="search-div">
            <input type="text"
                className="search-box"
                placeholder="Search movie database for a title . . . "
                onChange={handleInput}
                onKeyPress={search} />
        </section>
    )
}

export default Search;