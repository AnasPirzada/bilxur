import React from 'react';
import {
  Col,
  Container,
  Row,
  FormGroup,
  FormCheck,
  FormLabel,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Crouseldet from '../Components/crouselDetail.js';
import Crouselbtn from '../Components/buttonCrousel.js';
import Loc from '../svg/icons/locaton.svg';
import Dropdown from '../Components/dropDown.js';
import Increament from '../Components/incButton.js';
import Size from '../Components/sizeModal.jsx';
export const Detail = () => {
  return (
    <>
      <Header />
      <Crouselbtn />
      <Row
        className='mb-4'
        style={{
          backgroundColor: '#B3BBC1',
          color: '#fff',
          padding: '25px 0',
        }}
      >
        <Container>
          <Row>
            <Col>
              <h6
                style={{
                  fontFamily: 'Gilroy',
                  color: '#707070',
                  fontSize: '14px',
                }}
              >
                Discover / Sneakers / Nike (AirMax)
              </h6>
            </Col>
            <Col style={{ transform: 'translateX(250px) translateY(-22px)' }}>
              <button
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#000',
                  borderRadius: '18px',
                  border: '1px solid #000000',
                  height: '32px',
                  width: '191px',
                }}
              >
                Pervious Product
              </button>
            </Col>
            <Col style={{ transform: 'translateX(220px) translateY(-22px)' }}>
              <button
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#000',
                  borderRadius: '18px',
                  border: '1px solid #000000',
                  height: '32px',
                  width: '191px',
                }}
              >
                Next Product
              </button>
            </Col>
          </Row>
        </Container>
      </Row>
      <Container>
        <Crouseldet />
      </Container>
      <Container>
        <Row className='mt-4' style={{ marginLeft: '20%' }}>
          <Col>
            <h1 style={{ fontWeight: 'bold' }}>Nike (AirMax)</h1>
          </Col>
          <Col>
            <h1 style={{ fontFamily: 'Gilroy' }}>
              {' '}
              <span style={{ fontWeight: 'initial' }}>$</span> 150
            </h1>
          </Col>
        </Row>
        <Row className='mt-4' style={{ marginLeft: '20%' }}>
          <Col>
            <h2 style={{ fontFamily: 'Gilroy' }}>Delivery Option</h2>
          </Col>
          <Col style={{ alignItems: 'center' }}>
            <button className='btn-see' type='submit'>
              Blixur{' '}
              <span
                style={{
                  fontFamily: 'Gilroy',
                  color: '#F1C800',
                  fontSize: '17px',
                }}
              >
                +
              </span>
            </button>
            <h5
              className='mt-2'
              style={{
                fontSize: '11px',
                color: '#9DAAAE',
                transform: 'translateX(20px) translateY(0px)',
                fontFamily: 'Gilroy',
              }}
            >
              coming soon
            </h5>
          </Col>
        </Row>
        <Row
          className='mb-4'
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '22px',
            backgroundColor: '#AFB5B8',
            width: '58%',
            height: '130px',
          }}
        >
          <Col style={{ flex: 1 }}>
            <img src={Loc} alt='location' />
          </Col>

          <Col style={{ flex: 2 }}>
            <h5
              style={{
                fontSize: '20px',
                color: '#858381',
                marginLeft: '-15px',
              }}
            >
              Example
            </h5>
          </Col>

          <Col style={{ flex: 4 }}>
            <h6 style={{ color: '#858381', fontSize: '1vw' }}>
              Deliver to Lahore Civil Lines, Johar Town208001
            </h6>
          </Col>

          <Col style={{ flex: 3 }}>
            <button
              type='submit'
              style={{
                backgroundColor: '#707070',
                color: '#fff',
                border: 'transparent',
                justifyContent: 'space-between',
                width: '85%',
                height: '54px',
              }}
            >
              Change
            </button>
          </Col>
        </Row>

        <Row style={{ marginLeft: '20%' }} className='mt-4'>
          <Col>
            <h2>Product Description </h2>
          </Col>
        </Row>
        <Row className='mt-2' style={{ marginLeft: '20%' }}>
          <Col>
            <p
              style={{
                fontSize: '0.90vw',
                color: '#AFB5B8',
                fontFamily: 'Gilroy',
              }}
            >
              I have the skills and qualifications to provide the selected
              services. This statement applies to future services you may add. I
              have
              <br /> the skills and qualifications to provide the selected
              services. This statement applies to future services you may add. I
              have <br />
              the skills and qualifications to provide the selected services.
            </p>
          </Col>
        </Row>
        <Row style={{ marginLeft: '20%' }} className='mt-4'>
          <Col>
            <h2>Available Options</h2>
            <Row className='mt-4'>
              <Col>
                <Dropdown className='mt-4' />
              </Col>
              <Col>
                <Increament />
              </Col>
            </Row>
            <Row className='mt-4'>
              <FormGroup>
                <FormCheck
                  type='radio'
                  id='termsAndConditions'
                  label='I agree with terms and conditions'
                />
              </FormGroup>
            </Row>
            <Link to='Size'>
              <button
                className='shadow mt-4'
                type='submit'
                style={{
                  marginLeft: '20%',
                  backgroundColor: '#000',
                  color: '#fff',
                  borderRadius: '22px',
                  width: '400px',
                  height: '35px',
                  border: 'transparent',
                }}
              >
                Add to Cart
              </button>
            </Link>
            <Size />
            <Row className='mt-4' style={{ paddingBottom: '10%' }}>
              <Col>
                <button
                  className='shadow mt-4'
                  type='submit'
                  style={{
                    backgroundColor: '#1DACE8',
                    color: '#fff',
                    borderRadius: '22px',
                    width: '300px',
                    height: '42px',
                    border: 'transparent',
                  }}
                >
                  BUY IT NOW
                </button>
              </Col>
              <Col>
                <button
                  className='shadow mt-4'
                  type='submit'
                  style={{
                    backgroundColor: '#000',
                    color: '#fff',
                    borderRadius: '31px',
                    width: '300px',
                    height: '42px',
                    border: 'transparent',
                  }}
                >
                  Visit Profile
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
export default Detail;
