import React from 'react'
import style from './Header.module.css';
import logo from './tree_logo.jpg';
const Header = () => {
    return (
        <div className={style.mainHeader}>
            <h1 className={style.logo}>Tri Market </h1>
            <img className={style.app_logo} src={logo} width='40px' alt="" />
        </div>
    )
}

export default Header
