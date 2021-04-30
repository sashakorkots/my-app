import React, { useEffect, useState } from 'react';
import TodoListSidebar from '/home/intern/Documents/my-app/src/components/TodoListSidebar';
import ListTasks from '/home/intern/Documents/my-app/src/components/ListTasks';


function TodoListPage() {
    const [currentlist, setCurrentlist] = useState(null)
    const [lists, setLists] = useState([]) 
  
    useEffect(() => {
      const taskListEndpoint = `http://localhost:5000/api/ToDoLists/lists`;
      fetch(taskListEndpoint)
        .then(response => response.json())
        .then(setLists)
    },[])
  

    return (
      <div className="App">
        <TodoListSidebar onSelect={setCurrentlist} lists={lists} currentlist={currentlist}/>
        
        <div className="tasks">
          {currentlist && <ListTasks currentlist={currentlist}/>}
        </div>
      </div>
    );
}

export default TodoListPage;