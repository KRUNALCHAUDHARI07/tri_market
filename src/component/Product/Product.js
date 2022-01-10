import React ,{useState, useEffect} from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import createUrl from '../../fetchData/createUrl';
import logo from '../../logo.svg';
import { useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import VarifyOtp from '../../fetchData/VarifyOtp';
import styleModule from './Product.module.css';
import ReactStar from 'react-stars';

const Product = () => {
    const previousPageData = useLocation();
    const productId= previousPageData.state.data;
    const [ProductData, setProductData] = useState("");
    const [cookies,setcookies]=useCookies(['token']);
    let token = cookies.token;

    
    const getData = async() => {
        const data = {
            "id": productId
        }
        const response = await createUrl('getProductdetails','POST',data,token);
        if(response.message === "Request Success."){
            console.log(response.data);
            setProductData(response.data.product_details);
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
    },[]);
    const ratingChanged = (newRating) => {
        console.log(newRating);
    }
    
    
    const buynow = () => {
        console.log('buy now');
    }
    const addToCart = () => {
        console.log("add to cart");
    }
    return (
        <div>
            <Row>
                <Col md='6'>
                    
                <Row>
                    <Col xs='1'>
                        <img width='50px' src={logo} alt="" />
                        <img width='50px' src={logo} alt="" />
                        <img width='50px' src={logo} alt="" />
                        <img width='50px' src={logo} alt="" />
                    </Col>
                    <Col>
                            <img src={logo} alt="" />
                    </Col>
                    
                </Row>
                </Col>
                <Col>
                    <h1>Product Name {ProductData.product_name}</h1>
                    <p className={styleModule.description}>{ProductData.description}</p>
                    
                    <ReactStar 
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={'#ffd700'} />
                    <p>Price : <span className={styleModule.price}>{ProductData.mrp}</span>  </p>
                    <p>Selling Price : <span className={styleModule.price}>{ProductData.selling_price}</span></p>
                    <div className="d-grid gap-2 ">
                        <Button onClick={buynow} color='primary' size='lg'>Buynow</Button>
                        <Button onClick={addToCart}variant='success' size='lg'>Add to cart</Button>
                    </div>
                
                </Col>
            </Row>
           
            
        </div>
    )
}

export default Product
