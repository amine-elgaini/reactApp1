import React, { useState } from "react";
import UserTable from "./userTable";
import Tabs from "../tailwindComponent/tabs";
import UserAdd from "./userAdd";
import UserEdit from "./userEdit";

export const HandleUsersContext = React.createContext();

export default function UserApp  () {

    const [layout, setAction] = useState('select');

    const [users, setUsers] = useState([
        {id:0,fullName:'default',country:'default'},
        {id:2,fullName:'default',country:'default'},
        {id:3,fullName:'default',country:'default'},
        {id:4,fullName:'default',country:'default'},
    ]);

    const [lastUser, setLastUser] = useState(4);

    const [userEdit, setUserEdit] = useState([{}]);

    const handleAction = (linkAction, id='') => {
        if (['select', 'add', 'edit', 'delete'].includes(linkAction)) {
            setAction(linkAction);
        }
        if (linkAction === 'edit') {
            setUserEdit(()=>{
                return users.filter((e)=>{
                    if (id === e.id) {
                        return true
                    }
                    return false
                });
            });
        }
    }


    const addUser = (user) => {
        user.id = lastUser
        setUsers(p=>[...p,user])
        setLastUser(lastUser+1)
        setAction('select');
    }

    const updateUser = (user) => {
        user.id = userEdit[0].id;
        const newUsers = users.map((e)=>{
            if (user.id === e.id) {
                return user
            }
            return e
        })
        setUsers(newUsers);
        setAction('select');
    }

    const deleteUser = (id) => {
        const newUsers = users.filter((e)=>{
            if (id === e.id) {
                return false
            }
            return true
        })
        setUsers(newUsers);
        setAction('select');
    }

    let show = '';

    if (layout === 'select') {
        show = <UserTable rows={users}/>
    } else if (layout === 'add') {
        show = <UserAdd/>
    } else if (layout === 'edit') {
        show = <UserEdit/>
    }

    const handleUsers = {
        users,
        userEdit,
        handleAction,
        addUser,
        updateUser,
        deleteUser,
    }

    return (
        <>
            <HandleUsersContext.Provider value={handleUsers}>
                <div className="p-4">
                    {show}
                </div>
            </HandleUsersContext.Provider>

            
        </>
    )
}