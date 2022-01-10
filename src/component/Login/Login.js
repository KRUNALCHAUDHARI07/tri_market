import React, { useState, useEffect } from 'react'
import style from './Login.module.css';
import { Button } from 'react-bootstrap';
import PublicApi from '../../fetchData/PublicApi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const Navigation = useNavigate();
    const [userName, setUserName] = useState('')
    const [userPhone, setUserPhone] = useState('');
    const Login = (event) => {
        event.preventDefault();
        console.log(userName+ " and "+ userPhone);
        getData();
    }
    const getData = async() => {
        const data = {
            full_name:"Krunal",
            phone:7574056373
        }
        console.log(data);
        const response = await fetch(
            "http://localhost:7500/public/user/login", {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(data)
         });
       const getData = await response.json();
       console.log(getData);
         if(getData.message === "Login successfully."){
            Navigation('/otp',{
                state:{
                    id:getData.data.id
                }
            })
         }else{
             alert("user not exist")
         }
        
    }
    
    return (
        <div className={style.Login}>
            <h1>Login</h1>
            <form onSubmit={Login}>
            <div className={style.input}>
                <input type="text" 
                value={userName} 
                placeholder='enter your Name' 
                name='name'
                onChange={(e) => {setUserName(e.target.value)}}/>
            </div>
            <div className={style.input}>
                <input 
                type="number" 
                value={userPhone}  
                placeholder='enter mobile number' 
                name='phone'
                onChange={(e) => {setUserPhone(e.target.value)}}/>
            </div>
            <Button type='submit' variant='success' size='md'>Login</Button><br />

            </form>
            
            <div className={style.btn}>
                <a href="/register">register</a>
            </div>
        </div>
    )
}

export default Login
