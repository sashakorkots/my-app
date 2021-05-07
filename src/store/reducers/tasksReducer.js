import { TASKS_LOADED, TASKS_UPDATE, ADD_TASK, DELETE_TASK, TASKS_TODAY_LOADED } from '../../store/actions/types';

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
            return newTasks
        case ADD_TASK:
            return state.concat(action.payload)
        case DELETE_TASK:
            return state.filter(t => t.myTaskId !== action.payload.myTaskId)
        case TASKS_TODAY_LOADED:
            return action.payload
        default:
            return state
    }
};
export default tasksReducer;