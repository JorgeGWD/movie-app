import React from 'react'

function Search({ handleInput, handleSubmit, value }) {
    return (
        <section className="search-box">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search movie or series" onChange={handleInput} value={value} aria-describedby="button-addon4" />
                    <div className="input-group-append" id="button-addon4">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Search