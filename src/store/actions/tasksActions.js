import { TASKS_LOADED } from "./types"
import Url from '../url'


export const loadTasks = myListId => async(dispatch) => {
    fetch(`${Url}lists/${myListId}/tasks`)
        .then(res => res.json())
        .then(tasks => dispatch({type: TASKS_LOADED, payload: {myListId,tasks}}))
}

export const changeTask = task => async(dispatch) => {
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
    .then(tasks => dispatch({type: ADD_TASK, payload: tasks}))

}