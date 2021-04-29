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