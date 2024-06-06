"use client";
import React from "react";
import { useState } from "react";

const page = () => {
  const [cars, setCars] = useState<Array<{ year: number; make: string; model: string }>>([]);
  const [carYear, setCarYear] = useState(2023);
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    if (carMake.trim() !== "" && carModel.trim() !== "") {
      const newCar = {
        year: carYear,
        make: carMake,
        model: carModel,
      };

      setCars((c) => [...c, newCar]);

      setCarYear(2023);
      setCarModel("");
      setCarMake("");
    }
  };

  const handleRemoveCar = (index: number) => {
    setCars((c) => c.filter((_, i) => i !== index));
  };

  const handleYearChange = (event: any) => {
    setCarYear(event.target.value);
  };

  const handleMakeChange = (event: any) => {
    setCarMake(event.target.value);
  };

  const handleModelChange = (event: any) => {
    setCarModel(event.target.value);
  };

  return (
    <main className="flex flex-col justify-center items-center gap-8 min-h-screen text-lg text-white bg-gray-800 p-8">
      <h1 className="text-4xl font-bold mb-4">Car List</h1>
      <ul className="list-disc">
        {cars.map((car, index) => (
          <li
            key={index}
            onClick={() => handleRemoveCar(index)}
            className="cursor-pointer hover:text-red-500 transition duration-300"
          >
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <div className="flex gap-4 text-black">
        <input
          type="number"
          onChange={handleYearChange}
          value={carYear}
          placeholder="Year"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          onChange={handleMakeChange}
          value={carMake}
          placeholder="Make"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          onChange={handleModelChange}
          value={carModel}
          placeholder="Model"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleAddCar}
          className="bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Car
        </button>
      </div>
    </main>
  );
};

export default page;
