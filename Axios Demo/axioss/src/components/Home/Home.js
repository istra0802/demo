import React from 'react';
import axios from 'axios';
import baseURL from '../../axios/axiosApi/AxiosApi';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { addPosts } from '../../features/List/ListSlice';
import Listing from '../Listing/Listing';

export default function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${baseURL}?userId=1`).then((response) => {
            dispatch(addPosts(response.data));
          console.log(response)
        });
      }, [ ]);
  return (
    <div>
      <Listing/>
    </div>
  )
}
