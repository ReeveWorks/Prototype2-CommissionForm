/* styles */
import './header.css'

/* functional component */
import { useState, } from 'react'
import { useSelector, useDispatch } from 'react-redux'

/* Redux Slice */
import { toggleTheme } from '../../states/slices/themeSlice'



function Header() {
  const [count, setCount] = useState(0)

  const theme = useSelector((state) => state.theme.currentTheme);
  const themelist = useSelector((state) => state.theme.themesList);
  
  const dispatch = useDispatch();

  function toggleTheme(mode) {
    dispatch(toggleTheme(!theme.themeSet === 'night'));
  }


  return (
    <>
      <div className='header'>
        
      </div>
    </>
  )
}

export default Header