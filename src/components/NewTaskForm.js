import React, { useState } from 'react'

function NewTaskForm (props) {
    const [title, setTitle] = useState("");


    const onSubmitHandler = (event) => {
        event.preventDefault()
        props.onSubmit(title)
    }

    const onChange = (event) => {
        setTitle(
            event.target.value
        )
    }

    return (
        <form id="new-task-form" className="task" onSubmit={onSubmitHandler}>                
            <input type="text" name="title" onChange={onChange}/>                
            <button type="submit">submit</button> 
        </form>
    )
    
}

export default NewTaskForm