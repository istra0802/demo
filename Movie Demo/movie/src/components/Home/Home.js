import React from 'react'
import MovieListing from '../MovieListing/MovieListing'
import APIKey from '../../common/Apis/MovieApiKey'
import MovieApi from '../../common/Apis/MovieApi'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addMovies } from '../../features/movies/MovieSlice'

export default function Home() {
    const dispatch = useDispatch();
    const movieText = "Harry";
    console.log(movieText);
    useEffect(()=>{
        const fetchMovies = async () => {
            try {
              const response = await MovieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`);
              console.log(response);
              dispatch(addMovies(response.data));
            } catch (err) {
              console.log(err);
            }
          };

        fetchMovies();
    },[])
  return (
    <div>
        <div className='banner-listing'>
            <MovieListing />
        </div>

    </div>
  )
}
