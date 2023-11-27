import React from "react";

let nextTodoId = 0;

export function createTodoItem(text, from, to) {
    return {
        id: nextTodoId++,
        text,
        from,
        to,
        completed: false,
    };
}

const List = ({ todos, setTodos }) => {
    const handleCheckboxChange = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    return (
        <div className="flex flex-col p-10">
            <div className='flex justify-left'>
                <h2 className='text-2xl font-bold'>Todos</h2>
            </div>
            <ul className='flex flex-col'>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input 
                            type="checkbox"
                            id={`todo-${todo.id}`}
                            checked={todo.completed}
                            onChange={() => handleCheckboxChange(todo.id)}
                        />
                        <label htmlFor={`todo-${todo.id}`}>
                            {todo.completed ? <del>{todo.text}</del> : todo.text}
                        </label>
                        <p>From: {todo.from}</p>
                        <p>To: {todo.to}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default List;