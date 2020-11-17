import React from 'react'

function Result ({ result }) {
    return (
        <div className="result">
            <div className="card">
                <img src={result.Poster} alt={result.Title} />
                <h3>{result.Title}</h3>
            </div>
        </div>
    )
}

export default Result