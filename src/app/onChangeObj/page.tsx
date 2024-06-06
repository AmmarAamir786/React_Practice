"use client"
import React, { useState } from 'react'

const page = () => {
    type User = {
        year: number,
        name: string,
        email: string
    }
    const user: User = {
        year: 1999,
        name: "John Doe",
        email: "johndoe@gmail.com"
    }

    const [data, setData] = useState(user)

    const handleName = (event: any) => {
        setData(p => ({...p, name: event.target.value}))
    }

    const handleYear = (event: any) => {
        setData(p => ({...p, year: event.target.value}))
    }

    const handleEmail = (event: any) => {
        setData(p => ({...p, email: event.target.value}))
    }

  return (
    <main className="flex gap-10 flex-col min-h-screen justify-center items-center text-2xl">
        <div>
            <p>Your name is {data.name}. You were born in {data.year} and your email is {data.email}</p>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <input type="text" value={data.name} onChange={handleName} placeholder='name' className='text-black p-2'/>
            <input type="text" value={data.year} onChange={handleYear} placeholder='year' className='text-black p-2'/>
            <input type="text" value={data.email} onChange={handleEmail} placeholder='email' className='text-black p-2'/>
        </div>
    </main>
  )
}

export default page