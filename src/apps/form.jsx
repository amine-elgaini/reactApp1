import React, {useEffect, useRef, useState} from 'react'
import Errors from './errors'

export default function Form() {

    const username = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();
    const check = useRef();

    const [errors, setErros] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        formValition();
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const formValition = () => {
        const usernameValue = username.current.value.trim();
        const inputEmailValue = inputEmail.current.value.trim();
        const inputPasswordValue = inputPassword.current.value;
        const checkValue = check.current.checked;

        let newErrors = []
        
        if (usernameValue.length <= 4) {
            newErrors.push('Your Name Should Be More Than 4 Caracters');
        }

        if (!validateEmail(inputEmailValue)) {
            newErrors.push('Your Email Is Not Valid')
        }

        if (inputPasswordValue.length <= 5) {
            newErrors.push('Your Password Should Be More Than 5 Caracters');
        }

        if (!checkValue) {
            newErrors.push('You Should Check The Conditions')
        }
        setErros(newErrors);
    }

    useEffect(()=>{
        inputEmail.current.value = 'example@gmail.com';
    }, [])

    return (
        <>
            <form className="h-screen container mx-auto px-4 py-5">
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                    <input ref={username} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name..." required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input ref={inputEmail} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input ref={inputPassword} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                    <input ref={check} id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                {
                    errors.length !== 0 && <Errors errorsTitle='We Should Follow This Rules' errors={errors}/>
                }
                <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </>
    )
}