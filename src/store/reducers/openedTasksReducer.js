import { TASKS_LOADED, TASKS_UPDATE, ADD_TASK, DELETE_TASK, TASKS_TODAY_LOADED } from '../../store/actions/types';

const defaultOpenedTasks = {} 

const openedTasksReducers = (state = defaultState, action) => {
    switch (action.type){
        case TASKS_UPDATE:
            return;
        default:
            return state;
    }
}


export default combineReducers({
    today: (today = 0, {type, payload}) => type === DASHBOARD_LOADED ? payload.today : today,
    lists: (lists = [], {type, payload}) => type === DASHBOARD_LOADED ? payload.lists : lists,
    openedTasks: openedTasksReducer
})