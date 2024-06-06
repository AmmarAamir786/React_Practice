"use client";
import React from "react";
import { useState } from "react";
import Mybutton from "@/components/Mybutton";

// Updates the display without refreshing

export default function page() {
  let [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
    console.log("nice");
  };

  const reset = () => {
    setCounter((counter = 0));
    console.log("nice");
  };

  const dec = () => {
    setCounter(counter >= 1 ? counter - 1 : counter);
    console.log("nice");
  };

  const incrementByTwo = () => {
    setCounter(c => c + 1),
    setCounter(c => c + 1)
  }

  return (
    <main className="flex gap-10 flex-col min-h-screen justify-center items-center">
      <div className="text-lg">{counter}</div>
      <div className=" flex justify-center items-center gap-5">
        <button
          onClick={increment}
          className="bg-slate-500 px-5 py-3 rounded-3xl w-72"
        >
          Increase The count
        </button>
        <button
          onClick={reset}
          className="bg-slate-500 px-5 py-3 rounded-3xl w-72"
        >
          Reset
        </button>
        <button
          onClick={dec}
          className="bg-slate-500 px-5 py-3 rounded-3xl w-72"
        >
          Decrese The Count
        </button>
        <button
          onClick={incrementByTwo}
          className="bg-slate-500 px-5 py-3 rounded-3xl w-72"
        >
          increment By Two
        </button>
      </div>
    </main>
  );
}
