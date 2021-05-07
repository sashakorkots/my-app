import React, { useState } from 'react'
import { useParams } from "react-router";
import Url from "../url"
import { useDispatch } from 'react-redux';
import {addTask} from '../store/actions/tasksActions'

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

function NewTaskForm () {

    const {id} = useParams();
    const fieldTitle = useField('title','text')
    const fieldDescription = useField('description','text')
    const fieldDoDate = useField('doDate','date')

    const dispatch = useDispatch()

    const createTask = (event) => {
        const objFields = fieldAPI(fieldTitle, fieldDescription, fieldDoDate).buildObject
        objFields.currentlist = id;
        dispatch(addTask(objFields))
        fieldAPI( fieldTitle, fieldDescription, fieldDoDate).cleanAll(); 
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