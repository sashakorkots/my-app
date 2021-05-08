import { DASHBOARD_LOADED} from "./types"
import Url from '../../url'


export const loadDashboard = () => (dispatch) => {
    fetch(`${Url}dashboard`)
        .then(res => res.json())
        .then(dashboard => dispatch({type: DASHBOARD_LOADED, payload: {
            today: dashboard.countOfToadyTasks,
            lists: dashboard.myListsNoDone.map(l => ({id: l.id, title: l.title})),
            openedTasks: dashboard.myListsNoDone.map(l => ({[l.id] : l.countOfNoDoneTasks}))
        }}))
}