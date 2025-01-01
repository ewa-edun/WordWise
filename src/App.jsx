import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>WordWise</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Study!!
      </p>
    </>
  )
}

export default App

// about.jsx, dashboard.jsx, footer.jsx, signup.jsx, header.jsx, home.jsx, landing.jsx, quiz.jsx and their respective css files//