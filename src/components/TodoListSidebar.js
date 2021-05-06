import React from "react";  
import { NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';

const TodoListSidebar = ({lists}) => {

    const data = useSelector(state => state.lists);
    console.log();
    console.log();
    return (
        <div id='list-sidebar'>
            <h2>Lists</h2>
            <NavLink to={`/today`} activeClassName="active-link" className='link'>today <span className='count-of-tasks'>{data.countOfToadyTasks}</span></NavLink>
            {    
                lists.map((l) => 
                    <NavLink to={`/todo-list/${l.myListId}`} key={l.myListId} activeClassName="active-link" className='link'>{l.title} 
                        <span className='count-of-tasks'>{data.myListsNoDone.find(nl => nl.id == l.myListId).countOfNoDoneTasks}</span>
                    </NavLink>
                )
            }
        </div>
    );
}

export default TodoListSidebar;
