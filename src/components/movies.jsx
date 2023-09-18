import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    this.state.movies.pop();
    this.setState({ movies: this.state.movies });
  };

  render() {
    return (
      <div>
        <h1>{this.getDisplayMessage()}</h1>
        <button
          //onClick={this.doHandleIncrement()}
          onClick={() => this.handleDelete({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  getDisplayMessage() {
    const { movies } = this.state;
    if (movies.length === 0) return "There are no movies in database";

    return "Showing " + movies.length + " movies in the database";
  }

  renderingMovieTable() {}
}

export default Movies;
