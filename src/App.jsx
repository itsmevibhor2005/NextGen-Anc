import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(()=>{
      setCount((count) => count + 1)
    }, 1000)
  
    
  }, [])
  

  return (
    <>
      
      <h1>Assignment 1</h1>
      <div> Counter Value is {count}</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>

        
      </div>
      
    </>
  )
}

export default App
