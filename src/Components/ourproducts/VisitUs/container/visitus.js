import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import Facebook from '../images/facebook_white.png'
import Shopee1 from '../images/shopee_white1.png'
import Shopee2 from '../images/shopee_white2.png'
import Lazada from '../images/lazada_white.png'
import './visitus.css'

const VisitUsContainer = () => {
  return (
    <div className='container'>
        <Container>
            <h1 className='title'>Visit Us</h1>
            <Row className='group-buttons'>
                <Col sm='auto'>
                    <a href='https://www.facebook.com/HUGOfficialStore/' 
                    className='facebook-button' target="_blank">
                        <img src={Facebook} className='facebook-logo'/>
                        Facebook
                    </a>
                </Col>
                <Col sm='auto'>
                    <a href='https://shopee.ph/hugofficialstore' 
                    className='shopee-button' target="_blank">
                        <img src={Shopee2} className='facebook-logo'/>
                        Shopee
                    </a>
                </Col>
                <Col sm='auto'>
                    <a href='https://www.lazada.com.ph/shop/hug1629968689?spm=a2o4l.store_shop_fail_page_pc.recommend_store.1.7f0a2992Oj032f' 
                    className='lazada-button' target="_blank">
                        <img src={Lazada} className='facebook-logo'/>
                        Lazada
                    </a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default VisitUsContainer
