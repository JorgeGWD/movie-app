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

    const [ movie, setMovies ] = useState([])

    const apiURL = 'http://www.omdbapi.com/?'

    const apiKEY = '&apiKey=ee4cc885'

    const search = (e) => {
        if(e.key === "Enter") {
            axios(apiURL + apiKEY + "&s=" + state.value).then(({ data }) => {
                let results = data.Search

                setState(prevState => {
                    return { ...prevState, results: results}
                })

                console.log(data.Search)
            })
        } 
    }

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(apiURL + apiKEY + "&s=" + state)

            setMovies(request.data.Search)

            console.log(request.data.Search)
        }

        fetchData()
    }, [])

    const handleInput = (e) => {
        let value = e.target.value

        setState(prevState => {
            return { ...prevState, value }
        })

        // console.log(state.value)
    }

    //const currentMovies = movie.filter(movie => movie.Year === "2020")
    
    return (
        <div className="App">
            <header className="App-header">
                <h1>Movie App</h1>
            </header>
            <main>
                <Search handleInput={handleInput} search={search} />
                <ResultList movie={movie} results={state.results} />
            </main>
        </div>
    );
}

export default App;