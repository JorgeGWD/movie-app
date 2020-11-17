import React from 'react'
import Card from './Card/Card'

function ResultList ({ results }) {
    return (
        <section>
            <div  className="results">
                {results.map(result => (
                    <Card result={result} key={result.imdbID}/>
                ))}
            </div>
        </section>
    )
}

export default ResultList