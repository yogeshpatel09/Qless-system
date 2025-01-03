"use client"

import Link from "next/link";

export default function HomeSection() {
    return (
      <section className="text-center py-20 ">
        <h1 className="text-4xl font-bold mb-4">Welcome to QLess Management System</h1>
        <p className="text-xl mb-6">Streamline your queue management with our intuitive and efficient solution.</p>
        <Link href={'mp/datapage'} className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700">Get Started</Link>
      </section>
    );
  }
  