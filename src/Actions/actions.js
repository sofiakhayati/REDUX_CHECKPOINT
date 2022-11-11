import { TODO_DELETE, TODO_CHECK, TODO_FILTER, TODO_ADD, TODO_SAVE, TODO_UPDATE } from "./actionTypes"
export const  TODO_delete = (id) => {
  return {
    type: TODO_DELETE,
    payload: id
  }
}
export const  TODO_check = (id) => {
    return {
      type: TODO_CHECK,
      payload: id
    }
  }
  export const  TODO_filter = (filterValue) => {
    return {
      type: TODO_FILTER,
      payload: filterValue
    }
  }
  export const  TODO_add = (newtodo) => {
    return {
      type: TODO_ADD,
      payload: newtodo
    }
  }
  export const  TODO_save = (todosave) => {
    return {
      type: TODO_SAVE,
      payload: todosave
    }
  }
  export const TODO_edit = (updated) => {
    return {
        type: TODO_UPDATE,
        payload: updated
    }
}
  
