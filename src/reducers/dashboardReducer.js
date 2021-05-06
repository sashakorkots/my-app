import { DASHBOARD_LOADED } from '../actions/types';

const defaultState = {
    lists: []
};

const dashboardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case DASHBOARD_LOADED:
            return {
                lists: action.payload
            }
        default:
            return state
    }
};
export default dashboardReducer;
 

//redux thunk