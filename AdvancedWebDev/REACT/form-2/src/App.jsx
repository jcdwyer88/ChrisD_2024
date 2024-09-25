import { useState } from 'react'
import { personObj, greeting } from './helper';
import './App.css'

function App() {

  // const [fname, setFname] = useState("Chris")
  // const [age, setAge] = useState(36)
  // const [pw, setPw] = useState("")

  const [person, setPerson] = useState(personObj);

  return (
    <form action="/getdata" method="get">
      <h1>{greeting}</h1>
      <label htmlFor="">
        First Name:
        <input type="text" name="" id="" />
      </label>
      <label htmlFor="">
        Age:
        <input type="number" name="" id="" />
      </label>
      <label htmlFor="">
        Password:
        <input type="password" name="" id="" />
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App
