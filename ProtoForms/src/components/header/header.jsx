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
      <div className='header--b'></div>
      <div className='header--c'></div>
      <div className='header--div-icon'>
        <img className='header--icons' src={theme.icon} alt="Theme Icon" onClick={() => dispatch(toggleTheme())} />
        
      </div>
    </div>
  )
}

export default Header