import React, { useState } from "react";
import TODO from "./TODOlist";
import './index.css'

function App() {

  let [item, setItem] = useState([])
  let [inputList, setinputList] = useState("")

  function inputEvent(e) {
    setinputList(e.target.value)
  }
  //leetcode 2285
  function addItem() {
    setItem((prev) => {
      return [...prev, inputList]
    })
    setinputList("")
  }

  function deleteItem(i) {
    setItem((prev) => {
      console.log(prev)
      return prev.filter((val, ind) => {
        return ind !== i
      })
    })
  }

  return (
    <>
      <div className='main_div' >
        <div className='centre_div'>
          <br />
          <h2>Todo list</h2>
          <br />
          <input type="text" placeHolder="Add Items" value={inputList} onChange={inputEvent} />
          <button onClick={addItem}>+</button>
          <ol>
            {
              item.map((val, ind) => {
                return <TODO

                  text={val}
                  key={ind}
                  id={ind}
                  onSelect={deleteItem}

                />

              })
            }
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;
