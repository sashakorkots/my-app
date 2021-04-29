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
                    },
                    {
                      'id' : 2,
                      'title' : 'Play volleyball',
                      'done' : false,
                    },
                  ]

      } 
      
    ]
  }
  newTask = (task) => {
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
  removeTask = (task) => {
    const tasks = this.state.lists.find(m => m.id == this.state.currentlist).tasks
    tasks.splice(tasks.find(t => t.id == task.id),1)
    const newlist = this.state.lists.slice()
    newlist.tasks = tasks
    console.log(newlist)
    this.setState(
      {
        lists : newlist
      }
    )
  };
  render() {
    return (
      <div className="App">
        <TodoListSidebar onSelect={this.selectList} lists={this.state.lists} currentlist={this.state.currentlist}/>
        <div className="tasks">
          <ListTasks onClickDel={this.removeTask} tasks={this.state.lists.find(m => m.id == this.state.currentlist).tasks} />
          <NewTaskForm onSubmit={this.newTask}/>
        </div>
      </div>
    );
  }
}

export default App;
