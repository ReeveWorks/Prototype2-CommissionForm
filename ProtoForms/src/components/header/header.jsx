/* styles */
import './header.css'

/* functional component */
import { useState, } from 'react'
import { useSelector, useDispatch } from 'react-redux'

/* Redux Slice */
import { toggleTheme } from '../../states/slices/themeSlice'



function Header() {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.theme);

  function consoleTest() {
    console.log('Current Theme:', theme.themeSet, '\nIcon:', theme.icon);
  }

  return (
    <div className='header'>
      <div className='header--a'></div>

      <div className='header--container-buttons-bottom'>
        <div className='header--div-icon'></div>
        <div className='header--div-icon'></div>
      </div>

      <div className='header--b'></div>

      <div className='header--container-buttons-top'>
        <div className='header--div-icon'>
          <img className='txt-unselectable' src={theme.icon} alt="Theme Icon" onClick={() => dispatch(toggleTheme())} />
        </div>
      </div>
    </div>
  )
}

export default Header