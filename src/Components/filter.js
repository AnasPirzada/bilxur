import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../svg/Bilxur-logo.svg';
import '../Css/component.css';
const Filter = () => {
  return (
    <Container style={{ minWidth: '100vw' }}>
      <Row>
      <Col className="mt-4" style={{ alignContent: 'center', alignItems: 'center', backgroundColor: 'black', height: 'auto', width: '100%' }}>
          <div className="centered" style={{ marginTop:'40%',}}>
            <img src={logo} style={{ color: '#fff' }} alt="Logo" />
          </div>
          <h1 className="mt-4 " style={{ textAlign: 'center', color: '#fff' }}>BLIXUR</h1>
          <h4 style={{  textAlign: 'center', color: '#fff' }}>USA</h4>
        </Col>
        <Col lg={8} className="mt-4" style={{backgroundColor:'#fff'}}>
          <h1 style={{  textAlign: 'center', marginTop: '45px', marginBottom: '15px' }}>Filter</h1>
        
            <Row>
              <Col className='mb-2'>
								<button type='submit' className='btn-filtercard active'>
									Sneaker
								</button>
							</Col>
							<Col className='mb-2'>
								<button type='button' className='btn-filtercard'>
									Shirts
								</button>
							</Col>
						</Row>
						<Row>
							<Col className='mb-2'>
								<button type='button' className='btn-filtercard'>
									Electronic Bags
								</button>
							</Col>
							<Col className='mb-2'>
								<button type='button' className='btn-filtercard'>
									Handbags
								</button>
							</Col>
						</Row>

						<Row>
							<Col className='mb-2'>
								<button type='button' className='btn-filtercard'>
									Laptop
								</button>
							</Col>
							<Col className='mb-2'>
								<button type='button' className='btn-filtercard'>
									Head Phone
								</button>
							</Col>
						</Row>
						<Row>
							<Col className='mb-2'>
								<button type='button' className='btn-last'>
									Hp Air Book
								</button>
							</Col>
						</Row>
						<button type='button' className='btn-submit'>
							Done
          </button>
        </Col>
        </Row>
    </Container>
  );
};

export default Filter;
