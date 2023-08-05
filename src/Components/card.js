import React from 'react'
import { Col } from 'react-bootstrap';

export const card = (props) => {
  return (
<Col>
				<div
					className='mb-2'
					style={{
						height: '240px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						background: '#DDE3E8',
						borderRadius: '10px',
						boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
					}}>
					<img src={props.img} style={{ float: 'right'}} alt='' width='200px' />
				</div>
    </Col>
  )
}
export default card