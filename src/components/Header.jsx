import React from 'react'
import Logo from '../assets/pokemon.png'

const Header = () => {
  return (
    <div className='flex justify-center items-center p-10'>
        <img src={Logo} alt="" />
    </div>
  )
}

export default Header