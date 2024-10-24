
"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import ProductCard from './components/ProductCard';
export default function Home() {
  
  const router = useRouter()
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
    if (!token && router.pathName !== '/' && router.pathName != '/sig' ) {
      console.log('not login');
      router.push('/signin')
      
      
    } 
  }, []);

  

  // const handleLogout = () => {
  //   localStorage.removeItem('token'); // Remove the token from localStorage
  //   router.push('/signin'); // Redirect to the login page
  // };

  return (
    <main className="flex h-screen flex-col items-center justify-center w-full">
      <Link href={'/signin'}>
        <button className="py-2 px-4 bg-red-500 text-white">
          this is home page
        </button> 
        {/* <button onClick={handleLogout} className='py-2 px-3 bg-green-700 text-white mx-3' > Log out </button> */}
      </Link>

     
    </main>
  );
}
