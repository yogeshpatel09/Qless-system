"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();

    // Validate mobile number
    if (!/^\d{10}$/.test(mobile)) {
      alert("Mobile number must be exactly 10 digits!");
      return;
    }

    const newUser = { name, email, mobile };

    // Retrieve existing data from localStorage or initialize as empty array
    let users = [];
    try {
      const storedData = localStorage.getItem("userSignupData");
      users = storedData ? JSON.parse(storedData) : [];
      if (!Array.isArray(users)) {
        throw new Error("Invalid data format");
      }
    } catch (error) {
      console.error("Invalid data format in localStorage. Resetting to an empty array.");
      users = [];
    }

    // Add new user to the array
    users.push(newUser);

    // Save updated array to localStorage
    localStorage.setItem("userSignupData", JSON.stringify(users));

    alert("User Signup Successful!");
    router.push("/"); // Redirect to home or dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6">Signup as User</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
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
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            pattern="\d{10}"
            title="Please enter exactly 10 digits"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
