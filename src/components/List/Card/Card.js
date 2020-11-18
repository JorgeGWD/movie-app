import React from 'react'

const Result = ({ result }) => {
    const posterPATH = 'http://image.tmdb.org/t/p/w185/'
    return (
        <div className="card">
            <img className="card-img-top" src={`${posterPATH}${result.poster_path}`} alt={result.title} />
            <div className="card-body">
                <h5 className="card-title">{result.title}</h5>
            </div>
        </div>
    )
}

export default Result