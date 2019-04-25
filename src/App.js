import React from 'react';
import './App.css';

import movies from './movies';
import GenreList from './GenreList';
import MovieList from './MovieList';
import ActorList from './ActorList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: ''

    }
  }
  render() {
    return (
      <div className="App">
        <GenreList genres={Object.keys(movies)} handleClick={this._setGenre}/>
        {
          this.state.genre ? <MovieList 
          movies={Object.keys(movies[this.state.genre])}
          /> 
        : null
        }
        {
          this.state.movie ? <ActorList
          actors={movies[this.state.genre][this.state.movie]}
          /> 
        : null
        }

      </div>
    );
  }

  // Helper functions should be defined in the same class
  // where the state is
  _setGenre = (genre) => {
    console.log(`The childmcompenent said the genre is ${genre}`)
    // Instead of accepting the event object,
    // just accept the smallest piece fo information
    // needed to set state.
    this.setState({
      genre,
      movie: ''
    });
  }

  // Helper function for setting a movie
  _setMovie = (movie) => {
    this.setState({
      movie
    })
  }
}

export default App;