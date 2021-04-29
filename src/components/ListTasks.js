import React, { useEffect, useState } from "react";
import Task from './Task'

const ListTasks = ({currentlist}) => {

    const[tasks, setTasks] = useState([])

    useEffect(() => {
        const taskListEndpoint = `http://localhost:5000/api/ToDoLists/lists/${currentlist}/tasks`;
        fetch(taskListEndpoint)
          .then(response => response.json())
          .then(setTasks)
      },[currentlist])

    const onClickDel = (task) => {
        const taskListEndpoint = `http://localhost:5000/api/ToDoLists/list/${task.myListId}/task/${task.myTaskId}`;
        fetch(taskListEndpoint, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        setTasks(tasks.splice(tasks.find(t => t.myTaskId == task.myTaskId),1))
    }
    return (
        <div id='tasks'>
            <h2>Tasks</h2>
            {
                tasks.map((m,i) => <Task key={i} task={m} onClick={_ => onClickDel(m)}/>)
            }
        </div>
    );
}

export default ListTasks;