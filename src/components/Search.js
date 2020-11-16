import React from 'react'

function Search({ handleInput }) {
    return (
        <section className="search-box">
            <input type="text" className="search-bar" placeholder="Search" onChange={handleInput} />
        </section>
    )
}

export default Search
