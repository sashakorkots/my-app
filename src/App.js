import React, {useState, useEffect, useCallback } from 'react';
import './App.css';
/* import { render } from '@testing-library/react'; */
import TodoListSidebar from './components/TodoListSidebar';
import ListTasks from './components/ListTasks';
import {Route, BrowserRouter} from 'react-router-dom';
import Url from './url';
import TodayTasks from './components/TodayTasks';
import { loadDashboard } from './actions/dashboardActions'
import { useDispatch } from 'react-redux';

function TodoListPage(/* {lists} */) {

  const [lists, setLists] = useState([]) 

  useEffect(() => {
    const taskListEndpoint = `${Url}lists`;
    dispatch(loadDashboard())
    fetch(taskListEndpoint)
      .then(response => response.json())
      .then(setLists)
  },[])

  const dispatch = useDispatch()




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

export default TodoListPage
