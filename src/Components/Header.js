import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../Css/header.css';
import icon from '../svg/search.svg';
import cart from '../svg/cart.svg';
import Cart from '../Components/Cartpage.js';
import Login from '../pages/Login.js';
const Header = () => {
  return (
    <Navbar style={{ backgroundColor: 'black' }} expand='sm' variant='dark'>
      <Container fluid>
        <Navbar.Brand className='title'>
          <Link
            to='/'
            style={{
              color: '#fff',
              spanDecoration: 'none',
              fontSize: '23',
              fontFamily: 'Calibri',
            }}
          >
            Bilxur
            <small style={{ fontSize: '0.95rem', margin: '5px' }}>Usa</small>
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
                style={{ color: '#fff !important' }}
              >
                <span
                  id='_About_Us'
                  style={{
                    marginLeft: '80px',
                    // width: '71',
                    // height: '21',
                    // transform: 'translate(0 17)',
                    fontSize: '10',
                    fontFamily: 'Gilroy',
                  }}
                  data-name=' About'
                >
                  About
                </span>
              </Link>
              <Link className='nav-link' to='/help'>
                <span
                  id='Help'
                  style={{
                    // width: '34',
                    // height: '21',
                    color: '#fff !important',
                    // transform: 'translate(0 17)',
                    fontSize: '16',
                    fontFamily: 'Gilroy',
                  }}
                >
                  Help
                </span>
              </Link>
              <Link className='nav-link' to='/services'>
                <span
                  id='Services'
                  style={{
                    // width: '57',
                    // height: '21',
                    color: '#fff !important',
                    // transform: 'translate(0 17)',
                    fontSize: '16',
                    fontFamily: 'Gilroy',
                  }}
                >
                  Services
                </span>
              </Link>
              <Link className='active-link' to='/sell'>
                Sell
              </Link>
              <div className='search-container'>
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
              <div className='login-cart-container'>
                <button className='button'>
                  <Link to='Login'>Login</Link>
                </button>
                <button className='button'>Signup</button>
                <div className='cart-icon'>
                  <Link to='/Cart'>
                    <img src={cart} />
                  </Link>
                </div>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
