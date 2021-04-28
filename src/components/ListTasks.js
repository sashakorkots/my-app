import React from "react";
import Task from './Task'

const ListTasks = (props) => {
    
        
    return (
        <div id='tasks'>
            <h2>Tasks</h2>
            {
                props.tasks.map((m,i) => <Task key={i} task={m}/>)
            }
        </div>
    );
}

export default ListTasks;