// import React from 'react'
import { useSelector,useDispatch } from "react-redux"
import { ordered,restocked } from "./iceCreamSlice"
import { useState } from "react"

const IceCreamView = () => {
    const [value,setValue ] = useState(1)
    const numOfIcecreams=  useSelector((state)=> state.icecream.numOfIcecreams)
    const dispatch =  useDispatch()
    return (
    <div>
    <h2> Number of  icecream - {numOfIcecreams}</h2>
    <button onClick={()=> dispatch(ordered())}> Order icecream </button>
    <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))}></input>
    <button onClick={()=> dispatch(restocked(value))}> Restock icecream </button>
    </div>
  )
}

export default IceCreamView
