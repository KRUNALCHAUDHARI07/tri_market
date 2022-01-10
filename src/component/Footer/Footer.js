import React from 'react';
import footerStyle from './Footer.css';
import { Row ,Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <div>
            <div className={footerStyle.footer}>
                <Row>
                    <Col>
                        <div className="btn">
                        <a href="">Home</a>
                        </div>
                    </Col>
                    <Col>
                    <div className="btn">
                        <a href="/profile">Profile</a>
                    </div> 
                    </Col>
                    <Col>
                        <div className="btn">
                            <a href="/mycart">myCart</a> 
                        </div>
                    </Col>
                </Row>
                
                
                
                            </div>
        </div>
    )
}

export default Footer
