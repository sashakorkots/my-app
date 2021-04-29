
import React, {useState} from "react";

function Task ({task, ...props}){ 

    const [done, setDone] = useState(task.done)

    const change = (event) => {
        task.done = !task.done
        setDone(task.done)
    }
    return (
        <div className="task" >
            <input type="checkbox" className="check-box" checked={task.done} onChange={change}></input>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button {...props}>Delete</button>
        </div>
    )
}

export default Task;