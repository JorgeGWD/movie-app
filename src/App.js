import React, { useState } from 'react'
import Search from './components/Search'
import axios from 'axios'

function App() {

    const [ state, setState ] = useState({
        s: '',
        result: [],
        selected: {}
    })

    const apiurl = 'http://www.omdbapi.com/?apiKey=ee4cc885'

    const search = (e) => {
        if(e.key === "Enter") {
            axios(apiurl + "&s=" + state.s).then(({ data }) => {
                let resutls = data.Search

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
            </main>
        </div>
    );
}

export default App;