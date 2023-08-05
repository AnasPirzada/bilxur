import React from 'react';
import '../Css/component.css';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import loc from '../svg/location.svg';
import Rating from '../Components/StarRating';
import Cards from '../Components/productsCard';
import img2 from '../pngs/daniel-storek-JM-qKEd1GMI-unsplash.png';
import shoes1 from '../pngs/shoes1.png';
import shoes2 from '../pngs/shoes2.png';
import shoes3 from '../pngs/shoes3.png';
import shoes4 from '../pngs/shoes4.png';
import shoes5 from '../pngs/shoes5.png';
import shoes6 from '../pngs/shoes6.png';
import shoes7 from '../pngs/shoes7.png';
import shoes8 from '../pngs/shoes8.png';
import shoes9 from '../pngs/shoes9.png';
import shoes10 from '../pngs/shoes10.png';
import shoes11 from '../pngs/11.png';
import shoes12 from '../pngs/12.png';
import shoes13 from '../pngs/13.png';
import shoes14 from '../pngs/14.png';
import shoes15 from '../pngs/15.png';
import shoes16 from '../pngs/16.png';
import Messagecard from '../Components/reviewCard';
// import detail from '../Components/detail';
import person from '../pngs/person.png';

export const Products = () => {
  return (
    <>
      <Header />
      <Row>
        <Col>
          <img className='mainImage' src={img2} alt='Background' />
        </Col>
      </Row>
      <Row style={{ padding: '157px' }}>
        <Col>
          <Card.Img
            alt='person'
            variant='top'
            className='responsive-img'
            src={person}
            style={{
              position: 'absolute',
              transform: 'translate(-29%, -89%)',
              maxWidth: '29%',
              maxHeight: '292px',
              borderRadius: '52px',
            }}
          />
        </Col>
        <Col style={{ marginTop: '-116px', marginLeft: '-55%' }}>
          <h1>Adi's Sneakers</h1>
          <Row>
            <div>
              <img src={loc} style={{ marginRight: '20px' }} />
              <small
                style={{
                  fontSize: '0.85rem',
                  fontFamily: 'Gilroy',
                  color: '#707070',
                }}
              >
                Los Angel USA.
              </small>
            </div>
          </Row>
          <Row
            className='mt-4'
            style={{ alignItems: 'center', justifyContent: 'left' }}
          >
            <small
              style={{
                fontSize: '0.95rem',
                marginRight: '5px',
                marginRight: '12px',
              }}
            >
              Rating
            </small>
            <Rating rating={3} />
            <h4
              style={{
                fontSize: '0.95rem',
                marginRight: '5px',
                marginLeft: '12px',
              }}
            >
              4.5
            </h4>
          </Row>
          <Row>
            <button className='btnmessage'>Message</button>
          </Row>
          <Row>
            <h1 className='subheading'>My Products</h1>
          </Row>
        </Col>
      </Row>
      <Row style={{ marginLeft: '30px', marginTop: '-13%' }}>
        <Cards
          style={{ cursor: 'pointer' }}
          img={shoes1}
          title='Adidas Yeezy Boost 250 V2 Black'
          p='Red (2020/2021)'
          width='200px'
        />
        <Cards
          img={shoes2}
          title='Adidas Yeezy Boost 250 V2 Black'
          p='Red (2020/2021)'
          width='200px'
        />
        <Cards
          img={shoes3}
          title='Adidas Yeezy Boost 250 V2 Black'
          p='Red (2020/2021)'
          width='200px'
        />
        <Cards
          img={shoes4}
          title='Adidas Yeezy Boost 250 V2 Black'
          p='Red (2020/2021)'
          width='200px'
        />
      </Row>
      <Row style={{ marginLeft: '30px', paddingTop: '20px' }}>
        <Cards
          img={shoes5}
          title='Adidas Yeezy Boost 250 V2 Black'
          p='Red (2020/2021)'
          width='200px'
        />
        <Cards
          img={shoes6}
          title='Adidas Yeezy Boost 250 V2 Black'
          p='Red (2020/2021)'
          width='200px'
        />
        <Cards
          img={shoes7}
          title='Adidas Yeezy Boost 250 V2 Black'
          p='Red (2020/2021)'
          width='200px'
        />
        <Cards
          img={shoes8}
          title='Adidas Yeezy Boost 250 V2 Black'
          p='Red (2020/2021)'
          width='200px'
        />
      </Row>
      <Row style={{ marginLeft: '30px', paddingTop: '20px' }}>
        <Cards
          img={shoes2}
          title='Adidas Yeezy Boost 250 V2 Black'
          p='Red (2020/2021)'
          width='200px'
        />
        <Cards
          img={shoes1}
          title='Adidas Yeezy Boost 250 V2 Black'
          p='Red (2020/2021)'
          width='200px'
        />
        <Cards
          img={shoes4}
          title='Adidas Yeezy Boost 250 V2 Black'
          p='Red (2020/2021)'
          width='200px'
        />
        <Cards
          img={shoes5}
          title='Adidas Yeezy Boost 250 V2 Black'
          p='Red (2020/2021)'
          width='200px'
        />
      </Row>
      <Row
        style={{
          marginBottom: '4rem',
          marginLeft: '30px',
          paddingTop: '20px',
        }}
      >
        <Cards
          img={shoes5}
          title='Adidas Yeezy Boost 250 V2 Black'
          p='Red (2020/2021)'
          width='200px'
        />
        <Cards
          img={shoes6}
          title='Adidas Yeezy Boost 250 V2 Black'
          p='Red (2020/2021)'
          width='200px'
        />
        <Cards
          img={shoes7}
          title='Adidas Yeezy Boost 250 V2 Black'
          p='Red (2020/2021)'
          width='200px'
        />
        <Cards
          img={shoes8}
          title='Adidas Yeezy Boost 250 V2 Black'
          p='Red (2020/2021)'
          width='200px'
        />
      </Row>
      <hr
        style={{ paddingTop: '40px', marginLeft: '45px', marginRight: '45px' }}
      />
      <Messagecard />
      <Footer />
    </>
  );
};

export default Products;
