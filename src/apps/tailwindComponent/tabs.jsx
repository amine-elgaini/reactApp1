import { HandleUsersContext } from "../usersApp/userApp";
import { useContext } from "react";


export default function Tabs () {
    const handleUsers = useContext(HandleUsersContext);

    return ( 
        <>

            <div className="my-5 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                        <a onClick={()=>handleUsers.handleAction('select')} className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Table</a>
                    </li>
                    <li className="mr-2">
                        <a onClick={()=>handleUsers.handleAction('add')} className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" aria-current="page">Add</a>
                    </li>
                </ul>
            </div>

        </>
    );
}
