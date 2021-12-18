import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todolist: PropTypes.array,
    addTodoList: PropTypes.func,
};

TodoList.defalsProps = {
    todolist: [],
    addTodoList: null
}


function TodoList(props) {
    const { todolist, addTodoList } = props

    function handleClick(todo) {
        if (addTodoList) {
            addTodoList(todo)
        }
    }

    return (
        <div>
            <ul className="todoList">
                {todolist.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => handleClick(todo)}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;