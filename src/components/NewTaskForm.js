import React, { useState } from 'react'

function useTextField(name) {
    const [value, setValue] = useState("");
    return {
        type: 'text',
        value,
        name,
        onChange: event => setValue(event.target.value)
    }
}
function NewTaskForm (props) {
    const fieldTitle = useTextField('title')
    const fieldDescription = useTextField('description')

    const onSubmitHandler = (event) => {
        event.preventDefault()
        props.onSubmit(
            {
                title : fieldTitle.value,
                description : fieldDescription.value
                
            }
        )
        /* const taskListEndpoint = `http://localhost:5000/api/ToDoLists/list/${listId}/task`;
        return fetch(taskListEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(response => response.json())
        .then(props.onSubmit); */
    }

    return (
        
        <form id="new-task-form" className="task" onSubmit={onSubmitHandler}>                
            <input {...fieldTitle} />   
            <input {...fieldDescription} />            
            <button type="submit">submit</button> 
        </form>
    )
    
}

export default NewTaskForm