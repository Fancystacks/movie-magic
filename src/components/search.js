import React from 'react';

function Search({ handleInput, search }) {
    return (
        <div className="search-div">
            <input type="text"
                className="search-box"
                placeholder="Search movie database for a title . . . "
                onChange={handleInput}
                onKeyPress={search} />
        </div>
    )
}

export default Search;