import React, { useState } from 'react'

export default function Contact() {

  const [name, setName] = useState("Initial");

  return (
    <div>
      <form action="">
        <div>
          <input type="text" name="name" id="" placeholder='John Doe' onChange={(e) => setName(e.target.value)} />
          <input type="email" name="email" id="" placeholder='johndeo@gmail.com' />
          <input type="password" name="password" id="" placeholder='**********' />

          <button type="submit" onClick={() => console.log(name)}>Submit</button>
        </div>
      </form>
      <p>{name}</p>

    </div>
  )
}
