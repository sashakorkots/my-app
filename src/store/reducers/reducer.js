import { combineReducers } from 'redux'
import dashboardReducer from './dashboardReducer'
import tasksReducer from './tasksReducer'

export default combineReducers({
    dashboard: dashboardReducer,
    tasks: tasksReducer
})