/* styles */
import './home.css'

/* functional component */
import { useEffect, useState } from 'react'

function Home() {

  return (
    <div className='home'>
      <div className='home--backdrop'></div>
      <div className='home--content'>
        <h1>Welcome to ProtoForms</h1>
        <br></br>
        <p>ProtoForms is a web application that allows users to create and manage forms for various purposes. Whether you need to collect feedback, conduct surveys, or gather information, ProtoForms provides an intuitive interface to design and deploy your forms with ease.</p>
        <p>Get started by creating your first form and explore the features that ProtoForms has to offer!</p>
      </div>
    </div>
  )
}

export default Home