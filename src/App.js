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

    const apiKEY = 'api_key=70b4fae10e1f2ae4e4fb74fc69dcbd73'

    const apiURL = `https://api.themoviedb.org/3/movie/popular?${apiKEY}&language=en-US`

    const searchURL = `https://api.themoviedb.org/3/search/movie?${apiKEY}&language=en-US`

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(apiURL)
            let results = request.data.results

            setState(prevState => {
                return { ...prevState, loading: false, results: results}
            })
        }

        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const request = await axios.get(searchURL + '&query=' + state.value)
            let results = request.data.results

            console.log(state.value)

            if (results.length === 0 || state.value === '') {
                setState(prevState => {
                    return {...prevState, error: 'Please enter a valid term.'}
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
        <div>
            <header className="fixed-top">
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1" href="https://jorgegwd.github.io/movie-app/">Movie App</span>
                    <Search handleInput={handleInput} handleSubmit={handleSubmit} value={state.value} />
                </nav>
            </header>
            <div className="container content">
                <main>
                    <ResultList loading={state.loading} results={state.results} error={state.error} />
                </main>
            </div>
        </div>
    );
}

export default App;