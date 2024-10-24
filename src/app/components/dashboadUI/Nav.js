
import React from 'react'


export default function Nav({username}) {
  const handleLogout = () => {
    // localStorage.removeItem('token'); 
    
    // Remove the token from localStorage
    // router.push('/signin'); 
    // Redirect to the login page
  };
  return (
    <div className=' bg-blue-400 px-5 py-4 text-white flex items-center justify-between w-full' >
        
            <div className='' >logo</div>
            <div className='flex items-center justify-between gap-2' >
                <div className='h-[50px] w-[50px] rounded-full bg-white' ></div>
                <button className='font-medium' >Hello, <span className=' font-semibold italic' > {username} </span> </button>
            </div>
                <button onClick={handleLogout} >  LOGOUT</button>



       
    </div>
  )
}
