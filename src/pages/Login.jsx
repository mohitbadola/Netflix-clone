import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [email , setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, logIn} = UserAuth()
  const navigate = useNavigate()
  const [error, setError] = useState();

  const handleSubmit =  async(e)=>{
    e.preventDefault()
    setError('')
    try{
      await logIn(email, password)
      navigate('/')
    }catch(error){
      console.log(error)
      setError(error.message)
    }
  }

  return (
    <div className=' w-full h-screen'>
      <img
      className=' hidden sm:block absolute w-full h-screen object-cover'
       src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
       alt='/' />
       <div 
       className=' bg-black/60 fixed top-0 left-0 w-full h-screen'>
       </div>
       <div className=' fixed w-full px-4 py-28 z-50'>
        <div className=' max-w-[400px] h-[550px] mx-auto bg-black/75 text-white'>
         <div className=' max-w-[320px] mx-auto py-16'>
           <h1 className=' text-3xl font-bold'>Sign In</h1>
           {error ? 
           <p className=' p-2 bg-red-400 my-2'>
            {error}</p>: null}
           <form 
           onSubmit={handleSubmit}
           className=' w-full my-6 flex flex-col py-4'>
            <input
            onChange={(e)=> setEmail(e.target.value)}
             className=' p-3 my-2 bg-gray-800 text-white rounded-3xl'
             type="email"
             placeholder='Email' 
             autoComplete='email'/>
            <input
            onChange={(e)=> setPassword(e.target.value)}
             className=' p-3 my-2 bg-gray-800 text-white rounded-3xl'
             type="password"
             placeholder='Password' 
             autoComplete='email'/>
             <button
              className=' my-6 py-3 bg-red-500 rounded-3xl cursor-pointer'>Sign In</button>
             <div className=' my-4 flex justify-between items-center text-base text-gray-600'>
             <p>
              <input 
               className=' mr-2' 
               type='checkbox'/>Remember Me</p>
             <p className='  '>Need Help?</p>
             </div>
             
             <p 
              className=' text-base text-gray-600'>
              New to Netflix?
              <Link to={'/signup'}>
              <button className=' text-xl text-white mx-1'>Sign up now.</button>
              </Link>
              </p>
             
           </form>
         </div>
        </div>
       </div>
    </div>
  )
}

export default Login