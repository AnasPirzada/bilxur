import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import proDetail from '../Components/Detail';
export const reviewCard = () => {
	return (
		<>
			<Container className='mt-6' style={{ width: '70%' }}>
				<Row>
					<Col>
						<h1 style={{ fontFamily: 'Gilroy', textAlign: 'center' }}>
							Clients Reviews
						</h1>
						<Row className='d-flex justify-content-end'>
							<button
								style={{
									color: '#fff',
									backgroundColor: '#000',
									borderRadius: '22px',
									width: '10%',
								}}>
								<Link to='/proDetail'>see </Link>
							</button>
						</Row>
						<Row className='mt-4'>
							<p style={{ fontFamily: 'Gilroy', fontSize: '17px' }}>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled.i
							</p>
						</Row>
						<Row className='d-flex justify-content-end'>
							<h4 style={{ fontFamily: 'Gilroy' }}>( John Smith )</h4>
						</Row>
					</Col>
				</Row>
				<Row className='mt-4'>
					<Col>
						<hr style={{ marginLeft: '-5px', marginRight: '-5px' }} />
					</Col>
				</Row>
				<Row className='mt-4'>
					<Col>
						<p style={{ fontFamily: 'Gilroy', fontSize: '17px' }}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled.i
						</p>
					</Col>
				</Row>
				<Row className='d-flex justify-content-end'>
					<h4 style={{ fontFamily: 'Gilroy' }}>( Joe Ash )</h4>
				</Row>
				<Row className='mt-4'>
					<Col>
						<hr style={{ marginLeft: '-5px', marginRight: '-5px' }} />
					</Col>
				</Row>
				<Row className='mt-4'>
					<Col>
						<input
							type='text'
							placeholder='Write Your Comments Here..'
							style={{
								width: '100%',
								height: '180px',
								color: '#B3BBC1',
								backgroundColor: '#B3BBC1',
								border: 'none',
								padding: '0px 8px 12%',
							}}
						/>
					</Col>
				</Row>
				<Row className='mt-4 mb-4'>
					<Col className='d-flex justify-content-center '>
						<button
							style={{
								borderRadius: '22px',
								color: '#fff',
								backgroundColor: '#000',
								width: '60%',
								height: '50px',
							}}>
							Comment
						</button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default reviewCard;
