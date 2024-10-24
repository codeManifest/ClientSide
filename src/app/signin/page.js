"use client"; // Ensure this is at the very top of the file

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { jwtDecode } from "jwt-decode";


export default function Page() {
  const router = useRouter();

  const [formdata, setFormdata] = useState({
    userName: "",
    password: "",
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
    const ApiUrl = "http://localhost:4000/api/users/login";

    try {
      const response = await fetch(ApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || "Something went wrong!");
      }

      // Log the response to check its structure
      const data = await response.json();
      console.log("API Response:", data);

      // Check if the token is present in the response
      const { token } = data;
      if (!token) {
        throw new Error("Token not found in the API response");
      }

      // Decoding the JWT to get user details
      const decodedToken = jwtDecode(token);

      const userName = decodedToken.userName;

      // Save the token and user details in localStorage (or sessionStorage for temporary storage)
      localStorage.setItem("token", token);
      localStorage.setItem("username", userName);

      // Redirect to the dashboard or another protected route
      router.push("/dashboard");

      // Reset form state
      setFormdata({
        userName: "",
        password: "",
      });

      setError(null);
      setSuccess("Login successful!");
    } catch (err) {
      console.error("Error:", err.message); // Log the error for debugging
      setError(err.message);
      setSuccess(null);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        action=" "
        onSubmit={handleSubmit}
        className="flex flex-col w-[30%]"
      >
        <h1 className="text-xl text-center my-5">Sign In</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}

        <input
          className="px-3 py-2 m-2 rounded-xl border outline-dotted text-black"
          type="text"
          placeholder="Enter UserName"
          name="userName"
          onChange={handleChange}
          value={formdata.userName}
        />
        <input
          className="px-3 py-2 m-2 rounded-xl border outline-dotted text-black"
          type="password"
          placeholder="Enter your Password"
          name="password"
          onChange={handleChange}
          value={formdata.password}
        />
        <button className="px-3 py-2 m-2 text-white rounded-xl bg-green-600">Sign In</button>
        <Link className="text-black text-center" href="/signup">
          Go to signup
        </Link>
      </form>
    </div>
  );
}
