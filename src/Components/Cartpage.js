import React from 'react';
import { Navbar, Row, Container, Nav, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../Css/header.css';
import Navigation from '../Components/Cartnav.js';
import Footer from '../Components/Footer.js';
import shoes from '../svg/cart/denis-marosan-q35zYDIJSjo-unsplash.png';
import shoes2 from '../svg/cart/usama-akram-kP6knT7tjn4-unsplash.png';
import Header from './Header';
export const Cart = () => {
  return (
    <>
      <Navigation />
      <Container style={{ marginTop: '50px' }}>
        <Row>
          <h1
            style={{
              textAlign: 'center',
              marginLeft: '30%',
              fontSize: '6vh',
              fontWeight: '2px',
            }}
          >
            Your Shopping Bag
          </h1>
        </Row>
        <Col style={{ marginTop: '50px' }}>
          <h6 style={{ fontSize: '3vh', marginLeft: '-10px' }}>Your item</h6>
        </Col>
        <Row>
          <Col>
            <img src={shoes2} />
          </Col>
          <Col style={{ marginLeft: '3%' }}>
            <Row>
              <h3>Root shoe</h3>
            </Row>
            <Row>
              <h4
                style={{ color: '#6B6B6B', fontSize: '3vh', marginTop: '4%' }}
              >
                Nike (AirMax)
              </h4>
            </Row>
            <Row>
              <p
                style={{
                  color: '#6B6B6B',
                  fontSize: '0.95vw',
                  marginTop: '4%',
                }}
              >
                I have the skills and qualifications to provide the selected
                services. This statement apply to future services you may add. I
                have the skills and qualifications to provide the selected
                services. This statement apply to future services you may add. I
                have the skills and qualifications to provide the selected
                services.
              </p>
            </Row>
          </Col>
          <Col>
            <input placeholder='1' />
            <h5 style={{ color: '#505050', fontSize: '0.95vw' }}>Remove</h5>
          </Col>

          <Col>
            <h4>$250.50</h4>
          </Col>
        </Row>
        <hr className='mb-4 mt-4' />
        <Row>
          <Col>
            <img src={shoes} />
          </Col>
          <Col style={{ marginLeft: '3%' }}>
            <Row>
              <h3>Jogges</h3>
            </Row>
            <Row>
              <h4
                style={{ color: '#6B6B6B', fontSize: '3vh', marginTop: '4%' }}
              >
                Jordan
              </h4>
            </Row>
            <Row>
              <p
                style={{
                  color: '#6B6B6B',
                  fontSize: '0.95vw',
                  marginTop: '4%',
                }}
              >
                I have the skills and qualifications to provide the selected
                services. This statement apply to future services you may add. I
                have the skills and qualifications to provide the selected
                services. This statement apply to future services you may add. I
                have the skills and qualifications to provide the selected
                services.
              </p>
            </Row>
          </Col>
          <Col>
            <input placeholder='1' />
            <h5 style={{ color: '#505050', fontSize: '0.95vw' }}>Remove</h5>
          </Col>

          <Col>
            <h4>$350.50</h4>
          </Col>
        </Row>
        <hr />
      </Container>
      <Container style={{ width: '50%' }}>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h3 style={{ color: '#707070' }}>Sub-total</h3>
          <h6 style={{ textAlign: 'right' }}>$600.80</h6>
        </Row>
        <hr />
        <Row>
          <h5 style={{ color: '#707070', fontSize: '0.8vw' }}>
            Estimated Shipping (6-8 Business days)
          </h5>
        </Row>
        <button type='submit' className='btn btn-submit'>
          Checkout
        </button>
      </Container>

      <Footer />
    </>
  );
};
export default Cart;
