
import React, {useState} from "react";

function Task ({task}){ 

    const [done, setDone] = useState(task.done)

    const change = (event) => {
        task.done = !task.done
        setDone(task.done)
    }

    return (
        <div className="task">
            <input type="checkbox" className="check-box" checked={done} onChange={change}></input>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>
    )
}

export default Task;