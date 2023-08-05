import React from 'react';
import Carousel from 'react-grid-carousel';
import Nike from '../svg/nike_crousel.svg';
import adidas from '../svg/adidas-crousel.svg';
import Bata from '../svg/bata-crousel.svg';
import yoko from '../svg/Yoko-crousel.svg';
import Cards from '../Components/crouselCard';
import Adidas from '../svg/adidas.svg';

import '../Css/component.css';
const movingCarousel = props => {
	return (
		<>
			<Carousel cols={5} rows={1} gap={1} loop>
				<Carousel.Item>
					<Cards
						title='Yoko masi Blue Style X380 DC 
            Altra Soft Pad'
						desc='Lowest Ask'
						amount='$257'
						img={Adidas}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards
						title='Adidas Yeezy Slide Black lases
            3DXD Soft'
						desc='Lowest Ask'
						amount='$250'
						img={adidas}
						style={{
							width: '50%',
							height: '40%',
						}}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards
						title='Nike New Flox A350 Slide'
						desc='Lowest Ask'
						amount='$926'
						img={Nike}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards
						title='Adidas Yeezy Foundation D445 '
						desc='Lowest Ask'
						amount='$452'
						img={adidas}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards
						title='Bata AirMax Ultra Soft G798 
            Yellow Torch'
						desc='Lowest Ask'
						amount='$952'
						img={Bata}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards
						title='Nike New Flox A350 Slide'
						desc='Lowest Ask'
						amount='$462'
						img={Nike}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards
						title='Adidas Yeezy Foundation D445'
						desc='Lowest Ask'
						amount='$352'
						img={adidas}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards
						title='Bata AirMax Ultra Soft G798 
        Yellow Torch'
						desc='Lowest Ask'
						amount='$752'
						img={Bata}
					/>
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default movingCarousel;
