import { useState } from 'react'
import './App.css'
import foto1 from './assets/foto1.jpeg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container'>
      <img src={foto1} alt="" />
      <h1>Jessica Handall</h1>
      <h4>London, United Kingdom</h4>
      <p>"Front-end developer and avid reader"</p>

      <button>GitHub</button>
      <button>Frontend Mentor</button>
      <button>Linkedin</button>
      <button>Twitter</button>
      <button>Instagram</button>
     </div>
    </>
  )
}

export default App
