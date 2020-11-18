import React from 'react'
import Modal from '../Modal/Modal'

const Result = ({ result }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card" data-toggle="modal" data-target="#movieModal">
                <img className="card-img-top" src={result.Poster} alt={result.Title} />
                <div className="card-body">
                    <h5 className="card-title">{result.Title}</h5>
                </div>
            </div>
            <Modal result={result} key={result.imdbID} />
        </div>
    )
}

export default Result