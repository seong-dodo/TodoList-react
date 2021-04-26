import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [username, changeUsername] = useState(['호랑이', '사자']);
  const [navbarOne, navbarTwo] = useState(false);
  
  
  return (
    <div>
      <div className="navBar">
        <h3>{ username[0] }님 저장소</h3>
        <ul>
          <button onClick={ ()=>{navbarTwo(true)} }>Todo List</button>
          <button onClick={ ()=>{navbarTwo(false)} }>Done List</button>
        </ul>
      </div>
    
    {
      navbarOne === true
       ? <TodoView />
       : <DoneView />
    }
    </div>
  );
}


function TodoView() {

  const [desc, setDesc] = useState("");
  const [currentId, setCurrentId] = useState(1);
  const [todoList, setTodoList] = useState([]);

  const onAdd = ()=>{
    const todo = { id: currentId, desc };
    setCurrentId(currentId + 1);
    setTodoList([...todoList, todo]);
  }
  const onDelete = (e)=>{
    const id = Number(e.target.dataset.id);
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  }
  

  return (
    <div>
      <div className="title">
        <h2>Todo List</h2>
      </div>
      <div className="inputCon">
        <input className="input" onKeyPress={onAdd} value={desc} type="text" placeholder="할 일을 입력하세요." onChange={e => setDesc(e.target.value)} />
        <button className="addBtn" onClick={ onAdd } >+</button>
      </div>
      <div className="list">
        <ul className="todoList">
          {
            todoList.map(todo => (
              <li key={todo.id}>
                <input className="checkedTodo" type="checkbox"></input>
                <span>{todo.desc}</span>
                <button data-id={todo.id} onClick={onDelete}>x</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

function DoneView() {
  return (
    <div>
      <div className="title">
        <h2>Done List</h2>
      </div>
      <div className="list">
        <ul className="doneList"></ul>
      </div>
    </div>
  )
}

export default App;
