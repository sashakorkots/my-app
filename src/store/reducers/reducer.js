import { combineReducers } from 'redux'
import dashboardReducer from './dashboardReducer'
import tasksReducer from './tasksReducer'
import openedTasksReducer from './openedTasksReducer'

export default combineReducers({
    dashboard: dashboardReducer,
    tasks: tasksReducer,
    openedTasks: openedTasksReducer
})