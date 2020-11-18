import React from 'react'

const Modal = ({ result }) => {
    return (
        <div className="modal fade" id="movieModal" tabIndex="-1" aria-labelledby="movieModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="movieModalLabel">{result.Title}</h5>
                        <span>({result.Year})</span>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <img className="card-img-top col-lg-6" src={result.Poster} alt={result.Title} />
                            <p className="col-lg-6">The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
