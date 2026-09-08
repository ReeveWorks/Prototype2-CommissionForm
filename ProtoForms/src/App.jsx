//Pages
import MainPage from './components/mainPage/mainPage.jsx'

//Styles
import './styles/global.css'
import './styles/index.css'

//Functions
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainPage />
    </>
  )
}

export default App
