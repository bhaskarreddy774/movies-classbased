import React, { Component } from 'react';
import axios from 'axios';
import './App.css'

export class App extends Component {

  constructor() {
    super()
    this.state = { movies: [] }

  }
  componentDidMount() {
    axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war%22")
      .then(resp => {
        console.log(resp.data.Search)
        this.setState({ movies: resp.data.Search })
      })

  }
  render() {
    return (
      <div>
        <div className='movies_container'>
          {
            this.state.movies.map((movie) => {
              return (
                <div key={movie.Id} className="movie">
                  <div className='image-wrapper'>
                    <img src={movie.Poster} alt="" />
                    
                  </div>
                  <div className='details-wrapper'>
                    <p className='movie_name'>{movie.Title}</p>
                    <p className='movie_year'>{movie.Year}</p>
                  </div>
                  
                </div>
              )


            }


            )

          }

        </div>

      </div >
    )
  }
}

export default App
