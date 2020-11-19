import React from 'react'

const Result = ({ result }) => {

    const posterPATH = 'http://image.tmdb.org/t/p/w400/'
    
    return (
        <div className="card">
            <img className="card-img-top" src={`${posterPATH}${result.poster_path}`} alt={result.title} />
        </div>
    )
}

export default Result