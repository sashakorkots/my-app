import { applyMiddleware, combineReducers} from 'redux';
import { createStore } from 'redux'
import thunk from 'redux-thunk';
import dashboardReducer from './reducers/dashboardReducer';
import reducers from './reducers/reducer'



const configureStore = () => createStore(
    reducers
    ,
    applyMiddleware(
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default configureStore;

//combaine redusers

/* combineReducers({
        dashboardReducer,
        tasksReducers
}) */