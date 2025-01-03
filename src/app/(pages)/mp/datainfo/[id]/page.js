'use client'

import { useRouter } from 'next/navigation';

const ItemDetail = () => {
  const router = useRouter();
  const { id } = router; // Access the dynamic parameter from the URL

  // Dummy data (You can replace this with data from an API or database)
  const dummyData = [
    { id: 1, name: "John Doe", image: "https://via.placeholder.com/150", description: "This is John Doe's profile." },
    { id: 2, name: "Jane Smith", image: "https://via.placeholder.com/150", description: "This is Jane Smith's profile." },
    { id: 3, name: "Alice Johnson", image: "https://via.placeholder.com/150", description: "This is Alice Johnson's profile." },
    { id: 4, name: "Bob Brown", image: "https://via.placeholder.com/150", description: "This is Bob Brown's profile." },
    { id: 5, name: "Chris Davis", image: "https://via.placeholder.com/150", description: "This is Chris Davis' profile." },
    { id: 6, name: "Ella Wilson", image: "https://via.placeholder.com/150", description: "This is Ella Wilson's profile." },
    { id: 7, name: "Frank Thomas", image: "https://via.placeholder.com/150", description: "This is Frank Thomas' profile." },
    { id: 8, name: "Grace Martinez", image: "https://via.placeholder.com/150", description: "This is Grace Martinez' profile." },
    { id: 9, name: "Henry Taylor", image: "https://via.placeholder.com/150", description: "This is Henry Taylor's profile." },
    { id: 10, name: "Ivy Anderson", image: "https://via.placeholder.com/150", description: "This is Ivy Anderson's profile." },
  ];

  // Find the item based on the `id`
  const item = dummyData.find(item => item.id === parseInt(id));

  if (!item) {
    return <p>Item not found!</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">{item.name}</h1>
      <div className="flex justify-center mb-6">
        <img
          src={item.image}
          alt={item.name}
          className="w-48 h-48 rounded-full object-cover"
        />
      </div>
      <p className="text-center">{item.description}</p>
    </div>
  );
};

export default ItemDetail;
