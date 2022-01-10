import React from 'react'
import style from './Otp.module.css'
const Otp = () => {
    const varifyOtp = () => {
        console.log("submit");
    }
    return (
        <div className={style.otpMainPage}>
            <h1>Enter Otp</h1>
            <form onSubmit={varifyOtp}></form>
            <input type='text' /><br />
            <button type='submit' className={style.submit}>Submit</button>
        </div>
    )
}

export default Otp
