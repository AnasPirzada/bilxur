import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css/component.css';
import Button from '../Components/button.js';
import Buton from '../Components/buttonsimple.js';
class ButtonCrousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
    };
    return (
      <div className='slider-container'>
        <Slider {...settings}>
          <div className='container fluid '>
            <Button
              className='shadow'
              onClick={() => alert('Button 1 Clicked')}
              name='Sneakers'
            />
          </div>
          <div className='container fluid '>
            <Buton onClick={() => alert('Button 2 Clicked')} name='Hp book' />
          </div>
          <div className='container fluid'>
            <Buton onClick={() => alert('Button 2 Clicked')} name='Hp book' />
          </div>
          <div className='container fluid'>
            <Buton onClick={() => alert('Button 2 Clicked')} name='Hp book' />
          </div>
          <div className='container fluid'>
            <Buton onClick={() => alert('Button 2 Clicked')} name='Hp book' />
          </div>
          <div className='container fluid'>
            <Buton onClick={() => alert('Button 2 Clicked')} name='Hp book' />
          </div>
          <div className='container fluid'>
            <Buton onClick={() => alert('Button 2 Clicked')} name='Hp book' />
          </div>
          <div className='container fluid'>
            <Buton onClick={() => alert('Button 2 Clicked')} name='Hp book' />
          </div>
        </Slider>
      </div>
    );
  }
}

export default ButtonCrousel;
