import { DASHBOARD_LOADED} from "./types"



export const loadDashboard = (dispatch) => {
    fetch('/api/dashboard')
        .then(res => res.json())
        .then(dashboard => dispatch({type: DASHBOARD_LOADED, payload: dashboard}))
}

let state = {
    dashboard: {
        today: 3,
        lists: [{}]
    },
    // listTasks: [],
    // selectedList: {}
}
