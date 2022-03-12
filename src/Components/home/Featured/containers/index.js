import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './featured.css'


const FeaturedContainer = () => {
  return (
    <Container className='container'>
        <Container className='inner-container'>
            <h1 className='featured'>Featured Products</h1>
            <Row className='row'>
                <Col className='col'>
                    <img className='featured2' src='http://www.hug.com.ph/wp-content/uploads/2019/02/TV.jpg' alt=''>
                            
                    </img>
                </Col>
                <Col className='col'>
                    <img className='featured2' src='http://www.hug.com.ph/wp-content/uploads/2019/02/TV.jpg' alt=''>
                            
                    </img>
                </Col>
            </Row>
            <Row className='row'>
                <Col className='col'>
                    <img className='featured2' src='http://www.hug.com.ph/wp-content/uploads/2019/02/TV.jpg' alt=''>
                            
                    </img>
                </Col>
                <Col className='col'>
                    <img className='featured2' src='http://www.hug.com.ph/wp-content/uploads/2019/02/TV.jpg' alt=''>
                            
                    </img>
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default FeaturedContainer
