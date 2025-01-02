"use client"
import React from 'react';
import Link from 'next/link';
import { ReactTyped } from 'react-typed';  // Try using the named import


const dummyData = [
  { id: 1, name: "Hospital", image: "/hospital.png" },
  { id: 2, name: "college", image: "/college.png" },
  { id: 3, name: "govt offices", image: "/govt.png" },
  { id: 4, name: "society", image: "/society.png" },
  { id: 5, name: "railway", image: "/railway.jpg" },
  { id: 6, name: "Ella Wilson", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Frank Thomas", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Grace Martinez", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Henry Taylor", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Ivy Anderson", image: "https://via.placeholder.com/150" },
];

const DummyPage = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <ReactTyped
          strings={['Qless-management system', 'Efficient Queue Management', 'Transforming Processes']}
          typeSpeed={100} // Typing speed in milliseconds
          backSpeed={50}  // Backspace speed in milliseconds
          backDelay={1000} // Delay before typing next string
          loop={true} // Loop through the strings indefinitely
          className="text-2xl font-semibold text-red-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dummyData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden text-center flex flex-col items-center p-8 transform transition-transform duration-500 hover:scale-110"
            style={{ backgroundImage: `url(${'/bg.png'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <Link href={`datainfo/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                className="object-cover mb-4 rounded-full w-36 h-36"
              />
              <h2 className="text-lg font-semibold">{item.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DummyPage;
