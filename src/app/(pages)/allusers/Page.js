"use client";

import { useEffect, useState } from "react";

export default function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all data from localStorage
    const storedData = JSON.parse(localStorage.getItem("workSignupData")) || [];
    setUsers(storedData);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Registered Users</h1>
      {users.length === 0 ? (
        <p className="text-gray-600">No users found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-start"
            >
              <p className="font-bold text-lg text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-600">{user.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}