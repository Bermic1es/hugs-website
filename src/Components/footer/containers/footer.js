import React from "react";
import Footer from "..";
import './footer.css'
import Background from './website_footer2.png'
import { Container, Row, Col } from "react-bootstrap";
import FacebookFooter from './facebook_footer.png'
import TwitterFooter from './twitter_footer.png'
import InstagramFooter from './instagram_footer.png'
import YoutubeFooter from './youtube_footer.png'
import LazadaFooter from './lazada_footer.png'
import LocationFooter from './location_footer.png'
import PhoneFooter from './phone_footer.png'
import GlobeFooter from './globe_footer.png'

export function FooterContainer(){

    return(
        <div className="footer-background">
            <div className="footer-div">
                <Container className="footer-container">
                    <Row className="row1">

                        <Col className="column-left">
                            <Row className="row2">
                                <h4 className="header-left">Reach Us</h4>
                                <Col sm={12}>
                                    <p>Address</p>
                                </Col>
                                <Col sm={12}>
                                    <p>Address</p>
                                </Col>
                                <Col sm={12}>
                                    <p>Address</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col className="column-right">
                            <Row className="row3">
                                <h4 className="header-right">Shop Now</h4>
                                <Col className="column-links" sm={12}>
                                    <a href="#"
                                    className="facebook-footer"
                                    >
                                    <i className="fab fa-facebook-f fbicon"/>
                                    Facebook 
                                    </a>
                                </Col>
                                <Col className="column-links" sm={12}>
                                    <a href="#"
                                    className="shopee-footer"
                                    >
                                    <i className="fa-solid fa-s shicon"/>
                                    Shopee
                                    </a>
                                </Col>
                                <Col className="column-links" sm={12}>
                                    <a href="#"
                                    className="lazada-footer"
                                    >
                                    <i className="fa-solid fa-l laicon"/>
                                    Lazada
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                    </Row>

                    <Row className="row4">
                        <Col className="column-middle" sm={{span: 7, offset:3}}>
                            <p className="follow-us">Follow Us</p>
                        </Col>
                        <Col className="column-middle" sm={2}>
                            <a href=""
                            className="">
                                <img src={FacebookFooter} className='follow-us-fb'/>
                            </a>
                            <a href=""
                            className="">
                                <img src={TwitterFooter} className='follow-us-tw'/>
                            </a>
                            <a href=""
                            className="">
                                <img src={InstagramFooter} className='follow-us-ig'/>
                            </a>
                            <a href=""
                            className="">
                                <img src={YoutubeFooter} className='follow-us-yt'/>
                            </a>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        </div>
    )
}