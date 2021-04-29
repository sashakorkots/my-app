import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import TodoListSidebar from './components/TodoListSidebar';
import ListTasks from './components/ListTasks';
import NewTaskForm from './components/NewTaskForm';


class App extends Component {
  state = {
    currentlist : 1,
    lists : [
      {
        'id' : 1,
        'title' : 'Monday',
        'tasks' : [
                    {
                      'id' : 1,
                      'title' : 'Make class',
                      'done' : false,
                    },
                    {
                      'id' : 2,
                      'title' : 'Make struct',
                      'done' : true,

                    },
                  ]

      },
      {
        'id' : 2,
        'title' : 'Friday',
        'tasks' : [
                    {
                      'id' : 1,
                      'title' : 'Go to school',
                      'done' : true,
                      'listId' : 1
                    },
                    {
                      'id' : 2,
                      'title' : 'Play volleyball',
                      'done' : false,
                      'listId' : 1
                    },
                  ]

      } 
      
    ]
  }
  newTask = (formFields) => {
    
    const task = {title : formFields,done : false}
    console.log(task)
    const newlist = this.state.lists.slice()
    newlist.find(m => m.id == this.state.currentlist).tasks.push(task)
    this.setState(
      {
        lists : newlist
      }
    )
      
  }
  selectList = (list) => {
    console.log(list)
    this.setState (
      {currentlist : list.id}
    )
  }

  render() {
    return (
      <div className="App">
        <TodoListSidebar onSelect={this.selectList} lists={this.state.lists}/>
        <div className="tasks">
          <ListTasks tasks={this.state.lists.find(m => m.id == this.state.currentlist).tasks}/>
          <NewTaskForm onSubmit={this.newTask}/>
        </div>
      </div>
    );
  }
}

export default App;
