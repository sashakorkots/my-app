import { DASHBOARD_LOADED} from "./types"
import Url from '../../url'


export const loadDashboard = () => async(dispatch) => {
    fetch(`${Url}dashboard`)
        .then(res => res.json())
        .then(dashboard => dispatch({type: DASHBOARD_LOADED, payload: dashboard}))
}


