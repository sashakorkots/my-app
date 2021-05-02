import React, {useState, useEffect} from 'react';
import './App.css';
/* import { render } from '@testing-library/react'; */
import TodoListSidebar from './components/TodoListSidebar';
import ListTasks from './components/ListTasks';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Url from './components/url';
import TodayTasks from './components/TodayTasks';

function TodoListPage() {

  const [lists, setLists] = useState([]) 

  useEffect(() => {
    const taskListEndpoint = `${Url}lists`;
    fetch(taskListEndpoint)
      .then(response => response.json())
      .then(setLists)
  },[])


  return (
    
    <div className="App">
      <BrowserRouter>
        <TodoListSidebar lists={lists} />
        
        <div className="tasks">
          
          <Switch>
          <Route path="/today">
            <TodayTasks />
          </Route>
            {lists.map(l => <Route key={l.myListId} path={`/todo-list/${l.myListId}`}> <ListTasks  currentlist={l}/></Route>)}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default TodoListPage;
