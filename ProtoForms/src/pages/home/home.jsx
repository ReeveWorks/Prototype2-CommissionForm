/* styles */
import './home.css'

/* functional component */
import { useEffect, useState } from 'react'

/* Modals */
import ListT from '../../modals/template/list/list_temp'
import FormsList from '../../modals/formsList/formsList'

function Home() {

  return (
    <div className='home theme--body-01'>
      <div className='theme--backdrop-01'></div>
      <div className='home--content'>

        {/* Temporary Home Title */}
        <h1>Welcome to ProtoForms</h1>
        <br></br>
        <br></br>
        {/* Temporary Home Title */}


        {/* <ListT /> */}
        <FormsList />
        
      </div>
    </div>
  )
}

export default Home