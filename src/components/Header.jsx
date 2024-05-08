import React from 'react'
import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-slate-200 shadow-md '>
       <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
       <h1 className='font-bold text-sm sm:text-3xl flex flex-wrap'>
            <span className='text-slate-500'>Royal Estate</span>
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='Search' className='bg-transparent focus:outline-none w-24 sm:w-64 text-xl' />
            <FaSearch className='text-slate-600 text-xl '/>
        </form>
        <ul className='flex gap-6 text-xl text-black cursor-pointer '>
          <Link to = "/"><li className='hidden sm:inline '>Home</li></Link>  
          <Link to = "/about">  <li className='hidden sm:inline'>About</li></Link>
          <Link to = "/sign-in">  <li>Login</li></Link>
        </ul>
       </div>
    </header>
  )
}

export default Header