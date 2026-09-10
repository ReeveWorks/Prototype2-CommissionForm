//styles
import './header.css'

//components

//functional component
import { useState } from 'react'


function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        Hello World
      </div>
    </>
  )
}

export default Header