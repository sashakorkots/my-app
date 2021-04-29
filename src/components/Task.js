
import React, {useState} from "react";

function Task ({task, ...props}){ 

    const [done, setDone] = useState(task.done)

    const change = (event) => {
            task.done = !task.done
            const taskListEndpoint = `http://localhost:5000/api/ToDoLists/list/${task.myListId}/task/${task.myTaskId}`;
            return fetch(taskListEndpoint, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(response => response.json())
        .then(t => setDone(t.done))
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
    console.log(task)
    return (
        <div className="task" >
            <input type="checkbox" className="check-box" checked={task.done} onChange={change}></input>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div {...overDueDate(task.doDate)}>{builDueDateNode(task.doDate)}</div>
            <button {...props}>Delete</button>
        </div>
    )
}

export default Task;