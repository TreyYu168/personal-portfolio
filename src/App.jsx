import './App.css'
import PersonCard from "./components/PersonCard.jsx";

function App() {

  return (
    <>
      <div className='landing-page'>
        <div className='custom-container grid'>
            <div>
                <PersonCard></PersonCard>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
