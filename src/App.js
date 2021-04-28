import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import TodoListSidebar from './components/TodoListSidebar';
import ListTasks from './components/ListTasks';

class App extends Component {
  lists = [
    {
      'id' : 1,
      'title' : 'monday',
    },
    {
      'id' : 2,
      'title' : 'friday'
    }
  ]
  tasks = [
    {
      'id' : 1,
      'title' : 'make class',
      'done' : true
    },
    {
      'id' : 2,
      'title' : 'make struct'
    }
  ]
  
  render() {
    return (
      <div className="App">
        <TodoListSidebar lists={this.lists}/>
        <ListTasks tasks={this.tasks}/>
 
      </div>
    );
  }
}

export default App;
