import { useState, useEffect } from 'react'
import './App.css'
import PersonCard from "./components/PersonCard.jsx";
import bgImage from './assets/Landing-2.jpeg';

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = bgImage
    img.onload = () => setLoaded(true)
  }, [])

  return (
    <>
      <div className={`landing-page ${loaded ? 'content-visible' : 'content-hidden'}`} style={{ backgroundImage: `url(${bgImage})` }}>
        <div className={`custom-container grid ${loaded ? 'content-visible' : 'content-hidden'}`}>
            <div>
                <PersonCard></PersonCard>
            </div>
            <div className='arrow-container'>
                <div className='arrow-down'></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
