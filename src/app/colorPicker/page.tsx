"use client"


import React, { useState } from 'react'

const page = () => {

    const [color, setColor] = useState("#000000")

    let changeColor= (event: any) => {
        setColor(event.target.value)
    }

  return (
    <main className='flex flex-col justify-center items-center gap-5 min-h-screen text-2xl text-black bg-gray-100'>
      <div className="text-4xl font-bold text-center mb-4 ">Simple Color Picker App</div>
      <div className='flex justify-center items-center flex-col p-8 rounded-lg shadow-lg bg-white'>
        <div className="text-xl font-semibold mb-4">Selected Color:</div>
        <div className="rounded-full h-80 w-80 mb-4" style={{ backgroundColor: color }}></div>
        <div className="text-gray-700">{color}</div>
      </div>
      <input
        type="color"
        value={color}
        onChange={changeColor}
        className="mt-6 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
    </main>
  )
}

export default page