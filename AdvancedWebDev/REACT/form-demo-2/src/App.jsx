import { useState } from 'react'

function App() {
  const initPerson = {
    fname: "",
    lname: "",
    age: ""
  }
  const [personData, setPersonData] = useState(initPerson)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Sending data: ", personData);
    setPersonData(initPerson)
  }

  const handleChange = (event) => {
    setPersonData({...personData,  [event.target.name]: event.target.value})    
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name:
          <input type="text" name="fname" id="fname" value={personData.fname} onChange={handleChange} required minLength={3} maxLength={5} autoComplete='off' />
        </label>
        <br />
        <label htmlFor="lname">Last Name:
          <input type="text" name="lname" id="lname" value={personData.lname} onChange={handleChange} maxLength={5} autoComplete='off'/>
        </label>
        <br />
        <label htmlFor="age">Age: 
          <input type="number" name="age" id="age" value={personData.age} onChange={handleChange} min={21} max={99} />
        </label>
        <br /><br />
        <button>
          Submit
        </button>
      </form>
    </>
  )
}

export default App
