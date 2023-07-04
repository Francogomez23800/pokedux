import React from 'react'
import logo from '../statics/logo.svg'


const Nav = () => {
  return (
    <div className='w-full flex justify-center'>
        <img src={logo} alt="Pokedux" 
        className='w-[300px] m-10'/>
    </div>
  )
}

export default Nav