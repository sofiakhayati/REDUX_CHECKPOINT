import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux'
import { TODO_edit, TODO_add } from '../Actions/actions'
import './todoAdd.css'
function TodoAdd() {
  const dispatch = useDispatch()
  const save = useSelector((state) => state.todo.save)
  const [input, setInput] = useState('')
  
useEffect(
  () => {if (save) setInput(save.title)}, [save]
)
  // const handleChange = (elt) => {
  //   setInput(elt.target.value)
  // }
  
  return (
    <div className='todoadd'>
        <input value={input} name='input' type="text" placeholder="add todo" onChange={(e) => setInput(e.target.value)}/>
        <button onClick={() =>{(save) ? dispatch(TODO_edit(input)): dispatch(TODO_add(
          {
            id: uuidv4(),
            title: input,
            isDone: false
          }
        ))
        setInput('')
        }}>
        {save ? "Update" : "Add"}
        </button>
    </div>
  )
}

export default TodoAdd