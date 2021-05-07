import { applyMiddleware, compose, combineReducers} from 'redux';
import { createStore } from 'redux'
import thunk from 'redux-thunk';
import dashboardReducer from './reducers/dashboardReducer';
import reducers from './reducers/reducer'
import { composeWithDevTools } from 'remote-redux-devtools';

const composedEnhanced = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => createStore(
    reducers,
    composedEnhanced(
        applyMiddleware(
            thunk
        )
    )
);


export default configureStore;
