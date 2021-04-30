import React, { useEffect, useState } from 'react';
import './App.css';
/* import { render } from '@testing-library/react'; */
import TodoListSidebar from './components/TodoListSidebar';
import ListTasks from './components/ListTasks';


function App() {
  const [currentlist, setCurrentlist] = useState(1)
  const [lists, setLists] = useState([]) 

  useEffect(() => {
    const taskListEndpoint = `http://localhost:5000/api/ToDoLists/lists`;
    fetch(taskListEndpoint)
      .then(response => response.json())
      .then(setLists)
  },[])


  const selectList = (list) => {

    setCurrentlist(list.myListId)
  }

  return (
    <div className="App">
      <TodoListSidebar onSelect={selectList} lists={lists} currentlist={currentlist}/>
      <div className="tasks">
        <ListTasks currentlist={currentlist}/>
        
      </div>
    </div>
  );
}

export default App;
