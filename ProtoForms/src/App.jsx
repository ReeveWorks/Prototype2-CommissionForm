//Pages
import MainPage from './components/mainPage/mainPage.jsx'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'

//Styles
import './styles/global.css'
import './styles/index.css'

//Functions
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="indexApp">
      <Header />
      <MainPage />
      <Footer/>
    </div>
  )
}

export default App
