import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const[newTodo, setNewTodo] = useState('')

  const TodoItem = ({text}) => {
    return <li>{text}</li>
  }

  const handleChange = event => {
    setNewTodo(event.target.value)
    console.log(event);
  }

  const handleSubmit = event => {
    event.preventDefault()
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    setNewTodo('')
    console.log(newTodos);
  }

  const todoList = newTodos.map((todo, index) => {
    <li key={index} todo={todo} />
  })

  return (
    <>
      <h1>SImple to do list</h1>
      <form onSubmit={handleSubmit}>
        <input 
        className="todo-input"
        autoComplete="off"
        type="text"
        name="newTodo"
        placeholder="What needs to be dones?"
        onChange={handleChange}
        />
        <button className="save-button" type="submit">
        SAVE
        </button>
      </form>

      <div className="todo-content">
        <ol>
          {todoList}
        </ol>
      </div>
    </>
  )
}

export default App
