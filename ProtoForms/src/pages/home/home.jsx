/* styles */
import './home.css'

/* functional component */
import { useEffect, useState } from 'react'

/* Modals */
import ListT from '../../modals/template/list/list_temp'

function Home() {

  return (
    <div className='home'>
      <div className='home--backdrop'></div>
      <div className='home--content'>
        <h1>Welcome to ProtoForms</h1>
        <br></br>
        <br></br>
        <ListT />
      </div>
    </div>
  )
}

export default Home