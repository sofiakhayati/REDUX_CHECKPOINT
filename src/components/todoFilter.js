import React from "react";
import { useDispatch } from "react-redux";
import {TODO_filter} from '../Actions/actions'
import './todoFilter.css'
function TodoFilter() {
  const dispatch = useDispatch()
  const handleChange = (elt) => {
    dispatch(TODO_filter(elt.target.value))
  }
  return (
    <div className="todofilter">
      <label for="No-Filtre">No Filter</label>
      <input type="radio" name="filterTODO" value="No-Filtre" onChange={handleChange}/>
      <br />
      <label for="Done">Done</label>
      <input type="radio" name="filterTODO" value="Done" onChange={handleChange}/>
      <br />
      <label for="Not_Done">Not Done</label>
      <input
        type="radio"
        name="filterTODO"
        value="Not_Done"
        onChange={handleChange}
      />
    </div>
  );
}

export default TodoFilter;
