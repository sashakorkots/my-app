import { TASKS_LOADED } from '../../store/actions/types';

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
        default:
            return state
    }
};
export default tasksReducer;