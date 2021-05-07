import React, { useState } from 'react'
import { useParams } from "react-router";
import Url from "../url"
import { useDispatch } from 'react-redux';
import {addTask} from '../store/actions/tasksActions'

function createForm(...fields) {
    return {
        buildObject : () => fields.reduce((obj,f) => ({...obj, [f.name] : f.value}), {}),
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
        const objFields = createForm(fieldTitle, fieldDescription, fieldDoDate).buildObject()
        objFields.currentlist = id;
        dispatch(addTask(objFields))
        createForm( fieldTitle, fieldDescription, fieldDoDate).cleanAll(); 
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