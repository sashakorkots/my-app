import React from "react";
import TodoList from './TodoList'

const TodoListSidebar = ({lists,currentlist , onSelect}) => {
    console.log(currentlist)
    return (
        
        <div id='list-sidebar'>
            <h2>Lists</h2>
            {
                lists.map((l, i) => <TodoList Class={currentlist == l.id ? 'current-list': ''} onClick={() => onSelect(l)} key={i} todoList={l} />)
            }
        </div>
    );
}

export default TodoListSidebar;

/* 
currentlist == l.id ? 
*/