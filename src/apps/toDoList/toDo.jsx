import { ACTIONS } from "./ToDoListApp"

export default function ToDo({todo, dispatch}) {
    return (
        <>
            <div className="mb-2 flex items-center pl-4 border border-gray-200 rounded focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <label htmlFor="bordered-checkbox-1" className={`${todo.complete ? 'line-through text-gray-400': ''} w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300`}>{todo.name}</label>
                <button  onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO, payload: {id:todo.id}})} type="button" className="text-xs text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Do</button>
                <button onClick={()=>dispatch({type:ACTIONS.DELETE_TODO, payload: {id:todo.id}})} type="button" className="text-xs focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
            </div>
        </>
    )
}
