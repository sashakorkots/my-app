import { TASKS_LOADED, TASKS_UPDATE, ADD_TASK } from '../../store/actions/types';

const defaultState = [
    {
        description: null,
        doDate: null,
        done: false,
        myList: null,
        myListId: 1,
        myTaskId: 1,
        title: null
    }
]

const tasksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TASKS_LOADED:
            return action.payload  
        case TASKS_UPDATE:
            const index = state.findIndex(t => t.myTaskId === action.payload.myTaskId);
            const newTasks = state.slice();
            newTasks.splice(index, 1, action.payload);
            console.log(newTasks)
            return newTasks
        case ADD_TASK:
            return state.concat(action.payload)
        default:
            return state
    }
};
export default tasksReducer;

/* const index = tasks.findIndex(t => t.myTaskId === task.myTaskId);
        const newTasks = tasks.slice();
        newTasks.splice(index, 1, task);
        setTasks(newTasks) */