import React from 'react'
import Card from './Card/Card'
import Modal from './Modal/Modal'

const ResultList = ({ loading, results, error }) => {
    
    if (loading) {
        return <div className="loading"><h3>Loading...</h3></div>;
    }

    return (
        <section>
            <p>{error ? error : ""}</p>
            <div className="row">
                {results.filter(result => result.poster_path).map(result => (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" data-toggle="modal" data-target={`#movieModal_${result.id}`} key={result.id} >
                        <Card result={result} />
                        <Modal result={result} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ResultList