import React from 'react';
import { Card } from 'react-bootstrap';
export const crouselCard = props => {
	return (
		<Card
			className='shadow'
			style={{
				background: '#fff',
				borderRadius: '10px',
				overflow: 'hidden',
				height: '278px',
				margin: '10px',
			}}>
			<div
				style={{
					backgroundColor: '#fff',
					position: 'relative',
					height: '250%',
					width: '100%',
				}}>
				<Card.Img
					variant='top'
					src={props.img}
					style={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						maxWidth: '50%',
						maxHeight: '90%',
					}}
				/>
			</div>
			<Card.Body
				style={{ backgroundColor: '#000', color: '#fff', height: '90%' }}>
				<Card.Title
					style={{
						marginLeft: '-11px',
						fontFamily: 'Gilroy',
						fontSize: '0.8rem',
					}}>
					{props.title}{' '}
				</Card.Title>
				<Card.Text
					style={{
						fontFamily: 'Gilroy',
						fontSize: '0.75rem',
						position: 'absolute',
						bottom: '0rem',
						marginBottom: '0.68rem',
						marginLeft: '-11px',
					}}>
					{props.desc}
				</Card.Text>
				<h2
					style={{
						fontFamily: 'Gilroy',
						fontSize: '1.15rem',
						position: 'absolute',
						bottom: '0rem',
						right: '0.8rem',
					}}>
					{props.amount}
				</h2>
			</Card.Body>
		</Card>
	);
};
export default crouselCard;
