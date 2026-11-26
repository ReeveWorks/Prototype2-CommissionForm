//styles
import './body.css'

//pages
import Home from '../../pages/home/home.jsx'
import Form from '../../pages/form/form.jsx'

//components

//functional component
import { useState } from 'react'


function body() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body'>
        {/* <Home /> */}
        <Form />
      </div>
    </>
  )
}

export default body