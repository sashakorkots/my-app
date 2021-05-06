import { DASHBOARD_LOADED } from '../actions/types';

const defaultState =  
    {
        countOfToadyTasks:0,
        myListsNoDone: [
            {
                id: 1,
                countOfToadyTasks: 1

            }
        ]
           
};

const dashboardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case DASHBOARD_LOADED:
            return action.payload       
        default:
            return state
    }
};
export default dashboardReducer;
 

//redux thunk