import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {

  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value)
  }

  const listOfItems=()=>{
    setItems((olditems) => {
      return [...olditems, inputList];
    })
    setInputList("")
  }

  const deleteItem=(id)=>{
    // console.log("deleted")
    setItems((olditems)=>{
      return olditems.filter((arrElem, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <section className='main'>
      <div className='center'>
       <div className='header'>
        <p>TODO List</p>
        <div className='card'>
        <input type="text" placeholder="What would you like to do?" value={inputList} onChange={itemEvent}/>
        <br/>
        <button onClick={listOfItems} className='button'>Add</button>
        </div>
        <div className='listbody'>
        <ol>
            {/* {inputList} */}
          {items.map( (itemval, index)=>
          {
            return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItem}/>
          } )}
        </ol>
        </div>
       </div>
      </div>
    </section>
  );
}

export default App;
