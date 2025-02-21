import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    //iife 
    (async () => {
      const resp = await fetch('https://dummyjson.com/products');
      const data = await resp.json();
      setData(data.products)
    })();
  })

  return (
    <>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
      <hr />
      {data.map(d => <li key={d.id} >
        <em>{d.title}</em>
        <img src={d.thumbnail} alt="" />
      </li>)}
    </>
  )
}

export default App
