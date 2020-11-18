import React from 'react'

const Result = ({ result }) => {
    return (
        <div className="card">
            <img className="card-img-top" src={result.Poster} alt={result.Title} />
            <div className="card-body">
                <h5 className="card-title">{result.Title}</h5>
            </div>
        </div>
    )
}

export default Result