"use client";

import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleWorkLogin = () => {
    router.push('/Login/work'); // Redirect to Login for Work
  };

  const handleClientLogin = () => {
    router.push('/Login/client'); // Redirect to Login for Client
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Choose Login Type</h1>
        <button
          onClick={handleWorkLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mb-4"
        >
          Login for Work
        </button>
        <button
          onClick={handleClientLogin}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Login for Client
        </button>
      </div>
    </div>
  );
}
