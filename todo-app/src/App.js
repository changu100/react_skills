import React from "react";
import './App.scss';
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';


const App = ()=>{
  return <TodoTemplate>
    <TodoInsert/>
    <TodoList/>
  </TodoTemplate>
};
export default App;