import React, { useCallback, useRef, useReducer } from "react";
import './App.scss';
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';

function createBulkTodos(){
  const array=[];
  for (let i =1; i<=2500 ; i++)
  {
    array.push({
      id:i,
      text: `Todo  ${i}`,
      checked:false
    })
  }
  return array;
}

function todoReducer (todos, action){
  switch(action.type){
    case 'INSERT': // add new
      //{type: 'INSERT' , todo:{ id: 1, text: 'todo', checked:false}}
      return todos.concat(action.todo)

    case 'REMOVE' : //delete
      //{type:'REMOVE' , id:1}
      return todos.filter(todo => todo.id !== action.id)
    
    case 'TOGGLE': //toggle
      return todos.map(todo =>
        todo.id === action.id ? {...todo, check: !todo.checked} : todo,)
    default :
      return todos;
  }
}

const App = ()=>{
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  //고윳값으로 사용될 id
  //ref 를 사용하여 변수 담기
  const nextId = useRef(2501);
  const onInsert = useCallback(
    text=>{
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      dispatch({type: 'INSERT', todo});
      nextId.current += 1;//nextId
    },
    [],
  )

  const onRemove = useCallback(
    id=>{
      dispatch({type: 'REMOVE', id});
    },
    [],
  )

  const onToggle = useCallback(
    id =>{
      
      dispatch({type: 'TOGGLE', id});
    },[]
  )
  return <TodoTemplate>
    <TodoInsert onInsert = {onInsert}/>
    <TodoList todos = {todos} onRemove={onRemove} onToggle={onToggle}/>
  </TodoTemplate>
};
export default App;