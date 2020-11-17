import React from 'react'

function Search({ handleInput, handleSubmit }) {
    return (
        <section className="search-box">
            <form onSubmit={handleSubmit}>
                <input type="text" className="search-bar" placeholder="Search" onChange={handleInput} />
            </form>
        </section>
    )
}

export default Search