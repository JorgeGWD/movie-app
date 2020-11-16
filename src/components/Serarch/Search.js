import React from 'react'

function Search({ handleInput, search }) {
    return (
        <section className="search-box">
            <input type="text" className="search-bar" placeholder="Search" onChange={handleInput} onKeyPress={search} />
        </section>
    )
}

export default Search