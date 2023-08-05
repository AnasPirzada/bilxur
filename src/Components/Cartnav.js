import React from 'react';
import { Navbar, Row, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../Css/cart.css';
import icon from '../svg/search.svg';
import cart from '../svg/cart/6635486791578982984.svg';

export const Cartnav = () => {
  return (
    <>
      <Row>
        <Navbar style={{ backgroundColor: 'white' }} expand='sm' variant='dark'>
          <Container fluid>
            <Navbar.Brand className='title'>
              <Link
                to='/'
                style={{
                  color: '#000',
                  spanDecoration: 'none',
                  fontSize: '23',
                  fontFamily: 'Calibri',
                }}
              >
                Bilxur
                <small style={{ fontSize: '0.95rem', margin: '5px' }}>
                  Usa
                </small>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls='offcanvasNavbar-expand-sm'
              className='custom-toggler'
            />
            <Navbar.Collapse id='offcanvasNavbar-expand-sm'>
              <Nav className='me-auto'>
                <div className='bot'>
                  <Link
                    className='nav-link'
                    to='/about'
                    style={{
                      width: '71',
                      height: '21',
                      color: '#000',
                      transform: 'translate(0 17)',
                      fontSize: '16',
                      fontFamily: 'Gilroy',
                      marginLeft: '90px',
                    }}
                  >
                    About
                  </Link>
                  <Link
                    className='nav-link'
                    to='/help'
                    style={{
                      width: '34',
                      height: '21',
                      transform: 'translate(0 17)',
                      color: '#000',
                      fontSize: '16',
                      fontFamily: 'Gilroy',
                    }}
                  >
                    Help
                  </Link>
                  <Link
                    className='nav-link'
                    to='/services'
                    style={{
                      width: '57',
                      height: '21',
                      transform: 'translate(0 17)',
                      color: '#000',
                      fontSize: '16',
                      fontFamily: 'Gilroy',
                    }}
                  >
                    Services
                  </Link>
                  <Link
                    className='shadow'
                    to='/sell'
                    style={{
                      fontSize: '0.65rem',
                      color: 'black',
                      backgroundColor: 'white',
                      color: '#000 ',
                      border: '1px solid',
                      borderRadius: '18px',
                      width: '65px',
                      height: '20px',
                      textAlign: 'center',
                      border: 'none',
                    }}
                  >
                    Sell
                  </Link>
                  <div
                    className='search-container shadow'
                    style={{ borderRadius: '22px' }}
                  >
                    <button type='submit' className='submit-button'>
                      Search
                    </button>
                    <img src={icon} alt='Search Icon' className='search-icon' />
                    <input
                      type='span'
                      className='search'
                      fontSize='2px'
                      fontFamily='Gilroy'
                      placeholder='Search Bar'
                    />
                  </div>

                  <Link
                    className='nav-link'
                    to='/help'
                    style={{
                      width: '34',
                      height: '21',
                      transform: 'translate(0 17)',
                      color: '#000',
                      fontSize: '16',
                      fontFamily: 'Gilroy',
                    }}
                  >
                    Login
                  </Link>
                  <Link
                    className='nav-link'
                    to='/help'
                    style={{
                      width: '34',
                      height: '21',
                      transform: 'translate(0 17)',
                      color: '#000',
                      fontSize: '16',
                      fontFamily: 'Gilroy',
                    }}
                  >
                    Signup
                  </Link>
                  <img src={cart} style={{ marginLeft: '9px' }} />
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    </>
  );
};
export default Cartnav;
