import { useRef } from "react";
import { useContext } from 'react'
import { HandleUsersContext } from "./userApp";

export default function UserEdit() {

    const handleUsers = useContext(HandleUsersContext)

    const fullName = useRef(null)
    const country = useRef(null)

    const handleUpdate= (e) => {
        e.preventDefault();
        const user = {
            fullName: fullName.current.value,
            country: country.current.value,
        }
        handleUsers.updateUser(user);
    }

    console.log(handleUsers.userEdit[0].country)

    return (
        <>
            <form onSubmit={handleUpdate} className="p-4">
                <div className="mb-6">
                    <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                    <input defaultValue={handleUsers.userEdit[0].fullName} ref={fullName} type="fullName" id="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name..." />
                </div>

                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                <select defaultValue={handleUsers.userEdit[0].country} ref={country} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value='Unknown'>Choose a country</option>
                    <option value="Canada">Canada</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                </select>

                <button type="submit" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
            </form>

        </>
    )
}