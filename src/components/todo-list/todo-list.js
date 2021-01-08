import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone, filter}) => {

    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;

        if (filter === "Active" && item.done) return;
        if (filter === "Done" && !item.done) return;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}
                              onDeleted={() => onDeleted(id)}
                              onToggleImportant={() => onToggleImportant(id)}
                              onToggleDone={() => onToggleDone(id)}
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;
