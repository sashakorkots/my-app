import React, { Component, useEffect, useState } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import TodoListSidebar from './components/TodoListSidebar';
import ListTasks from './components/ListTasks';
import NewTaskForm from './components/NewTaskForm';


function App() {
  const [currentlist, setCurrentlist] = useState(1)
  const [lists, setLists] = useState([]) 

  useEffect(() => {
    const taskListEndpoint = `http://localhost:5000/api/ToDoLists/lists`;
    fetch(taskListEndpoint)
      .then(response => response.json())
      .then(setLists)
  },[])
  const newTask = (task) => {
    console.log(task)
    const newlist = lists.slice()
    newlist.find(m => m.myListId == currentlist).tasks.push(task)
    setLists(newlist)
      
  }
  const selectList = (list) => {
    console.log(list)
    setCurrentlist(list.myListId)
  }
  /* const removeTask = (task) => {
    const tasks = lists.find(m => m.myListId == currentlist).tasks
    tasks.splice(tasks.find(t => t.myTaskId == task.id),1)
    const newlist = lists.slice()
    newlist.tasks = tasks
    setLists(newlist)
  }; */

  return (
    <div className="App">
      <TodoListSidebar onSelect={selectList} lists={lists} currentlist={currentlist}/>
      <div className="tasks">
        <ListTasks /* onClickDel={removeTask} */ currentlist={currentlist}/>
        <NewTaskForm onSubmit={newTask}/>
      </div>
    </div>
  );
}

export default App;
