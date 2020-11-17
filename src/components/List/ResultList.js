import React from 'react'
import Card from './Card/Card'

function ResultList ({ movie, results }) {
    return (
        <section>
            <div  className="results">
                {movie.map(result => (
                    <Card result={result} key={result.imdbID}/>
                ))}
            </div>
            <div  className="results">
                {results.map(result => (
                    <Card result={result} key={result.imdbID}/>
                ))}
            </div>
        </section>
    )
}

export default ResultList