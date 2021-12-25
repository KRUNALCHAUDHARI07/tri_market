import React from 'react';
import footerStyle from './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className={footerStyle.footer}>
                <a href="/home" className={footerStyle.links}>home</a>
                <a href="/profi">Profile</a>
            </div>
        </div>
    )
}

export default Footer
