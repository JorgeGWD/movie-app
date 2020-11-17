import React from 'react'

function Result ({ result }) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card">
                <img className="card-img-top" src={result.Poster} alt={result.Title} />
                <div className="card-body">
                    <h5 className="card-title">{result.Title}</h5>
                </div>
            </div>
        </div>
    )
}

export default Result