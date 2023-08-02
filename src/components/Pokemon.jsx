import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Pokemon = () => {
    const [ data, setData ] = useState()
    const [ name, setName ] = useState()
    const [ weight, setWeight ] = useState()
    const [ number, setNumber ] = useState(1)
    
    let URL = `https://pokeapi.co/api/v2/pokemon/${number}`

    useEffect(()=>{
        axios.get(URL)
            .then((response)=>{
                console.log(response.data)
                setData(response.data)
                setName(response.data.name)
                setWeight(response.data.weight)
            }).catch((err)=>{
                console.log(err)
            })

    },[URL]);
    const handleClick = (e) =>{
        setNumber(e.target.value)
    }
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1>Enter a random number and find your pokemon ! </h1>
        <div className='flex flex-row'>
            <input 
                className='flex items-center justify-center' type="number"/>
            <button 
                onClick={handleClick} 
                className='ml-2 h-[40px] w-[120px] rounded-full bg-teal-400 text-white'>Search</button>
        </div>
        <h2>Name of the Pokemon: {name}</h2>
        <h2>Power: {data ? data.abilities.map((value, key)=>{
            return(
                <div key={key}>{value.ability.name}</div>
            )
        }) : ''}</h2>
        <h2>Weight : {weight} KG</h2>
        <div>
            <img
                className='w-[240px] h-[240px]' 
                src={data ? data.sprites.other.dream_world.front_default : "<p>Loading</p>"} alt="" />
        </div>
        
    </div>
  )
}

export default Pokemon