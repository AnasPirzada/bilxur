import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../pngs/login&Signup/logo.png';

export const Login = () => {
  return (
    <>
      <div style={{ backgroundColor: '#000' }}>
        <Container>
          <Row>
            {/* Left side - Sign-in form */}
            <Col md={6} className='mt-4 mb-4'>
              <div
                style={{
                  backgroundColor: '#fff',
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  className='shadow'
                  style={{
                    width: '60%',
                    height: '80%',
                    borderRadius: '10px',
                  }}
                >
                  <h1
                    className='mt-4'
                    style={{
                      color: '#707070',
                      fontSize: '5vh',
                      textAlign: 'center',
                    }}
                  >
                    Sign In
                  </h1>
                  <input
                    className='mt-4 mb-4 shadow'
                    placeholder='Email ID'
                    style={{
                      borderRadius: '10px',
                      marginLeft: '10%',
                      border: 'transparent',
                      width: '84%',
                      height: '8%',
                    }}
                  />
                  <input
                    className='mt-2 mb-4 shadow'
                    placeholder='Password'
                    style={{
                      borderRadius: '10px',
                      marginLeft: '10%',
                      border: 'transparent',
                      width: '84%',
                      height: '8%',
                    }}
                  />
                  {/* Adjust the position of the div containing the "Forgot Password" button */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-end',
                      width: '84%',
                      marginLeft: '50%',
                    }}
                  >
                    <button
                      type='submit'
                      className='shadow mt-3 mb-4'
                      style={{
                        borderRadius: '10px',
                        width: '50%',
                        height: '8%',
                        fontSize: '0.85vw',
                        backgroundColor: '#fff',
                        border: 'transparent',
                      }}
                    >
                      Forgot Password
                    </button>
                  </div>
                  <button
                    type='submit'
                    className='mt-4 mb-4'
                    style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      borderRadius: '20px',
                      width: '80%',
                      height: '10%',
                      border: 'transparent',
                      marginLeft: '30px',
                    }}
                  >
                    Sign In
                  </button>
                  <h6
                    style={{
                      fontFamily: 'Gilroy',
                      fontSize: '12px',
                      textAlign: 'center',
                    }}
                  >
                    Don't have an Account? Sign UP
                  </h6>
                </div>

                <h2
                  className='hr-lines'
                  style={{
                    position: 'relative',
                    color: '#707070',
                    textAlign: 'center',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      content: ' ',
                      height: '2px',
                      width: '130px',
                      background: 'red',
                      top: '50%',
                      left: '0',
                    }}
                  ></span>
                  Sign in with
                  <span
                    style={{
                      position: 'absolute',
                      content: ' ',
                      height: '2px',
                      width: '130px',
                      background: 'red',
                      top: '50%',
                      right: '0',
                    }}
                  ></span>
                </h2>
              </div>
            </Col>
            {/* Right side - Logo */}
            <Col md={6}>
              <img src={img} alt='logo' />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
