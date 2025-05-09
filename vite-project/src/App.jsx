import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
      setCount(count + 1) 
  };
 
  const Decrement = () => {
    setCount(count - 1) 
};

const Reset = () => {
  setCount(0)
}

  
  return (
    <>
      <div>
          <h2>
            Counter : {count}
          </h2>
          <div>
            <button onClick={increment} >+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
          </div>
      </div>
    </>
  )
}

export default App
