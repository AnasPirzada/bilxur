import React from 'react';
import Carousel from 'react-grid-carousel';
import Apple from '../svg/apple-crousel.svg';
import Console from '../svg/console-crousel.svg';
import airpods from '../svg/AirPods-crousel.svg';
import Rouge from '../svg/Rouge-crousel.svg';
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
						img={Rouge}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards
						title='ROLEX (Leather A442) '
						desc='Lowest Ask'
						amount='$250'
						img={Console}
						
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards
						title='TIMEX (Grey New Style)'
						desc='Lowest Ask'
						amount='$926'
						img={Apple}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards
						title='CITIZEN (Black Silver Ring A22)'
						desc='Lowest Ask'
						amount='$452'
						img={airpods}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards title='RADO (35D Silver Stainless Steel)' desc='Lowest Ask' amount='$952' img={Rouge} />
				</Carousel.Item>
				<Carousel.Item>
					<Cards title='TIMEX (Grey New Style)' desc='Lowest Ask' amount='$462' img={Apple} />
				</Carousel.Item>
				<Carousel.Item>
					<Cards
						title='ROLEX (Leather A442)'
						desc='Lowest Ask'
						amount='$352'
						img={Console}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Cards title='RADO (35D Silver Stainless Steel)' desc='Lowest Ask' amount='$752' img={airpods} />
				</Carousel.Item>
			</Carousel>
      
		</>
	);
};

export default movingCarousel;
