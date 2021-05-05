import React, {useState, useEffect} from 'react';
import './App.css';
/* import { render } from '@testing-library/react'; */
import TodoListSidebar from './components/TodoListSidebar';
import ListTasks from './components/ListTasks';
import {Route, BrowserRouter} from 'react-router-dom';
import Url from './url';
import TodayTasks from './components/TodayTasks';
import store from './store';
import { loadlist } from './actions/listsActions'


function TodoListPage() {

  const [lists, setLists] = useState([]) 

  useEffect(() => {
    const taskListEndpoint = `${Url}lists`;
    fetch(taskListEndpoint)
      .then(response => response.json())
      .then(setLists)
  },[])


  /* const upadateState = () => {
    setLists(store.getState());
  }

  useEffect(() => {
    store.subscribe(upadateState())
  }) */

  return (
    
    <div className="App">
      <BrowserRouter>
        <TodoListSidebar lists={lists} />
        
        <div className="tasks">

          <Route path="/today">
            <TodayTasks />
          </Route>
            <Route path={`/todo-list/:id`} > 
              <ListTasks />
            </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default TodoListPage;
