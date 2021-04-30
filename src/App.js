import React, { useEffect, useState } from 'react';
import './App.css';
/* import { render } from '@testing-library/react'; */
import TodayTasksPage from './pages/TodayTasksPage';
import TodoListPage from './pages/TodoListPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Basic() {
  return (
    <Router>
        <ul>
          <li>
            <Link to="/todayTasksPage">today</Link>
          </li>
          <li>
            <Link to="/todoListPage">list of tasks</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/todayTasksPage">
            <TodayTasksPage />
          </Route>
          <Route path="/todoListPage">
            <TodoListPage />
          </Route>
        </Switch>
    </Router>
  )
};
