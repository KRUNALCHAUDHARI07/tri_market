import React,{useEffect, useState} from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import createUrl from '../../fetchData/createUrl';
import logo from '../../logo.svg';
import { useCookies } from 'react-cookie'
import styleProfile from './Profile.module.css';
import VarifyOtp from '../../fetchData/VarifyOtp';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [cookies, setcookies] = useCookies(['token']);
    const Navigation = useNavigate();
    const [userData, setUserData] = useState("")
    let token = cookies.token;
    const getData = async() => {
        const response = await createUrl('getUserinfo','GET','',token);
        if(response.message === "Request Success."){
            console.log(response.data);
            setUserData(response.data);
        }else{
            const userData = {
                "id":1,
                "status":""
            };
            const getToken = await VarifyOtp('otp',userData);
            setcookies('token',getToken)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const myCart = () => {
        Navigation('/mycart');
    }

    const myOrders = () => {
        Navigation('/myorders')
    }
    return (
        <div className={styleProfile.profile}>
            <h1>Profile</h1>
            <img src={logo} width='240px' alt="" />
            <h2>{userData.full_name}</h2>
            <p>{userData.phone}</p>
            <Row>
                <Col md='6'>
                    <div className="d-grid gap-1 m-2">
                        <Button onClick={myCart} variant='primary' size='lg'>Your Cart</Button>
                    </div>
                </Col>
                <Col md='6'>
                    <div className="d-grid gap-1 m-2">
                        <Button onClick={myOrders} variant='success' size='lg'>Your Order</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Profile
