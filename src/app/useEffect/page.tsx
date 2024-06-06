"use client"
import React, { use, useEffect, useState } from "react";

export default function page() {


  const [input, setInput] = useState("")

  useEffect(() => {
    console.log("re-render")
  }, [])

  return (
  
    <main>
      <div>{input}</div>

      <div>Use Effect</div>

      <input type="text" onChange={(e) => setInput(e.target.value)} className="text-black" />
    </main>
  
  );
}
