import React from "react";

const TodoList = ({todoList}) => {
    return (
        <div>
            <span>{todoList.title}</span>
        </div>
    );
}

export default TodoList;