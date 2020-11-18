import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Serarch/Search'
import ResultList from './components/List/ResultList'

function App() {

    const [ state, setState ] = useState({
        value: '',
        loading: true,
        results: [],
        error: ''
    })

    const apiURL = 'http://www.omdbapi.com/?'

    const apiKEY = '&apiKey=ee4cc885'

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(apiURL + apiKEY + "&s=batman")
            let results = request.data.Search

            setState(prevState => {
                return { ...prevState, loading: false, results: results}
            })
        }

        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const request = await axios.get(apiURL + apiKEY + "&s=" + state.value)
            let results = request.data.Search

            if(!results || state.value === '') {
                setState(prevState => {
                   return {...prevState, error: 'There are no results'}
                })
            } else {
                setState(prevState => {
                    return { ...prevState, loading: false, results: results, error: '', value: ''}
                })
            }
    }

    const handleInput = (e) => {
        let value = e.target.value

        setState(prevState => {
            return { ...prevState, value }
        })
    }
    
    return (
        <div className="container">
            <header className="App-header">
                <h1>Movie App</h1>
            </header>
            <main>
                <Search handleInput={handleInput} handleSubmit={handleSubmit} value={state.value} />
                <ResultList loading={state.loading} results={state.results} error={state.error} />
            </main>
        </div>
    );
}

export default App;