import React from "react";  
import { NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';

const TodoListSidebar = () => {

    let data = useSelector(state => state.dashboard);

    return (
        <div id='list-sidebar'>
            <h2>Lists</h2>
            <NavLink to={`/today`} activeClassName="active-link" className='link'>today<span className='count-of-tasks'>{data.today}</span></NavLink>
            {    
                data.lists.map((l) => 
                    <NavLink to={`/todo-list/${l.id}`} key={l.id} activeClassName="active-link" className='link'>{l.title} 
                        <span className='count-of-tasks'>{data.openedTasks.find(k => l.id in k)[l.id]}</span>
                    </NavLink>
                )
            }
        </div>
    );
}

export default TodoListSidebar;
