import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './featured.css'
import Featured1 from './featured_1.jpg';
import Featured2 from './featured_2.jpg';
import Featured3 from './featured_3.jpg';
import Featured4 from './featured_4.jpg';

const FeaturedContainer = () => {
  return (
    <Container className='container'>
        <Container className='inner-container'>
            <h1 className='featured'>Featured Products</h1>
            <Row className='row'>
                <Col lg={6} className='col'>
                    <img className='featured2' src={Featured1} alt=''>
                            
                    </img>
                </Col>
                <Col lg={6} className='col'>
                    <img className='featured2' src={Featured2} alt=''>
                            
                    </img>
                </Col>
                <Col lg={6} className='col'>
                    <img className='featured2' src={Featured3} alt=''>
                            
                    </img>
                </Col>
                <Col lg={6} className='col'>
                    <img className='featured2' src={Featured4} alt=''>
                            
                    </img>
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default FeaturedContainer
