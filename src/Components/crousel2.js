import React from 'react';
import Carousel from 'react-grid-carousel';
import timex from '../svg/timex-crousel.svg';
import Rolex from '../svg/rolex-crousel.svg';
import citizen from '../svg/citizen-crousel.svg';
import Rado from '../svg/rado-crousel.svg';
import Cards from '../Components/crouselCard';
import '../Css/component.css';
const movingCarousel = props => {
	return (
		<>
			<Carousel cols={5} rows={1} gap={1} loop>
				<Carousel.Item>
					<Cards
						title='RADO (35D Silver Stainless Steel)'
						desc='Lowest Ask'
						amount='$257'
						img={Rado}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards
						title='ROLEX (Leather A442) '
						desc='Lowest Ask'
						amount='$250'
						img={Rolex}
						
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards
						title='TIMEX (Grey New Style)'
						desc='Lowest Ask'
						amount='$926'
						img={timex}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards
						title='CITIZEN (Black Silver Ring A22)'
						desc='Lowest Ask'
						amount='$452'
						img={citizen}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards title='RADO (35D Silver Stainless Steel)' desc='Lowest Ask' amount='$952' img={Rado} />
				</Carousel.Item>
				<Carousel.Item>
					<Cards title='TIMEX (Grey New Style)' desc='Lowest Ask' amount='$462' img={timex} />
				</Carousel.Item>
				<Carousel.Item>
					<Cards
						title='ROLEX (Leather A442)'
						desc='Lowest Ask'
						amount='$352'
						img={Rolex}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards title='RADO (35D Silver Stainless Steel)' desc='Lowest Ask' amount='$752' img={Rado} />
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default movingCarousel;
