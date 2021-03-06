import { TASKS_LOADED } from "./types"
import { ADD_TASK, TASKS_UPDATE, DELETE_TASK, TASKS_TODAY_LOADED } from "./types"
import Url from '../../url'


export const loadTasks = (myListId) => async(dispatch) => {
    fetch(`${Url}lists/${myListId}/tasks`)
        .then(res => res.json())
        .then(tasks => dispatch({type: TASKS_LOADED, payload: tasks}))
}
export const todayTasks = () => async(dispatch) => {
    const taskListEndpoint = `${Url}collection/today`
    return fetch(taskListEndpoint)
          .then(response => response.json())
          .then(tasks => dispatch({type: TASKS_TODAY_LOADED, payload: tasks}))
}

export const changeTask = (task,tasks) => async(dispatch) => {
    task.done = !task.done
    const taskListEndpoint = `${Url}list/${task.myListId}/task/${task.myTaskId}`;
    return fetch(taskListEndpoint, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(task)
    })
    .then(response => response.json())
    .then(task => dispatch({type: TASKS_UPDATE, payload: task}))
}

export const addTask = (objFields) => async(dispatch) => {
    const taskListEndpoint = `${Url}list/${objFields.currentlist}/task`;
    return fetch(taskListEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objFields)
    })
    .then(response => response.json())
    .then(task => dispatch({type: ADD_TASK, payload: task}))
}

export const deleteTask = (task) => async(dispatch) => {
    const taskListEndpoint = `${Url}list/${task.myListId}/task/${task.myTaskId}`;
    return fetch(taskListEndpoint, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(t => dispatch({type: DELETE_TASK, payload: t}))
}

