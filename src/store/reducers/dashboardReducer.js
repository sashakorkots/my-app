import { DASHBOARD_LOADED } from '../actions/types';
import { combineReducers } from 'redux'
import { TASKS_UPDATE, ADD_TASK, DELETE_TASK } from '../../store/actions/types';

const isTOdayOrEarly = ({doDate, done}) => {
    let ans = false
    
    if (doDate != null) {
        const now = new Date(new Date().toDateString().split('T'));
        const date = new Date(doDate);
        ans = now.getFullYear() == date.getFullYear() && now.getMonth() == date.getMonth() && now.getDate() == date.getDate();
    }
    return ans
}

const todayReducer = (state = 0, action) => {
    let fstate;
    switch (action.type) {
        case DASHBOARD_LOADED:
            return action.payload.today
        case ADD_TASK:             
            return isTOdayOrEarly(action.payload) ? ++state : state
        case DELETE_TASK:
            return isTOdayOrEarly(action.payload) ? --state : state
        default:
            return state
    }
};
const listsReducer = (state = [], action) => {
    switch (action.type){
        case DASHBOARD_LOADED:
            return action.payload.lists
        default:
            return state
    }
}
const openedTasksReducer = (state = {}, action) => {
    let fstate;
    let myListId; 

    switch (action.type){
        case DASHBOARD_LOADED:
            return action.payload.openedTasks
        case TASKS_UPDATE:     
            myListId = action.payload.myListId
            fstate = state.slice()
            action.payload.done ? fstate.find(ot => myListId in ot)[myListId]-- : fstate.find(ot => myListId in ot)[myListId]++
            return fstate
        case ADD_TASK:
            fstate = state.slice()
            fstate.find(ot => action.payload.myListId in ot)[action.payload.myListId]++
            return fstate
        case DELETE_TASK:
            myListId = action.payload.myListId 
            fstate = state.slice()
            if (!action.payload.done) fstate.find(ot => myListId in ot)[myListId]--;
            return fstate;   
        default:
            return state
    } 
}
export default combineReducers({
    today: todayReducer,
    lists: listsReducer,
    openedTasks: openedTasksReducer
});
 

//redux thunk