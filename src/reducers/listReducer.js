import { DASHBOARD_LOADED } from '../actions/types';

const defaultState = {
    lists: []
};

const listReducer = (state = defaultState, action) => {
    switch (action.type) {
        case DASHBOARD_LOADED:
            return {
                lists: action.payload
            }
        default:
            return state
    }
};
export default listReducer;
 

//redux thunk