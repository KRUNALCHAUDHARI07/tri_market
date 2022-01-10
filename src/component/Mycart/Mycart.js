import React, { useLayoutEffect } from 'react'
import ReactStar from 'react-stars'
import { useCookies } from 'react-cookie';
import {useState,useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../logo.svg'
import mycartModule from './Mycart.module.css'
import createUrl from '../../fetchData/createUrl';
import VarifyOtp from '../../fetchData/VarifyOtp';


const Mycart = () => {
    const [ cookie,setCookie] = useCookies(['token']);
    const Navigate = useNavigate();
    const [Owner, setOwner] = useState('');
    const [Product, setProduct] = useState('');

    const ratingChanged = (newRating) => {
        console.log(newRating);
    }
    useLayoutEffect(() => {
        getData();
    }, [])
    const token = cookie.token;
    const getData = async() => {
        
        const response = await createUrl('getmycart','GET','',token);
        if(response.message === 'Request Success.'){
            console.log(response.data);
            setProduct(response.data.cart_product);
            setOwner(response.data)
            
        }else{
            const userData = {
                "id":1,
                "status":""
            };
            const getToken = await VarifyOtp('otp',userData);
            // console.log(getToken.data.token);
            setCookie('token',getToken.data.token);
        }
    }
    const productClick = (productId) => {
        console.log("product :"+ productId);
        Navigate('/product',{
            state:{
                data:productId
            }
        })
    }
    return (
        <div>
            <h1 className={mycartModule.cartHeader}>My Cart</h1>
            <h2>{Owner.business_name}</h2>
            <div className="cart-items">
                {Product.map((product)=> (
                    <div className={mycartModule.product}  onClick={() => productClick(Product.id)}>
                    <img src={logo} alt="product" width={300} />
                        <h2>{product.product_name}</h2>
                        <p>{product.quantity}</p>
                        <p><span className={mycartModule.mrp}>{product.variant_mrp}</span> <span className={mycartModule.selling}>{product.variant_price}</span></p>
                        
                    </div>
                ))}
                    

                
            </div>
        </div>
    )
}

export default Mycart
