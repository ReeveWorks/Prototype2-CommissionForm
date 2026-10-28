/* styles */
import './list_temp.css'

/* functional component */
import { useEffect, useState } from 'react'

function ListT() {

  return (
    <div className='listT'>
      <div className='listT--item'>
        <div className='listT--item-bg'></div>
        <div className='listT--item-content'>
          <h3>List Item 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <img src='https://i.imgur.com/b7Z2cnT.jpeg' alt='list item 1' />
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