/* styles */
import './footer.css'

function Footer() {
  let value = window.scrollY;

  const handleScroll = () => {
    value = window.scrollY;
    console.log(value);
  }

  return (
    <div className='footer'>
      Footer
      <button onClick={handleScroll}>Check Value</button>
    </div>
  )
}

export default Footer