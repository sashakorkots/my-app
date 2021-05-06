import { TASKS_LOADED } from '../../store/actions/types';

const defaultState = []

const tasksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TASKS_LOADED:
            return action.payload          
        default:
            return state
    }
};
export default tasksReducer;