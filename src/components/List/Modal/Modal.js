import React from 'react'

const Modal = ({ result }) => {
    return (
        <div className="modal fade" id="movieModal" tabIndex="-1" aria-labelledby="movieModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="movieModalLabel">{result.Title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img className="card-img-top" src={result.Poster} alt={result.Title} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
