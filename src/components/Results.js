import React from 'react'

function Results({ results }) {
    return (
        <section>
            {results.map(result => (
                <Result result={result} />
            ))}
        </section>
    )
}

export default Results
