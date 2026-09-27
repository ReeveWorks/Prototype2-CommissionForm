//Pages
import Body from './components/body/body.jsx'
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
      <Body />
      <Footer/>
    </div>
  )
}

export default App
