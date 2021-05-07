import React, { useEffect, useState } from "react";
import Task from './Task'
import NewTaskForm from './NewTaskForm'
import Url from "../url"
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import {loadTasks, changeTask, addTask} from '../store/actions/tasksActions'


const ListTasks = () => {
    const {id} = useParams();

    const tasks = useSelector(state => state.tasks)

    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(loadTasks(id))
    },[id])


    // const onClickDel = (task) => {
    //     setTasks(tasks.filter(t => t.myTaskId !== task.myTaskId))

    // }


    return (
        <div id='tasks'>
            <h2>Tasks</h2>
            {
                tasks.map((m) => <Task key={m.myTaskId} today={false} task={m}  /* onDelete={onClickDel} *//>)
            }
            <NewTaskForm/>
        </div>        
        
    );
}

export default ListTasks;