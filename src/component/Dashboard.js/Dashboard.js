import React, { useState } from 'react'
import logo from '../../logo.svg';
import style from './Dashboard.module.css'
import { Carousel } from "react-bootstrap";
import createUrl from '../../fetchData/createUrl';
const Dashboard = () => {
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
        const response = await createUrl('getDashboardData','POST',data);
        console.log(response);
        setSellers(response.data.sellers)
    }
    getData();
    return (
        <div>
            <div className="banners" style={{backgroundColor:'blue'}}>
            <Carousel>
                {data.map(item=> (
                    <Carousel.Item>
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
            {Sellers.map((seller) => (
                <div className={style.sellers}>
                <div style={{paddingTop:'10px',background:'#fff'}}>
                    <img src={logo} width='70px' alt="" />
                </div>
                <div className="seller-info">
                    <h4 style={{margin:'10px 0px 0px 12px',textAlign:'left'}}>{seller.business_name}</h4>
                    <p style={{margin:'0px 0px 0px 12px',textAlign:'left'}}>{seller.business_type} </p>
                </div>
            </div>
            
            ))}
            <div className={style.sellers}>
                <div style={{paddingTop:'10px',background:'#fff'}}>
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
