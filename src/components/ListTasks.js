import React, { useEffect, useState } from "react";
import Task from './Task'
import NewTaskForm from './NewTaskForm'
import Url from "./url"
import { useParams } from "react-router";

const ListTasks = () => {
    let {id} = useParams();
    const[tasks, setTasks] = useState([])
    useEffect(() => {
        const taskListEndpoint = `${Url}lists/${id}/tasks`;
        fetch(taskListEndpoint)
          .then(response => response.json())
          .then(setTasks)
      },[id])

    const onClickDel = (task) => {
        setTasks(tasks.filter(t => t.myTaskId !== task.myTaskId))

    }

    const newTask = (task) => {
        setTasks(tasks.concat(task))
    }

    const replaceTask = (task) => {
        const index = tasks.findIndex(t => t.myTaskId === task.myTaskId);
        const newTasks = tasks.slice();
        newTasks.splice(index, 1, task);
        setTasks(newTasks)
    }

    return (
        <div id='tasks'>
            <h2>Tasks</h2>
            {
                tasks.map((m) => <Task key={m.myTaskId} today={false} task={m} onUpdate={replaceTask}  onDelete={onClickDel}/>)
            }
            <NewTaskForm onSubmit={newTask} currentlist={id}/>
        </div>        
        
    );
}

export default ListTasks;