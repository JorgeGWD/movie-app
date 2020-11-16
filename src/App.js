import React, { useState } from 'react'
import axios from 'axios'
import Search from './components/Serarch/Search'
import Results from './components/List/List'

function App() {

    const [ state, setState ] = useState({
        s: '',
        results: [],
        selected: {}
    })

    const apiurl = 'http://www.omdbapi.com/?apiKey=ee4cc885'

    const search = (e) => {
        if(e.key === "Enter") {
            axios(apiurl + "&s=" + state.s).then(({ data }) => {
                let results = data.Search

                setState(prevState => {
                    return { ...prevState, results: results}
                })

                console.log(data)
            })
        }
    }

    const handleInput = (e) => {
        let s = e.target.value

        setState(prevState => {
            return { ...prevState, s: s}
        })

        // console.log(state.s)
    }
    
    return (
        <div className="App">
            <header className="App-header">
                <h1>Movie App</h1>
            </header>
            <main>
                <Search handleInput={handleInput} search={search} />
                <Results results={state.results} />
            </main>
        </div>
    );
}

export default App;