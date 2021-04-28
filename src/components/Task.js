
import React from "react";

function Task ({task}){ 
    /* change = (event) => {
        task.done = !this.task.done
        this.setState({done : this.task.done})
        console.log(this.task)
    } */

    return (
    <div className="task">
        <input type="checkbox" className="check-box" checked={task.done} /* onChange={this.change} */></input>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
    </div>
    )
}

export default Task;