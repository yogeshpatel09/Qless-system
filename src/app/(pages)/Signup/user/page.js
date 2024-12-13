"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState(""); // State for password
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();

    // Validate password: ensure at least 6 characters
    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    const newUser = { name, email, mobile, password };

    // Retrieve existing data from localStorage or initialize as an empty array
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

    // Check if the user already exists based on email
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      alert("An account with this email already exists. Redirecting to login page.");
      router.push("/login"); // Redirect to login page
      return;
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
            placeholder="Enter your name"
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
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            placeholder="Enter your mobile number"
            onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))} // Allow only numeric input
            maxLength="10"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter a strong password"
            onChange={(e) => setPassword(e.target.value)}
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
