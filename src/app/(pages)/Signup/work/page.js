"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WorkSignup() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();

    // Validate mobile number
    if (!/^\d{10}$/.test(mobile)) {
      alert("Mobile number must be exactly 10 digits!");
      return;
    }

    // Validate password
    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    const newEntry = {
      name,
      description,
      email,
      mobile,
      password,
    };

    // Retrieve existing data from local storage or initialize as an empty array
    const existingData = JSON.parse(localStorage.getItem("workSignupData")) || [];

    // Check if the email already exists
    const existingUser = existingData.find((user) => user.email === email);
    if (existingUser) {
      alert("An account with this email already exists. Redirecting to login page.");
      router.push("/login"); // Redirect to login page
      return;
    }

    // Add the new entry to the array
    const updatedData = [...existingData, newEntry];

    // Store the updated array back in local storage
    localStorage.setItem("workSignupData", JSON.stringify(updatedData));

    alert("Work Signup Successful!");
    router.push("/"); // Redirect to home or dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6">Signup for Work</h1>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="mobile" className="block text-gray-700">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))} // Restrict to digits only
            maxLength="10" // Limit to 10 characters
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description for Work
          </label>
          <textarea
            id="description"
            placeholder="Enter a description for your work"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Signup
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => router.push("/login")} // Redirect to login page
          >
            Login 
          </span>
        </p>
      </form>
    </div>
  );
}
