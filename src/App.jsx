import ProductList from './apps/productApp/products'
import Form from './apps/form'
import Home from './apps/home'

import PageNotFound from './apps/pageNotFound'
import './index.css';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Nav from './apps/navbar'
import UserApp from './apps/usersApp/userApp'
import ToDoListApp from './apps/toDoList/ToDoListApp'
import NikeApp from './apps/nikeComponent/nikeApp';

export const ThemeContext = React.createContext();

function App() {

	const [darkTheme, setDarkTheme] = useState(()=> localStorage.getItem("darkMode") ?? 'light');

	const toggleTheme = () => {
		setDarkTheme(p => {
			const mode = p === 'dark' ? 'light' : 'dark';
			localStorage.setItem('darkMode', mode);
			return mode;
		})
	}

	useEffect(()=>{
		if (darkTheme === 'dark') {
			document.documentElement.classList.add('dark');
			document.getElementById('darkMode').checked = true;
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [darkTheme])

	return (
    <>
		<ThemeContext.Provider value={darkTheme}>
		<BrowserRouter>
			<Routes>
			<Route path='' element={
				<>
				<div className='min-h-screen bg-white dark:bg-gray-800'>
					<Nav toggleTheme={toggleTheme}/>
					<Outlet />
				</div>
				</>
			}>

				<Route index element={<Home/>}/>

				<Route path='reactApp1/users' element={<UserApp/>}/>
				<Route path='reactApp1/toDoList' element={<ToDoListApp/>}/>
				<Route path='reactApp1/product' element={<ProductList/>}/>
				<Route path='reactApp1/nikeApp' element={<NikeApp/>}/>
				<Route path='reactApp1/form' element={<Form/>}/>
				<Route path='*' element={<PageNotFound/>}/>


			</Route>
			</Routes>
		</BrowserRouter>
		</ThemeContext.Provider>
		</>
	)
	
}

export default App
