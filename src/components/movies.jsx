import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((mov) => mov._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.movies;
    const { movies: allMovies, pageSize, currentPage } = this.state;

    const movies = paginate(allMovies, currentPage, pageSize);
    console.log(movies);

    if (count === 0) return <p>There are no movies in the database.</p>;

    return (
      // or put it in React.Fragment
      <div>
        <p>Showing {movies.length} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
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
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
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
