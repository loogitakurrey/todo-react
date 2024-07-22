import { useState, useEffect} from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
const [todos, setTodos] = useState([])
const [newTodo, setNewTodo] = useState('');

function persistData(newList){
  setTodos(localStorage.setItem('todos', JSON.stringify({todos: newList})));
}

function handleAddTodo(newTodo){
  const newTodoList = [...todos, newTodo];
  persistData(newTodoList);
  setTodos(newTodoList);
}
function handleDeleteTodo(index){
  const newTodoList = todos.filter((todo, todoIndex) => {
    return todoIndex != index;
  })
  persistData(newTodoList);
  setTodos(newTodoList)
}
function handleEditTodo(index){
  const editTodo = todos[index];
  setNewTodo(editTodo);
  handleDeleteTodo(index);
}
useEffect(() => {
  if (!localStorage) {
    return
  }

  let localTodos = localStorage.getItem('todos')
  if (!localTodos) {
    return
  }

  console.log(localTodos)
  localTodos = JSON.parse(localTodos).todos
  setTodos(localTodos)

}, [])
  return (
    <main>
      <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} handleAddTodo={handleAddTodo}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </main>
  )
}

export default App
