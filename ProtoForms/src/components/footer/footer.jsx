/* styles */
import './footer.css'

/* functional component */
import { useEffect, useState } from 'react'

function Footer() {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <div className={`footer ${isAtTop ? 'footer--visible' : 'footer--hidden'}`}>
        Footer
      </div>
      <div className={`footer ${isAtTop ? 'footer-v-bottom' : 'footer-h-bottom'}`}>
        Footer
      </div>
    </div>
  )
}

export default Footer