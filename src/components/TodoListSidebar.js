import React from "react";
import TodoList from './TodoList'

const TodoListSidebar = (props) => {
    return (
        <div>
            {
                props.lists.map((l, i) => <TodoList key={i} todoList={l}/>)
            }
        </div>
    );
}

export default TodoListSidebar;