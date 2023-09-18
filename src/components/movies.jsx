import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    console.log(movie);
    const movies = this.state.movies.filter((mov) => mov._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => this.handleDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  //   title: "Gone Girl",
  //   genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
  //   numberInStock: 7,
  //   dailyRentalRate: 4.5,

  // {this.state.movies.map((movie) => (
  //     <tr>
  //       <td>{movie.title}</td>
  //       <td>{movie.genre}</td>
  //       <td>{movie.numberInStock}</td>
  //       <td>{movie.dailyRentalRate}</td>
  //     </tr>
  //   ))}

  // table.table>thead>tr>th*44 press tab
  // tbodyd>tr>td*44
  //   <div>
  //         <h1>{this.getDisplayMessage()}</h1>
  //         <button
  //           //onClick={this.doHandleIncrement()}
  //           onClick={() => this.handleDelete({ id: 1 })}
  //           className="btn btn-secondary btn-sm"
  //         >
  //           Delete
  //         </button>
  //       </div>

  getDisplayMessage() {
    const { movies } = this.state;
    if (movies.length === 0) return "There are no movies in database";

    return "Showing " + movies.length + " movies in the database";
  }

  renderingMovieTable() {}
}

export default Movies;
