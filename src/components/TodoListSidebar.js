import React from "react";
import TodoList from './TodoList'

const TodoListSidebar = ({lists, onSelect}) => {
    return (
        <div id='list-sidebar'>
            <h2>Lists</h2>
            {
                lists.map((l, i) => <TodoList onClick={() => onSelect(l)} key={i} todoList={l} />)
            }
        </div>
    );
}

export default TodoListSidebar;