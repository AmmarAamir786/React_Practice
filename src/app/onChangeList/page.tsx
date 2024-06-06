"use client"
import React, { useState } from 'react';

const Page = () => {

  const initialFoods: string[] = [];

  const [data, setData] = useState(initialFoods);
  const [newFood, setNewFood] = useState('');

  const addNewElement = () => {
    if (newFood.trim() !== '') {
      setData((foods) => [...foods, newFood]);
      setNewFood('');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-lg bg-gray-100 p-8 rounded-lg shadow-md text-black">
      <div className="text-4xl font-bold mb-6">Food List</div>
      <div className="flex w-full mb-4">
        <input
          type="text"
          placeholder="Enter new food"
          value={newFood}
          onChange={(e) => setNewFood(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={addNewElement}
          className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add
        </button>
      </div>
      <ul className="list-disc">
        {data.map((food, index) => (
          <li key={index} className="mb-2">
            {food}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Page;
