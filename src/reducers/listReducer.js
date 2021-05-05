import { LOAD_LIST } from '../actions/types';
import  Url  from '../url'

const getLists = () => {
    const taskListEndpoint = `${Url}lists`;
    fetch(taskListEndpoint)
        .then(response => response.json())
      
} 
const listReducer = (state = getLists(), action) => {
    switch (action.type) {
        case LOAD_LIST:
            return {
                lists: getLists()
            }
        default:
            return state
    }
}
export default listReducer
 