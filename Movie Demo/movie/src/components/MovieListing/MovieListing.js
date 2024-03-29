import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/MovieSlice'
import MovieCard from "../MovieCard/MovieCard"

export default function MovieListing() {
    const movies = useSelector(getAllMovies);

    let renderMovies = "";

    renderMovies =
        movies.Response === "True" ? (
            movies.Search.map((movie, index) => (
                <MovieCard key={index} data={movie} />
            ))
        ) : (
            <div className="movies-error">
                <h3>{movies.Error}</h3>
            </div>
        );

    return (
        // to display all the data we use useSelector
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">{renderMovies}</div>
            </div>
        </div>
    )
}
