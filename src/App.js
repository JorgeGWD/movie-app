import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import Search from './components/Serarch/Search'
import ResultList from './components/List/ResultList'

function App() {

    const [ state, setState ] = useState({
        value: '',
        loading: true,
        results: [],
        error: ''
    })

    const [ popularMovies, setPopularMovies ] = useState([])

    const apiKEY = 'api_key=70b4fae10e1f2ae4e4fb74fc69dcbd73'

    const apiURL = `https://api.themoviedb.org/3/movie/popular?${apiKEY}&language=en-US&page=3`

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(apiURL)
            let results = request.data.results

            setState(prevState => {
                return { ...prevState, loading: false, results: results}
            })

            console.log(results)
        }

        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const request = await axios.get(apiURL)
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
                {/*<Search handleInput={handleInput} handleSubmit={handleSubmit} value={state.value} />*/}
                <ResultList loading={state.loading} results={state.results} error={state.error} />
            </main>
        </div>
    );
}

export default App;