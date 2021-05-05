import React, { useEffect, useState } from "react";
import Task from './Task'
import Url from "../url"

function TodayTasks() {

    const[tasks, setTasks] = useState([])

    useEffect(() => {
        getLists().then(setTasks)
    },[])

    const getLists = () => {
        const taskListEndpoint = `${Url}collection/today`;
        return fetch(taskListEndpoint)
          .then(response => response.json())
    }

    const onClickDel = (task) => {
        setTasks(tasks.filter(t => t.myTaskId !== task.myTaskId))

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
                tasks.map((m) => <Task key={m.myTaskId} task={m} onUpdate={replaceTask}  onDelete={onClickDel} today={true}/>)
            }
        </div>        
        
    );
}

export default TodayTasks;