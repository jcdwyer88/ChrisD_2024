// foundation
import Child from "./components/child";

const App = () => {
  let children = ["Johnny", "Jamie", "Jessie", "Caleb", "Zack"]
  children = children.sort().reverse();
  let newArray = children.map((kid, index) => {
    return <Child key={index} fname={kid}/>
  })
  return (
    // fragment with no default formatting <>
    <> 
      <h1>My kids are: </h1>
      {newArray}
    </>
  )
}

export default App; 