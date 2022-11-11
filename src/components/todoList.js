import React from "react";
//import TodoFilter from './todoFilter';
import {useDispatch, useSelector} from 'react-redux'
import {TODO_check, TODO_delete, TODO_save} from '../Actions/actions'
import './todoList.css'
function TodoList() {

const todos = useSelector((state) => state.todo.initialState)
const toFilter = useSelector((state) => state.todo.toFilter)
const dispatch = useDispatch()

               /********************************** */
               const filterState = (todos, toFilter) => {
                switch (toFilter) {
                  case "Done":
                    return todos.filter((elt) => elt.isDone)
                  case "Not_Done":
                      return todos.filter((elt) => !elt.isDone)
                  default:
                    return todos
                }
              }
               /********************************** */

const finalFilterToDo = filterState (todos, toFilter)

  return (
        <div className="todolist">
          {finalFilterToDo.map(
            (elt) => 
          <div key={elt.id} className="list">
            
            <h1 className="element">{elt.title}</h1>
            <button onClick={() => dispatch(TODO_delete(elt.id))}>Delete</button>
            <button onClick={() => dispatch(TODO_check(elt.id))}>{elt.isDone? "Done": "Not Done"}</button>
            <button onClick={() => dispatch(TODO_save(elt))}>Edit</button>
            
          </div>
          )
          } 
        </div>
  );
}

export default TodoList
