'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for App Router
import { jwtDecode } from 'jwt-decode';
import Nav from '../components/dashboadUI/Nav'; // Your Nav component

export default function Home() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const router = useRouter(); // Ensure useRouter is inside the component

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);

    if (!token) {
      console.log('Not logged in');
      router.push('/signin'); // Redirect to signin if no token
    } else {
      try {
        const decoded = jwtDecode(token);
        setUsername(decoded.userName); // Set the username once, inside useEffect
        console.log(`i am ${decoded.userName}`); // log the decoded username for debugging
      } catch (error) {
        console.log('Invalid token', error);
      }
    }
  }, [router]);

  return (
    <section className='h-screen'>
      {/* Pass the username as a prop to Nav */}
      <Nav username={username} />
      <h2 className=' text-4xl mt-[100px]'> hello  {username}</h2>
    </section>
  );
}