import React from 'react';
import Result from './result';

function Results ({ results }) {
    return (
        <div className="results-block">
            {results.map(result => (
                <Result result={result} />
            ))}
        </div>
    )
}

export default Results;