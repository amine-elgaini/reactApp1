import ProductList from './component/products'
import Form from './component/form'
import Home from './component/home'

import PageNotFound from './component/pageNotFound'
import './App.css';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Nav from './component/navbar'
import UserApp from './component/usersTable/userApp'

export const ThemeContext = React.createContext();

function App() {

  // get darkmode from if it's in the localstorage
  const getDarkMode = () => {
    let value = localStorage.getItem("darkMode") ?? false;
    let darkMode = false;
    if (value.toString() === 'true') {
      darkMode = true
    }
    return darkMode;
  }

  const [darkTheme, setDarkTheme] = useState(getDarkMode);

  const toggleTheme = () => {
    setDarkTheme(p => {
      localStorage.setItem('darkMode', !p);
      return !p;
    })
  }

  useEffect(()=>{
    let toggler = document.getElementById('darkMode');
    if (toggler && darkTheme) {
      toggler.checked = true;
    }
  }, [])

  return (
    <>
    <ThemeContext.Provider value={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={
            <>
              <Nav toggleTheme={toggleTheme}/>
              <div className= {`${darkTheme && 'dark:bg-gray-900'} container-fluid mx-auto w-75`}>
                <Outlet />
              </div>
            </>
          }>

              <Route index element={<Home/>}/>

              <Route path='/users' element={<UserApp/>}/>
              
              <Route path='/product' element={<ProductList/>}/>
              <Route path='/form' element={<Form/>}/>
              <Route path='*' element={<PageNotFound/>}/>


          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
    </>
  )
  
}

export default App
