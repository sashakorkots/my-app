import { applyMiddleware, combineReducers, compose } from 'redux';
import { createStore } from 'redux'
import thunk from 'redux-thunk';
import listReducer from './reducers/listReducer'

import rootReducers from './reducers/rootReducer'

const configureStore = (preloadedState = {}) => createStore(
    combineReducers(
        ...rootReducers,
    ),
    preloadedState,
    compose(
        applyMiddleware(
            thunk
            )
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default configureStore;

//combaine redusers