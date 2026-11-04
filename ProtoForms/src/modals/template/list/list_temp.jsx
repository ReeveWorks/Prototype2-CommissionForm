/* styles */
import './list_temp.css'

/* functional component */
import { useEffect, useState } from 'react'

function ListT() {

  return (
    <div className='listT'>
      <div className='listT--item'>
        <div className='listT--item-img'>
          <img src='path/to/image.jpg' alt='Item Image' />
        </div>
        <div className='listT--item-title'>
          Item Title
        </div>
      </div>
      <div className='listT--item'>
        List Item 2
      </div>
      <div className='listT--item'>
        List Item 3
      </div>
      <div className='listT--item'>
        List Item 4
      </div>
      <div className='listT--item'>
        List Item 5
      </div>
      <div className='listT--item'>
        List Item 6
      </div>
      <div className='listT--item'>
        List Item 7
      </div>
      <div className='listT--item'>
        List Item 8
      </div>
      <div className='listT--item'>
        List Item 9
      </div>
      <div className='listT--item'>
        List Item 10
      </div>
    </div>
  )
}

export default ListT