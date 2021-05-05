import { createStore } from 'redux'
import listReducer from './reducers/listReducer'


const store = createStore(
    listReducer,
    localStorage.state && JSON.parse(localStorage.state),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    localStorage.setItem('state',JSON.stringify(store.getState()))
})

export default store;