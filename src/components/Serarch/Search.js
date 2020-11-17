import React from 'react'

function Search({ handleInput, handleSubmit, value }) {
    return (
        <section className="search-box">
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" placeholder="Search" onChange={handleInput} value={value} />
            </form>
        </section>
    )
}

export default Search