import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export const productsCard = props => {
  return (
    <>
      <Row className='row-cols-1 row-cols-md-2 row-cols-lg-4 g-2'>
        <Col>
          <Card
            style={{
              borderRadius: '20px',
              width: '300px',
              margin: '10px',
              boxShadow: '2px 0px 15px 0px #d3d3d3',
            }}
          >
            <img
              src={props.img}
              className='card-img-top'
              alt='Hollywood Sign on The Hill'
              style={{ width: '100%' }}
            />
            <div
              className='card-body'
              style={{
                borderRadius: '20px',
                textAlign: 'center',
                height: '73px',
              }}
            >
              <h5
                className='card-title'
                style={{ fontSize: '14px', fontFamily: 'Gilroy' }}
              >
                {props.title}
              </h5>
              <p
                className='card-text'
                style={{ fontSize: '14px', fontFamily: 'Gilroy' }}
              >
                {props.p}
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default productsCard;
