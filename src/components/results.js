import React from 'react';
import Result from './result';

function Results ({ results, openTab }) {
    return (
        <section className="results">
            {results.map(result => (
                <Result result={result} openTab={openTab}/>
            ))}
        </section>
    )
}

export default Results;