import React from "react";
import TodoList from './TodoList'

const TodoListSidebar = ({lists, currentlist , onSelect}) => {

    return (
        
        <div id='list-sidebar'>
            <h2>Lists</h2>
            {
                lists.map((l) => <TodoList className={currentlist === l ? 'current-list': ''} onClick={() => onSelect(l)} key={l.myListId} todoList={l} />)
            }
        </div>
    );
}

export default TodoListSidebar;

/* 

*/