import {combineReducers} from "redux"
import Todosreducer from "./todosreducer"
export const rootReducer = combineReducers({todo: Todosreducer})