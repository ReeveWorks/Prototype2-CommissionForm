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

  function footerContent() {
    return (
      <div>
        Footer Test
      </div>
    );
  }

  return (
    <>
      <div className={`footer ${isAtTop ? 'footer--visible' : 'footer--hidden'}`}>
        {footerContent()}
      </div>

      <div className={`footer footer--bottom`}>
        {footerContent()}
      </div>
    </>
  )
}

export default Footer