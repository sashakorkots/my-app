import React, {useState, useEffect, useCallback } from 'react';
import './App.css';
/* import { render } from '@testing-library/react'; */
import TodoListSidebar from './components/TodoListSidebar';
import ListTasks from './components/ListTasks';
import {Route, BrowserRouter} from 'react-router-dom';
import TodayTasks from './components/TodayTasks';
import { loadDashboard } from './store/actions/dashboardActions'
import { useDispatch,useSelector } from 'react-redux';

function TodoListPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadDashboard())
  },[])

  return (
    
    <div className="App">
      <BrowserRouter>
        <TodoListSidebar />
        
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
