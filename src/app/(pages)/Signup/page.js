"use client";

import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();

  const handleUserSignup = () => {
    router.push('/Signup/user'); // Redirect to User Signup
  };

  const handleWorkSignup = () => {
    router.push('/Signup/work'); // Redirect to Work Signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Choose Signup Type</h1>
        <button
          onClick={handleUserSignup}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mb-4"
        >
          Signup as User
        </button>
        <button
          onClick={handleWorkSignup}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Signup for Work
        </button>
      </div>
    </div>
  );
}
