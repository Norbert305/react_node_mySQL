import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [data, setData] = useState([])
  //npm install
  //npm run dev
  //RUN XAMPP SQL Server

  useEffect(()=>{
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
    .catch(err => console.log(err));
  }, [])


  return (

<div style={{padding: "50px"}}>
  {data.map((d, index)=>
  (<div key={index}>
  <p>Name: <strong>{d.name}</strong></p>
  <p>Favorite Color: <strong>{d.favorite_color}</strong></p>
  <p>Age: <strong>{d.age}</strong></p>
  </div>
  ))}
</div>

  )
}

export default App
