import { useReducer, useState } from "react"
import ToDo from "./toDo";

export const ACTIONS = {
    ADD_TODO: 'add_todo',
    TOGGLE_TODO: 'toggle_todo',
    DELETE_TODO: 'delete_todo',
}


function reducer(todos, action) {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            
            return todos.map((e)=>{
                if (action.payload.id === e.id) {
                    return {...e, complete: !e.complete};
                }
                return e;
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter((e)=>{
                if (action.payload.id === e.id) {
                    return false
                }
                return true
            })
        default:
            return todos;
    }
}

function newTodo(name) {
    return {id: Date.now(), name: name, complete: false}
}

export default function ToDoListApp() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    function handlSubmit(e) {
        e.preventDefault();
        if (name !== '') {
            dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}});
            setName('');
        }
    }

    
    return (
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="dark:text-white text-grey-darkest">Todo List</h1>
                    
                    <form  onSubmit={handlSubmit}>
                        <div className="flex">
                            <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                            <div className="relative w-full">
                                <input value={name} onChange={e=>setName(e.target.value)} type="text" id="first_name" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="To Do..." required/>
                                <button type="submit" className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-green-700 rounded-r-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add</button>
                            </div>
                        </div>
                    </form>

                </div>
                <div>
                    {
                        todos.map((todo)=>{
                            return <ToDo key={todo.id} dispatch={dispatch} todo={todo}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}