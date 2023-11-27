  import React, { useState } from 'react';

const Input = ({ todos, setTodos }) => {
    const [text, setText] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: todos.length,
            text,
            from,
            to,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setText('');
        setFrom('');
        setTo('');
    };

    return (
        <div className='flex flex-col justify-left p-10 border-b-2'>
            <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type='text'
                placeholder='Type a new todo here'
                className="block rounded-md border-0
       py-1.5 pl-7 pr-20 text-gray-900 ring-1
        ring-inset ring-gray-300
         placeholder:text-gray-400 
         focus:ring-2 focus:ring-inset
          focus:ring-indigo-600 sm:text-sm sm:leading-6
          w-96"
            />
            <div className='flex justify-left items-baseline'>
                <label className='mr-3'>From :</label>
                <input
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    name='from'
                    type='date'
                    className="block rounded-md border-0
       py-1.5  text-gray-900 ring-1
        ring-inset ring-gray-300
         placeholder:text-gray-400 
         focus:ring-2 focus:ring-inset
          focus:ring-indigo-600 sm:text-sm sm:leading-6
          w-32 mt-4"
                >
                </input>
                <label className='mr-3 mx-8'>To :</label>
                <input
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    name='to'
                    type='date'
                    className="block rounded-md border-0
       py-1.5  text-gray-900 ring-1
        ring-inset ring-gray-300
         placeholder:text-gray-400 
         focus:ring-2 focus:ring-inset
          focus:ring-indigo-600 sm:text-sm sm:leading-6
          w-32 mt-4"
                >
                </input>
            </div>

            <button
                className='bg-blue-500
       hover:bg-blue-700
        text-white font-bold
         py-2 px-4 rounded w-32 mt-4'>
                Add Todo
            </button>
            </form>
        </div>
    )
}

export default Input;