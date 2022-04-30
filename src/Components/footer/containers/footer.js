import React, {useRef, useEffect} from "react";
import Footer from "..";
import './footer.css'
import { Container, Row, Col } from "react-bootstrap";
import FacebookFooter from './facebook_footer.png'
import TwitterFooter from './twitter_footer.png'
import InstagramFooter from './instagram_footer.png'
import TiktokFooter from './tiktok_footer.png'
import {RiMapPin2Fill} from 'react-icons/ri';
import {ImPhone} from 'react-icons/im'
import {BsGlobe} from 'react-icons/bs'
import Fade from 'react-reveal/Fade'

export function FooterContainer(){

    return(
        <div className="footer-background">
                <Fade right>
                <Container className="footer-container">
                    <div className="footer-div">
                            <Row className="row1">
                                <Col className="column-left">
                                    <Row className="row2">
                                        <h4 className="header-left">Reach Us</h4>
                                        <Col className="column-left-info" sm={12}>
                                            <p className="info-para"><RiMapPin2Fill className="info-icon"/> 1011 Romualdez St. UN Avenue Ermita Manila</p>
                                        </Col>
                                        <Col className="column-left-info" sm={12}>
                                            <p className="info-para"><ImPhone className="info-icon"/> (02) 353-5333 | +63 917-872-1111</p>
                                        </Col>
                                        <Col className="column-left-info" sm={12}>
                                            <p className="info-para"><BsGlobe className="info-icon"/> sales@hug.com.ph</p>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col className="column-right">
                                    <Row className="row3">
                                        <h4 className="header-right">Shop Now</h4>
                                        
                                        <Col className="column-links" sm={12}>
                                            <a href="https://www.lazada.com.ph/shop/hug1629968689/?path=promotion-32522-0.htm&tab=promotion"
                                            className="lazada-footer"
                                            target="_blank"
                                            >
                                            <img  className="laicon"/>
                                            Lazada
                                            </a>
                                        </Col>

                                        <Col className="column-links" sm={12}>
                                            <a href="https://shopee.ph/hugofficialstore"
                                            className="shopee-footer"
                                            target="_blank"
                                            >
                                            <img className="shicon"/>
                                            Shopee
                                            </a>
                                        </Col>

                                        <Col className="column-links" sm={12}>
                                            <a href="https://www.facebook.com/HUGOfficialStore/"
                                            className="facebook-footer"
                                            target="_blank"
                                            >
                                            <img className="fbicon"/>
                                            Facebook 
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col className="follow-us-column" xs lg={12}>
                                    <Row>
                                        <Col className="column-middle" xs lg={10}>
                                            <p className="follow-us">Follow Us</p>
                                        </Col>
                                        <Col className="column-middle-links" xs lg={2}>
                                            <a href="https://www.facebook.com/HUGOfficialStore/"
                                            className=""
                                            target="_blank">
                                                <img className='follow-us-fb'/>
                                            </a>

                                            <a href="https://www.instagram.com/hugofficialph/"
                                            className=""
                                            target="_blank">
                                                <img className='follow-us-ig'/>
                                            </a>

                                            <a href="https://www.tiktok.com/@hugofficialstore"
                                            className=""
                                            target="_blank">
                                                <img src={TiktokFooter} className='follow-us-tk'/>
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                    </div>
                </Container>
                </Fade>
        </div>
    )
}