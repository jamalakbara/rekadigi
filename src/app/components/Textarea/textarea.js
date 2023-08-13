"use client"
import { useState } from "react"

const Textarea = () => {
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <textarea className="w-full h-40 bg-white rounded-md p-4 text-black" placeholder="Pesan" onChange={handleChange} value={value} />
  )
}

export default Textarea