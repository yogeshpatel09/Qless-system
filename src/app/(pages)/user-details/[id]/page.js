"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function UserDetails() {
  const { id } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch all users from localStorage
    const storedData = JSON.parse(localStorage.getItem("workSignupData")) || [];
    const selectedUser = storedData[id]; // Get the user based on the index
    setUser(selectedUser);
  }, [id]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Loading user details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center bg-gray-100 p-6 gap-8">
      {/* User Details Section */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2">
        <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
        <p className="text-gray-700 mb-4">
          <strong>Description:</strong> {user.description}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> {user.email || "N/A"}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Mobile:</strong> {user.mobile || "N/A"}
        </p>
        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          onClick={() => router.push("/users")}
        >
          Back to All Users
        </button>
      </div>

      {/* 3D Robot Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="https://source.unsplash.com/400x400/?robot,3d" // Replace with your robot image
          alt="3D Robot Avatar"
          className="w-80 h-80 object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}
