/* styles */
import './list_temp.css'

/* functional component */
import { useEffect, useState } from 'react'

function ListT() {

  return (
    <div className='listT txt-unselectable'>
        <div className='listT--item'>List Item 1</div>
        <div className='listT--item'>List Item 2</div>
    </div>
  )
}

export default ListT