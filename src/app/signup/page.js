'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [formdata, setFormdata] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ApiUrl = 'http://localhost:4000/api/users/register';

    try {
      const response = await fetch (ApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong!');
      }

      console.log(result);

      // Reset the form data
      setFormdata({
        userName: '',
        email: '',
        password: '',
      });

      setError(null); // Clear any previous errors
      setSuccess('Registration successful!'); // Set success message
    } catch (err) {
      setError(err.message);
      setSuccess(null); // Clear any previous success messages
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="flex flex-col w-[30%]">
          <h1 className="text-xl text-center my-5">Sign Up</h1>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <input
            className="px-3 py-2 m-2 rounded-xl text-black"
            type="text"
            name="userName"
            onChange={handleChange}
            value={formdata.userName}
            placeholder="Enter your Name"
          />
          <input
            className="px-3 py-2 m-2 rounded-xl text-black"
            type="email"
            name="email"
            onChange={handleChange}
            value={formdata.email}
            placeholder="Enter your Email"
          />
          <input
            className="px-3 py-2 m-2 rounded-xl text-black"
            type="password"
            name="password"
            onChange={handleChange}
            value={formdata.password}
            placeholder="Enter your Password"
          />
          <button type="submit" className="px-3 py-2 m-2 rounded-xl bg-green-600">
            Sign Up
          </button>
          <Link className="text-white text-center" href="/signin">
            Go to sign in
          </Link>
        </form>
      </div>
    </>
  );
}
