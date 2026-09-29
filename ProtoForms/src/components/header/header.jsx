/* styles */
import './header.css'

/* functional component */
import { useState, } from 'react'
import { useSelector, useDispatch } from 'react-redux'

/* Redux Slice */
import { toggleTheme } from '../../states/slices/themeSlice'



function Header() {
  const [count, setCount] = useState(0)

  // const theme = useSelector((state) => state.theme.currentTheme);
  // const themelist = useSelector((state) => state.theme.themesList);

  // const dispatch = useDispatch();

  return (
    <div className='header'>
      <div className='header--a'></div>
      <div className='header--b'> Icon </div>
      <div className='header--c'> Header </div>
    </div>
  )
}

export default Header