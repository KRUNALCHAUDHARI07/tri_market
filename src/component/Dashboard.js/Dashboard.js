import React, { useState, useEffect } from 'react'
import logo from '../../logo.svg';
import style from './Dashboard.module.css'
import { Carousel } from "react-bootstrap";
import createUrl from '../../fetchData/createUrl';
import VarifyOtp from '../../fetchData/VarifyOtp';
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


const Dashboard = (props) => {
    const Navigatehistory = useNavigate();
    const [cookies,SetCookies] = useCookies(['token'])
    const [Sellers, setSellers] = useState([]);
    const data=[
        {
            image_url:{logo},
            text:"First slide label",
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            image_url:{logo},
            text:"Second slide label",
            message:"Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            image_url:{logo},
            text:"Third slide label",
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
    ]
    
    const getData = async() => {
        const data={
            "latitude":212.975589,
            "longitude":72.598498,
            "device_token":12345
        };
        let token ;
        SetCookies('Token',token);
        const response = await createUrl('getDashboardData',
            'POST',data,
            cookies.token);
        // console.log(response);
        // console.log(response.message);
        if(response.message === 'Request Success.'){
            setSellers(response.data.sellers)
        }else{
            // console.log("token wrong");
            const userData = {
                "id":1,
                "status":""
            }
            const getToken = await VarifyOtp('otp',userData);
            console.log(getToken.data.token);
            SetCookies('token',getToken.data.token);
        }
        // console.log(Sellers.length);
    }
    useEffect(() => {
        getData();
    },[])
    const shopClick = (id) => {
        console.log("shop "+id);
        // Navigate('/shop')
        Navigatehistory('/shop',{
            state:{
                data:id
            }
        })
    }
  
    return (
        <div>
            <div className="banners" style={{backgroundColor:'blue'}}>
            <Carousel>
                {data.map((item,index)=> (
                   
                    <Carousel.Item key={index}>
                        <img
                                src={logo}
                                alt="First slide"
                                width='200px'
                                style={{marginBottom:'150px'}}
                            />
                            <Carousel.Caption style={{color:'black'}}>
                            <h3>{item.text}</h3>
                            <p>{item.message}</p>
                            </Carousel.Caption>

                        
                    
                  </Carousel.Item>
              ))}
  
                </Carousel>
            </div>
            { Sellers.map((seller) => (
            <div className={style.sellers} 
            key={seller.id}
            onClick={()=>{shopClick(seller.id)}}>
                <div style={{margin:'10px',background:'#000'}}>
                    <img src={logo} width='70px' alt="" />
                </div>
                <div className="seller-info" >
                    <h4 style={{margin:'10px 0px 0px 12px',textAlign:'left'}}>{seller.business_name}</h4>
                    <p style={{margin:'0px 0px 0px 12px',textAlign:'left'}}>{seller.business_type} </p>
                </div>
            </div>
            
            )) }
            {/* <div className={style.sellers}>
                <div style={{paddingTop:'10px',background:'#fff'}}>
                    <img src={logo} width='70px' alt="" />
                </div>
                <div className="seller-info">
                    <h4 style={{margin:'10px 0px 0px 12px',textAlign:'left'}}>Business Name</h4>
                    <p style={{margin:'0px 0px 0px 12px',textAlign:'left'}}>business_type</p>
                </div>
            </div> */}
            <div className={style.sellers}>
                <div style={{paddingTop:'10px'}}>
                    <img src={logo} width='70px' alt="" />
                </div>
                <div className="seller-info">
                    <h4 style={{margin:'10px 0px 0px 12px',textAlign:'left'}}>Business Name</h4>
                    <p style={{margin:'0px 0px 0px 12px',textAlign:'left'}}>business_type</p>
                </div>
            </div>
            <div className={style.sellers}>
                <div style={{paddingTop:'10px',background:'#fff'}}>
                    <img src={logo} width='70px' alt="" />
                </div>
                <div className="seller-info">
                    <h4 style={{margin:'10px 0px 0px 12px',textAlign:'left'}}>Business Name</h4>
                    <p style={{margin:'0px 0px 0px 12px',textAlign:'left'}}>business_type</p>
                </div>
            </div>
        </div>
    )
}
export default Dashboard
