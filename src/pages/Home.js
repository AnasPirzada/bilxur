import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Modal } from 'react-bootstrap';
import Cards from '../Components/card';
import Crousel from '../Components/movingCrousel';
import Crousel2 from '../Components/crousel2';
import Crousel3 from '../Components/crousel3';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../svg/pexels-nappy-936137.png';
import '../Css/main.css';
import Adidas from '../svg/adidas.svg';
import Nike from '../svg/nike.svg';
import Puma from '../svg/puma.svg';
import dg from '../svg/DG.svg';
import filter from '../svg/filtering-icon.svg';
import Filtercard from '../Components/filter';
import Product from '../Components/Products.js';
export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <Header />
      <div style={{ paddingBottom: '4%' }}>
        <Row>
          <div className='text bgimg mainImage'>
            <h1
              style={{
                fontFamily: 'Gilroy',
                textAlign: 'center',
                marginTop: '13%',
                fontSize: '5.2rem',
                color: '#fff',
              }}
            >
              Shops Brand
            </h1>
            <p
              style={{
                fontFamily: 'Gilroy',
                textAlign: 'center',
                fontSize: '0.82rem',
                color: '#fff',
              }}
            >
              A new and improved way to help your brand reach its full potential
            </p>
          </div>
        </Row>
        <Container>
          <Row style={{ paddingTop: '13%', paddingBottom: '2%' }}>
            <Col>
              <div
                className='d-flex align-items-center'
                style={{ justifyContent: 'space-between' }}
              >
                <h3 className='heading'>Brands of the Week</h3>
                <div>
                  <button
                    className='btn-filter shadow'
                    style={{ marginRight: '20px' }}
                    onClick={handleShow}
                  >
                    <div>
                      Filter
                      <img src={filter} style={{ marginLeft: '20px' }} />
                    </div>
                  </button>

                  <Modal show={showModal} onHide={handleClose}>
                    <Modal.Body>
                      <Filtercard />
                    </Modal.Body>
                  </Modal>
                  <button className='btn-see shadow'>See All</button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Cards img={Adidas} />
            <Cards img={Nike} />
            <Cards img={Puma} />
            <Cards img={dg} />
          </Row>
        </Container>
        <hr style={{ marginLeft: '112px', marginRight: '113px' }} />
        <Container>
          <Row style={{ paddingTop: '4%', paddingBottom: '2%' }}>
            <Col>
              <div
                className='d-flex align-item-center'
                style={{ justifyContent: 'space-between' }}
              >
                <h3>New Arrivals</h3>
                <button className='see'>
                  <Link to='/Product'>See All</Link>
                </button>
              </div>
            </Col>
          </Row>
          <Row style={{ marginLeft: '-41px' }}>
            <Crousel />
          </Row>
        </Container>
        <Container>
          <Row style={{ paddingTop: '4%', paddingBottom: '2%' }}>
            <Col>
              <div
                className='d-flex align-item-center'
                style={{ justifyContent: 'space-between' }}
              >
                <h3>Recommended For You</h3>
                <button className='see'>See All</button>
              </div>
            </Col>
          </Row>
          <Row style={{ marginLeft: '-41px' }}>
            <Crousel2 />
          </Row>
        </Container>
        <Container>
          <Row style={{ paddingTop: '4%', paddingBottom: '2%' }}>
            <Col>
              <div
                className='d-flex align-item-center'
                style={{ justifyContent: 'space-between' }}
              >
                <h3>Recently Viewed</h3>
                <button className='see'>See All</button>
              </div>
            </Col>
          </Row>
          <Row style={{ marginLeft: '-41px' }}>
            <Crousel3 />
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Home;
