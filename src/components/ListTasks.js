import React, { useState } from "react";
import Task from './Task'

const ListTasks = ({tasks, onClickDel}) => {


    return (
        <div id='tasks'>
            <h2>Tasks</h2>
            {
                tasks.map((m,i) => <Task key={i} task={m} onClick={_ => onClickDel(m)}/>)
            }
        </div>
    );
}

export default ListTasks;