import React from "react";

const TodoList = ({todoList, ...props}) => {
    return (
        <div {...props}>
            <button>{todoList.title}</button>
        </div>
    );
}

export default TodoList;