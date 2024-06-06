"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
  let [name, setName] = useState("")

  let updateName = (event: any) => {
    setName(event.target.value)
  }

  const [number, setNumber] = useState(1)

  let updateNumber= (event: any) => {
    setNumber(event.target.value)
  }

  return (
    <main className='flex justify-center items-center min-h-screen text-2xl'>

      <div className='flex flex-col justify-start items-start bg-slate-300 p-10 gap-5'>
        <input type="text" onChange={updateName} value={name} className='text-black'/>
        <div className='text-black'>Name: {name}</div>
      </div>

      <div className='flex flex-col justify-start items-start bg-slate-300 p-10 gap-5'>
        <input type="number" value={number} onChange={updateNumber} className='text-black' />
        <div className='text-black'>Quantity: {number}</div>
      </div>
      
    </main>
  )
}

export default page