import { useContext } from 'react'
import { HandleUsersContext } from "./userApp";

export default function UserTable({rows}) {

    const handleUsers = useContext(HandleUsersContext)

    let tableRows = rows.map((e)=>(
                <tr key={e.id} className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {e.id}
                    </th>
                    <td className="px-6 py-4">
                        {e.fullName}
                    </td>
                    <td className="px-6 py-4">
                        {e.country}
                    </td>
                    <td>
                        <button onClick={()=>{handleUsers.handleAction('delete');handleUsers.deleteUser(e.id)}} className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                            Delete
                        </button>
                        <button onClick={()=>handleUsers.handleAction('edit', e.id)} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                            Edit
                        </button>
                    </td>
                </tr>
    ))

    return (
        <>
                    
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th>#ID</th>
                            <th>FullName</th>
                            <th>Country</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>

        </>
    )
}