import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../Css/footer.css';
import apple from '../svg/apple.svg';
import play from '../svg/playstore.svg';
export const Footer = () => {
	return (
		<>
			<footer className='footer'>
				<Container>
					<Row>
						<Col>
							<h3>Bilxur Entrepreneur</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
								tempus ex vitae ligula lacinia, vitae condimentum ipsum
								dignissim. Mauris dapibus risus mauris, a ullamcorper elit
								finibus id.
							</p>
							<div className='subp'>
								&copy; Bilxur Entrepreneur. All rights reserved 2021.
							</div>
						</Col>
						<Col>
							<div>
								<h6 style={{ textAlign: 'right', marginRight: '16%' }}>
									Download Our App
								</h6>
							</div>
							<Row>
								<Col>
									<a
										style={{ textDecoration: 'none' }}
										href='https://example.com'
										target='_blank'
										rel='noopener noreferrer'>
										<div className='app-store-button app-store'>
											<img
												src={apple}
												size='1x'
												style={{ color: 'white', marginRight: '10px' }}
											/>
											App Store
										</div>
									</a>
								</Col>
								<Col>
									<a
										style={{ textDecoration: 'none' }}
										href='https://example.com'
										target='_blank'
										rel='noopener noreferrer'>
										<div className='app-store-button play-store'>
											<img
												src={play}
												size='1x'
												style={{
													color: 'white',
													backgroundColor: '#2196F3',
													bottom: '14px',
													marginRight: '10px',
												}}
											/>
											Google Play
										</div>
									</a>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	);
};

export default Footer;
