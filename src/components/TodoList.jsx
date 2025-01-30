import React from 'react';
import { useState, useEffect } from 'react';
import { stringify, v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState("")
    const [show, setShow] = useState(true);
    const [count, setCount] = useState(0)

  
    useEffect(() => {
        let todosString = localStorage.getItem("todos")
        if (todosString) {
            let todos = JSON.parse(localStorage.getItem("todos"))
            setTodos(todos)

        }

    }, [])


    const saveTOLS = () => {

        localStorage.setItem("todos", JSON.stringify(todos))

    }
    const handleLS = () => {
        setTodos(todos)
        saveTOLS()

    }

    const handleSave = (saveTOLS) => {
        console.log("todin", todo)
        setTodos([...todos, { id: uuidv4(), todo, isComplete: false }])
        setTodo(" ")
        saveTOLS()
    }

    // Toggle Show

    const toggleShow = () => {
        setShow(!show)
    }

    // Edit
    const handleEdit = (e, id) => {

        let newEdit = todos.filter((item) => {
            return item.id === id
        })
        setTodo(newEdit[0].todo)


        let newTodos = todos.filter((item) => {
            return item.id !== id
        })

        setTodos(newTodos)
        saveTOLS()


    }

    // Delete
    const handleDelete = (e, id) => {

        let newTodos = todos.filter((item) => {
            return item.id !== id
        })

        setTodos(newTodos)
        saveTOLS()
    }
    const handleChange = (e) => {
        setTodo(e.target.value)

    }
    // Checked
    const handleCheck = (e, id) => {

        let index = todos.findIndex((item) => {
            return item.id === id
        })

        let newTodos = [...todos]
        newTodos[index].isComplete = !newTodos[index].isComplete
        setTodos(newTodos)
    }
    return (
        <div>
            <div className="todo mx-20 my-3 bg-orange-300 px-5">

                <h1 className='font-extralight text-2xl text-center'>Todo Planning</h1>
                <div className="new-todo">
                    <h2 className='text-xl'>Add new Todo List</h2>
                    <div className="todo-input mb-5">
                        <input onChange={handleChange} value={todo} type="text" className='h-[2rem] w-[20rem] text-lg indent-1 border-spacing-1 rounded border-cyan-600 bg-slate-200 mr-2 max-sm:w-[9rem]' />
                        <button onClick={handleSave} disabled={todo.length <= 3} className=' h-[2rem] bg-green-300 rounded py-1 px-2 cursor-pointer transition-all ease-in-out duration-100 hover:scale-105 disabled:bg-gray-300'>Save</button>
                        <button onClick={handleLS} className='ml-3 h-[2rem] bg-green-300 rounded py-1 px-2 cursor-pointer transition-all ease-in-out duration-100 hover:scale-105 disabled:bg-gray-300'>Save all to Local Storage</button>

                    </div>
                    <div className="complete-tasks flex gap-3 text-xl mb-3">
                        <input type="checkbox" onClick={toggleShow} checked={show} />Finished Tasks


                    </div>
                    <div className="todo-task flex flex-col gap-y-3 ">
                        <h1 className='text-xl'>Todo-tasks</h1>
                        {todos.length === 0 && <div className="div">No Todos to Display</div>}
                        {todos.map((item, i) => {



                            return ((show || !item.isComplete) &&

                                <div className="assign-tasks flex  justify-between w-[20%] max-sm:flex-col  " key={i} >
                                    <div className="div flex justify-center items-center gap-5">

                                        <input type="checkbox" checked={item.isComplete} onChange={(e) => {
                                            handleCheck(e, item.id)
                                        }} />
                                        <p className={`${item.isComplete ? "line-through" : ""} w-[200PX] `}>{item.todo}</p>
                                    </div>
                                    <div className="manage-task flex gap-1 ml-2  ">
                                        <button onClick={(e) => {
                                            handleEdit(e, item.id)
                                        }} className='bg-green-300 rounded py-1 px-2 cursor-pointer hover:scale-105'>Edit</button>
                                        <button onClick={(e) => {
                                            handleDelete(e, item.id)
                                        }} className='bg-green-300 rounded py-1 px-2 cursor-pointer  hover:scale-105'>Delete</button>
                                    </div>

                                </div>)
                        })}


                    </div>

                </div>
            </div>
        </div>
    );
}

export default TodoList;
