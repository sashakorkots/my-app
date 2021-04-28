import React from "react";
import Task from './Task'

const ListTasks = (props) => {

        
    return (
        <div id='tasks'>
            {
                props.tasks.map((m,i) => <Task key={i} task={m}/>)
            }
        </div>
    );
}

export default ListTasks;