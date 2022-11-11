import './App.css';
import TodoAdd from './components/todoAdd'
import TodoFilter from './components/todoFilter';
import TodoList from './components/todoList'
function App() {
return (
  <div className='App'>
    <h1 style={{color:"white"}}><i>GoMyCode Courses</i></h1>
    <TodoAdd />
    <TodoFilter />
    <TodoList/>
  </div>
)
}
export default App

