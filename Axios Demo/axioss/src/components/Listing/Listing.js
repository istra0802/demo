import React from 'react'
import { useSelector } from 'react-redux';
import Card from "../Card/Card"
import { getAllLists } from '../../features/List/ListSlice';

export default function Listing() {

    const lists = useSelector(getAllLists);

    let renderLists = " ";

    renderLists = lists.Response === "True" ? (
       lists.Search.map((list,id)=>(
        <Card key={id} data ={list} />
       ))
    ):(
        <h3> {lists.Error}</h3>
    )
  return (
    <div>
      <h2>{renderLists}</h2>
    </div>
  )
}
