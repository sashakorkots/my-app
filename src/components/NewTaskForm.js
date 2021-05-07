import React, { useState } from 'react'
import { useParams } from "react-router";
import Url from "../url"

function fieldAPI(...fields) {
    const object = {}
    for (let f of fields) {
        object[f.name] = f.value;
    }
    return {
        buildObject : object,  /* buildObject : () => fields.reduce((i,f) => i[f.name] = f.value, {}), */
        cleanAll : () => fields.map(m => m.setvalue.setvalue(""))
    }
}

function useField(name, type) {
    const [value, setValue] = useState("");
    return {
        type,
        value,
        name,
        placeholder: name.toUpperCase(),
        onChange: event => setValue(event.target.value),
        setvalue: { setvalue : setValue}
    }
}

function NewTaskForm (props) {

    const {id} = useParams();
    const fieldTitle = useField('title','text')
    const fieldDescription = useField('description','text')
    const fieldDoDate = useField('doDate','date')

    const createTask = (event) => {
        const objFields = fieldAPI(fieldTitle, fieldDescription, fieldDoDate).buildObject
        objFields.currentlist = id;
        props.onSubmit(objFields)
        fieldAPI( fieldTitle, fieldDescription, fieldDoDate).cleanAll(); 
    }

    const addTask = (task) => {
        const taskListEndpoint = `${Url}list/${props.currentlist}/task`;
        return fetch(taskListEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(response => response.json())
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