//styles
import './body.css'
import Home from '../../pages/home/home.jsx'

//components

//functional component
import { useState } from 'react'


function body() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body'>
        <Home />
      </div>
    </>
  )
}

export default body