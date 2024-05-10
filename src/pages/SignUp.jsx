import React from 'react'
import {Link} from 'react-router-dom'

function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4 '>
        <input type="text" name="" id="username" placeholder='Enter Username' className='border p-3 rounded-lg' />
        <input type="text" name="" id="email" placeholder='Enter Email' className='border p-3 rounded-lg' />
        <input type="text" name="" id="password" placeholder='Enter Password' className='border p-3 rounded-lg' />
        <button className='bg-slate-700 text-white text-xl rounded-lg uppercase p-3 hover:opacity-95 disabled:opactiy-80'>Sign up</button>
      </form>
      <div className='flex flex-row gap-2 mt-1.5'>
        <p className='font-semibold'>Have an account?</p>
        <Link to ="/sign-in">
       <span className='text-blue-700 font-semibold'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp