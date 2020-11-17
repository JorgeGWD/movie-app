import React from 'react'

function Search({ handleInput, search }) {
    return (
        <section className="search-box">
            <input type="text" className="search-bar" placeholder="Search" onChange={handleInput} onKeyPress={search} />
            <button onClick={search}>Search</button>
        </section>
    )
}

export default Search