import {useState,useEffect} from 'react';
import ReactStar from 'react-stars';
import logo from '../../logo.svg';
import ShopModule from './Shop.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import createUrl from '../../fetchData/createUrl';
import VarifyOtp from '../../fetchData/VarifyOtp';
import { Col, Row } from 'react-bootstrap';

const Shop = () => {
    const Navigate = useNavigate();
    const [cookies,setcookies]= useCookies(['token'])
    let token = cookies.token;
   
    const [Products, setProducts] = useState([])
    const previousPageData = useLocation();
    const shopId = previousPageData.state.data;
    
    const ratingChanged = (newRating) => {
        console.log(newRating);
    }
useEffect(() => {
    getData()
    
}, [])

    const productClick = (productId) => {
        console.log("product :"+ productId);
        Navigate('/product',{
            state:{
                data:productId
            }
        })
    }
    const getData = async() => {
        const data = {
            seller_id: shopId,
            page_no: 1,
            display_item_numbers: 5  
        }
        const response = await createUrl('getsellerproduct','POST',data,token);
        if(response.message === 'Request Success.'){
            console.log(response);
            setProducts(response.data.product);
        }else{
            const userData = {
                "id":1,
                "status":""
            };
            const getToken = await VarifyOtp('otp',userData);
            // console.log(getToken.data.token);
            setcookies('token',getToken.data.token);
        }
    }
    return (
        <div className='shop'>
            <h1>Shop Name</h1>
            <Row>
                
            {Products.length < 0 ? 'No Products' : Products.map(product => (
            <Col md='6' key={product.id}>
            <div className={ShopModule.product}  onClick={() => productClick(product.id)}>
            <img src={logo} alt="product" width={300} />
                <h2>{product.product_name}</h2>
                <p>{product.product_unit}</p>
                <p><span className={ShopModule.mrp}>{product.mrp}</span> <span className={ShopModule.selling}>{product.selling_price}</span> </p>
                <ReactStar 
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={'#ffd700'} />
            </div>
            </Col>            
            ))}
            </Row>
            {/* <div className={ShopModule.product}>
                <img src={logo} alt="product" width={300} />
                <h3>Product Name</h3>
                <p>Product mrp / selling Price</p>
                <ReactStar 
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={'#ffd700'}
                value={5} />            </div>
            <div className={ShopModule.product}>
                <img src={logo} alt="product" width={300} />
                <h3>Product Name</h3>
                <p>Product mrp / selling Price</p>
                <ReactStar 
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={'#ffd700'} />
            </div>
             */}
            
        </div>
    )
}

export default Shop
