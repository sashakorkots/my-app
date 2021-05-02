import React from "react";  
import { NavLink} from "react-router-dom";

const TodoListSidebar = ({lists}) => {
    return (
        <div id='list-sidebar'>
            <h2>Lists</h2>
            <NavLink to={`/today`} activeClassName="active-link" className='link'>today</NavLink>
            {    
                lists.map((l) => 
                    <NavLink to={`/todo-list/${l.myListId}`} key={l.myListId} activeClassName="active-link" className='link'>{l.title} </NavLink>
                )
            }
        </div>
    );
}

export default TodoListSidebar;
