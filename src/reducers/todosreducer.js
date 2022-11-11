import { v4 as uuidv4 } from 'uuid';
import { TODO_ADD, TODO_CHECK, TODO_DELETE, TODO_UPDATE, TODO_FILTER, TODO_SAVE } from '../Actions/actionTypes';
const initialState = [
    {
        id: uuidv4(),
        title:"Web Development: WEB 1",
        isDone: false
    },
    {
        id: uuidv4(),
        title:"FRONT END : REACT",
        isDone: false
    },
    {
        id: uuidv4(),
        title:"BACK END : NODE JS...",
        isDone: false
    }
]

 function Todosreducer(state={save: null, toFilter:"No-Filtre", initialState}, action) {
  switch (action.type) {
    case TODO_DELETE:
        return {
            ...state, initialState:[...state.initialState.filter(elt => elt.id !== action.payload)]
        }
    case TODO_CHECK:
        return {
            ...state, initialState: state.initialState.map(
                (elt) => elt.id === action.payload ? {...elt, isDone: !elt.isDone} : elt
            )
        }
    case TODO_FILTER:
        return {
        ...state, toFilter: action.payload
        } 
    case TODO_ADD:
        return {
        ...state, initialState:[...state.initialState, action.payload]
        }
    case TODO_SAVE:
        return {
        ...state, save: action.payload
        }
    case TODO_UPDATE:
        return {
            save:null,
            initialState: state.initialState.map(
            (elt) => elt.id === state.save.id ? {...elt, title: action.payload} : elt)
            }

    default:
        return state

  }
}
export default Todosreducer
