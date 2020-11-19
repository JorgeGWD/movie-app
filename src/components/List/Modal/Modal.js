import React from 'react'

const Modal = ({ result }) => {

    const posterPATH = 'http://image.tmdb.org/t/p/w400/'

    return (
        <div className="modal fade" id={`movieModal_${result.id}`} tabIndex="-1" aria-labelledby="movieModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="movieModalLabel">{result.title}</h5>
                        <span>({result.vote_average})</span>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <img className="card-img-top col-lg-6" src={`${posterPATH}${result.poster_path}`} alt={result.title}  />
                            <p className="col-lg-6">{result.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
