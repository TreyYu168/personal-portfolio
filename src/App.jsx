import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='fade-in landing-page'>
        <div className='custom-container container'>
          <div className='row-cols-2'>
            <a href="https://react.dev">
              <img src={reactLogo} className="logo react" alt="React logo"/>
            </a>
          </div>
          <h1 className='target row-cols-2'>Trey Yu</h1>
          {/*<div className="card">*/}
          {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
          {/*    count is {count}*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
      </div>
    </>
  )
}

export default App
