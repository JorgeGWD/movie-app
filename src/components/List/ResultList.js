import React from 'react'
import Card from './Card/Card'

function ResultList ({ results, error }) {
    return (
        <section>
            <p>{error ? error : ""}</p>
            <div className="row">
                {results.map(result => (
                    <Card result={result} key={result.imdbID}/>
                ))}
            </div>
        </section>
    )
}

export default ResultList