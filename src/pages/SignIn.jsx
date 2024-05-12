import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import { signInSuccess } from '../redux/userSlice'
import OAuth from '../components/OAuth'

function SignIn() {

  const [formData,setFormData]= useState({})
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
  const handleChange = (e)=>
    {
        setFormData({
          ...formData,[e.target.id]:e.target.value,
        })
    }
     const handleSubmit = async (e)=>
      {
             e.preventDefault();
            // console.log('form submitted');
            const res = await fetch('/api/auth/signin',{
              method:'POST',
              headers:{
                'Content-Type':'application/json',
              },
              body:JSON.stringify(formData)
            });
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/');
            console.log(data);
      }
   // console.log(formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Login</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input type="email" name="" id="email" placeholder='Enter Email' className='border p-3 rounded-lg'onChange ={handleChange} />
        <input type="password" name="" id="password" placeholder='Enter Password' className='border p-3 rounded-lg'onChange ={handleChange} />
        <button className='bg-slate-700 text-white text-xl rounded-lg uppercase p-3 hover:opacity-95 disabled:opactiy-80'>Login</button>
        <OAuth/>
        
      </form>
      <div className='flex flex-row gap-2 mt-1.5'>
        <p className='font-semibold'>Don't have an account?</p>
        <Link to ="/sign-up">
       <span className='text-blue-700 font-semibold'>Sign Up</span>
        </Link>
      </div>
    </div>
  )
}

export default SignIn