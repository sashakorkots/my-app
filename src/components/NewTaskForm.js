import React, { useState } from 'react'
import Url from "./url"

function useField(name, type) {
    const [value, setValue] = useState("");
    return {
        type,
        value,
        name,
        placeholder: name.toUpperCase(),
        onChange: event => setValue(event.target.value),
        clean: () => setValue("")
    }
}

function NewTaskForm (props) {
    const fieldTitle = useField('title','text')
    const fieldDescription = useField('description','text')
    const fieldDoDate = useField('doDate','date')

    const createTask = (event) => {
        const taskListEndpoint = `${Url}list/${props.currentlist.myListId}/task`;
        fetch(taskListEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    title : fieldTitle.value,
                    description : fieldDescription.value,
                    doDate : fieldDoDate.value
                })
        })
        .then(response => response.json())
        .then(props.onSubmit)
        .then(_ => {
            fieldTitle.clean();
            fieldDescription.clean();
            fieldDoDate.clean();
        }); 
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        createTask(event)

    }

    return (
        
        <form id="new-task-form" className="task" onSubmit={onSubmitHandler}>                
            <input {...fieldTitle} />   
            <input {...fieldDescription} />        
            <input {...fieldDoDate} />      
            <button type="submit">submit</button> 
        </form>
    )
    
}

export default NewTaskForm