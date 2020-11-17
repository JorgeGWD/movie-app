import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Serarch/Search'
import ResultList from './components/List/ResultList'

function App() {

    const [ state, setState ] = useState({
        value: '',
        results: [],
        selected: {}
    })

    const apiURL = 'http://www.omdbapi.com/?'

    const apiKEY = '&apiKey=ee4cc885'

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(apiURL + apiKEY + "&s=" + 'batman')
            let results = request.data.Search

            setState(prevState => {
                return { ...prevState, results: results}
            })

            // console.log(request)
        }

        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const request = await axios.get(apiURL + apiKEY + "&s=" + state.value)
            let results = request.data.Search

            setState(prevState => {
                return { ...prevState, results: results}
            })

        console.log(request)
    }

    const handleInput = (e) => {
        let value = e.target.value

        setState(prevState => {
            return { ...prevState, value }
        })

        // console.log(state.value)
    }
    
    return (
        <div className="App">
            <header className="App-header">
                <h1>Movie App</h1>
            </header>
            <main>
                <Search handleInput={handleInput} handleSubmit={handleSubmit} />
                <ResultList results={state.results} />
            </main>
        </div>
    );
}

export default App;