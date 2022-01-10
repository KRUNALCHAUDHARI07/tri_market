import React from 'react'
import { useCookies } from 'react-cookie'
import { Outlet } from 'react-router-dom';
import style from './Header.module.css';
import logo from './tree_logo.jpg';
const Header = () => {
    const [cooies,usecookies]= useCookies(['token'])
    const logOut = () => {
        usecookies('token','')
    }
    return (
        <div className={style.mainHeader}>
            <h1 className={style.logo}>Tri Market </h1>
            <img className={style.app_logo} src={logo} width='40px' alt="" />
            <p onClick={logOut} className={style.right}><a href='/login'>logout</a> </p>
            <Outlet />
        </div>
    )
}

export default Header
