import React from 'react'

function Search({ handleInput, handleSubmit, value }) {
    return (
        <section className="search-box">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search movie or series" onChange={handleInput} value={value} aria-describedby="button-addon4" />
                    <div class="input-group-append" id="button-addon4">
                        <button class="btn btn-primary" type="submit">Search</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Search