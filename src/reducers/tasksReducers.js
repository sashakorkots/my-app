import { TASKS_LOADED } from '../actions/types';

const defaultState = {
    tasks: []
};

const tasksdReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TASKS_LOADED:
            return {
                lists: action.payload
            }
        default:
            return state
    }
};
export default tasksdReducer;