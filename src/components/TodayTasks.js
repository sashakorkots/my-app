import React, { useEffect } from "react";
import Task from './Task'
import Url from "../url"
import { useSelector, useDispatch } from "react-redux";
import { todayTasks } from '../store/actions/tasksActions'

function TodayTasks() {

    const tasks = useSelector(t => t.tasks)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(todayTasks())
    },[])


    return (
        <div id='tasks'>
            <h2>Tasks</h2>
            {
                tasks.map((m) => <Task key={m.myTaskId} task={m} today={true}/>)
            }
        </div>        
        
    );
}

export default TodayTasks;