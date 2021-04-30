
import React from "react";
import Url from "./url"

function Task ({task, onUpdate, onDelete, ...props}){ 


    const change = (event) => {
            
            task.done = !task.done
            const taskListEndpoint = `${Url}list/${task.myListId}/task/${task.myTaskId}`;
            return fetch(taskListEndpoint, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(response => response.json())
        .then(onUpdate)
    }

    const remove = (event) => {
        const taskListEndpoint = `${Url}list/${task.myListId}/task/${task.myTaskId}`;
        fetch(taskListEndpoint, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(onDelete)
    }

    function builDueDateNode(doDate) {
        if (doDate != null){
            return new Date(doDate).toDateString();
        }
    }
    function overDueDate(doDate) {
        let now = new Date();
        if (new Date(doDate) < now) {
            return {className : 'over-due-date'}
        }
    }

    function buildTitle(done) {
        if (done) {
            return {className : 'task-complete'}
        }
    }

    return (
        <div className="task" >
            <input type="checkbox" className="check-box" checked={task.done} onChange={change}></input>
            <h3 {...buildTitle(task.done)}>{task.title}</h3>
            <p>{task.description}</p>
            <div {...overDueDate(task.doDate)}>{builDueDateNode(task.doDate)}</div>
            <button onClick={remove} >Delete</button>
        </div>
    )
}

export default Task;