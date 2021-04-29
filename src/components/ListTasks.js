import React from "react";
import Task from './Task'

const ListTasks = ({tasks}) => {
    return (
        <div id='tasks'>
            <h2>Tasks</h2>
            {
                tasks.map((m,i) => <Task key={i} task={m}/>)
            }
        </div>
    );
}

export default ListTasks;