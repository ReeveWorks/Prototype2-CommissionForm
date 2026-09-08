//styles
import './mainPage.css'

//components

//functional component
import { useState } from 'react'


function mainPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mainPage'>
        Hello World
      </div>
    </>
  )
}

export default mainPage