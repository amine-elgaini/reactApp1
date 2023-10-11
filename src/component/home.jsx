import {ThemeContext} from './../App'
import React, { useContext } from 'react'

export default function Home() {

    const darkTheme = useContext(ThemeContext);

    let classNameToggled = '';
    classNameToggled += darkTheme ? ' bg-black' : ' bg-white';
    classNameToggled += darkTheme ? ' text-white' : ' text-black';

    return (
        <h1 className={classNameToggled}>Just Hi Your are At Home</h1>
    )

}