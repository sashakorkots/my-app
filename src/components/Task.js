
import React from "react";
import { Link } from "react-router-dom";
import Url from "../url"

function Task ({task, onUpdate, onDelete, today}){ 


    const change = (event) => {  
        updateTask().then(onUpdate)
    }

    const updateTask = () => {
        task.done = !task.done
            const taskListEndpoint = `${Url}list/${task.myListId}/task/${task.myTaskId}`;
            return fetch(taskListEndpoint, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .
        then(response => response.json())
    }
    const remove = (event) => {
        
        deleteTask().then(onDelete)
    }
    const deleteTask = () => {
        const taskListEndpoint = `${Url}list/${task.myListId}/task/${task.myTaskId}`;
        return fetch(taskListEndpoint, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
    }
    function builDueDateNode(doDate) {
        if (doDate != null){
            return new Date(doDate).toDateString();
        }
    }
    function overDueDate(doDate) {
        const now = new Date(new Date().toDateString().split('T'));
        const date = new Date(doDate);
        if (date < now) {
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
            {task.description && <p>Description: {task.description}</p>}
            {!today && task.doDate && <div>Due Date: <span {...overDueDate(task.doDate)}>{builDueDateNode(task.doDate)}</span></div>}
            {today && <div>From list: <Link to={`/todo-list/${task.myListId}`} className='link'>{task.titleOfList} </Link></div>}
            <button onClick={remove} >Delete</button>
        </div>
    )
}

export default Task;

/* 
<NavLink to={`/todo-list/${l.myListId}`} key={l.myListId} activeClassName="active-link" className='link'>{l.title} </NavLink>
*/