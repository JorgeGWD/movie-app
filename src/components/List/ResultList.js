import React from 'react'
import Card from './Card/Card'

const ResultList = ({ loading, results, error }) => {
    
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <p>{error ? error : ""}</p>
            <div className="row">
                {results.map(result => (
                    <Card result={result} key={result.imdbID} />
                ))}
            </div>
            
        </section>
    )
}

export default ResultList