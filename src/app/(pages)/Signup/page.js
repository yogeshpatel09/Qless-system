"use client";

import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const handleUserSignup = () => {
    router.push("/Signup/user"); // Redirect to User Signup
  };

  const handleWorkSignup = () => {
    router.push("/Signup/work"); // Redirect to Work Signup
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-purple-500">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-white">Welcome to Qless!</h1>
        <p className="text-lg text-white mt-2">
          Connect with Hospitals or other offices .
        </p>
      </header>

      <main className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-4xl">
        {/* User Signup Card */}
        <div className="flex-1 flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <img
            src="/user.png"
            alt="User Icon"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Signup as a User
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Book appointments, manage schedules, and get real-time updates.
          </p>
          <button
            onClick={handleUserSignup}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>

        {/* Work Signup Card */}
        <div className="flex-1 flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <img
            src="/work.png"
            alt="Work Icon"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Signup for Work
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Connect with organizations, find opportunities, and grow your career.
          </p>
          <button
            onClick={handleWorkSignup}
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
          >
            Join Now
          </button>
        </div>
      </main>
    </div>
  );
}
