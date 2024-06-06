"use client";

import React from "react";
import { useState } from "react";

const page = () => {
  const [tasks, setTasks] = useState<Array<string>>([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event: any) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask])
        setNewTask("")
    }
  };

  const deleteTask = (index: number) => {
    const  updatedTasks = tasks.filter((_, i) => index !== i);
    setTasks(updatedTasks)
  };

  const moveTaskUp = (index: number) => {
    if (index > 0){
        const updatedTasks: string[] = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = 
        [updatedTasks[index - 1], updatedTasks[index]]
        setTasks(updatedTasks)
    }
  };

  const moveTaskDown = (index: number) => {
    if (index < tasks.length -1){
        const updatedTasks: string[] = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = 
        [updatedTasks[index + 1], updatedTasks[index]]
        setTasks(updatedTasks)
    }
  };

  return (
    <main className="p-8 bg-gray-100 rounded-md text-black flex flex-col justify-center">
      <h1 className="text-4xl font-semibold text-center mb-6 mt-10">
        To-Do List App
      </h1>

      <div className="flex mb-4 text-2xl">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add task..."
          className="flex-grow p-2 border-b-2 border-blue-500 focus:outline-none"
        />
        <button
          onClick={addTask}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add
        </button>
      </div>

      <ol className="list-disc mb-10 text-2xl ml-6">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2">
            <div className="flex items-center">
              <span className="flex-grow">{task}</span>
              <div className="flex gap-4">
                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  Delete
                </button>
                <button
                  onClick={() => moveTaskUp(index)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  Move Up
                </button>
                <button
                  onClick={() => moveTaskDown(index)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  Move Down
                </button>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
};

export default page;
