/* styles */
import './form.css'

/* functional component */
import { useEffect, useState } from 'react'

/* Modals */
import FormT from '../../modals/template/list/form_temp'

function Form() {

  return (
    <div className='form theme--body-01'>
      <div className='theme--backdrop-01'></div>
      <div className='form--content'>

        {/* Temporary Form Title */}
        <h1>Sample Form Title</h1>
        <br></br>
        <br></br>
        {/* Temporary Form Title */}

      </div>
    </div>
  )
}

export default Form