import React from 'react'
import Slider from 'react-slick';
import { innerPinner } from '../../../assets/imgs';
import { CreateCateg } from '../../CreateCateg/CreateCateg';
import '../../../assets/style/home-inner-slide.css'

function HomeInnerSlide() {
  const titles = CreateCateg('slidin-ads')
  const availbels = CreateCateg('slidin-ads-avail')
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="home__sliding">
        <div className="container">
          <div className="home__sliding-ads sliding-ads">
            <Slider className="sliding-ads__list" {...settings}>
              {
                titles.map((item,index) => (
                  <div key={index} className="sliding-ads__item">
                    <div className="sliding-ads__item-inner" style={{backgroundImage : `url(${innerPinner[index]})`}}>
                      <p className="slidin-ads__title">{item}</p>
                      <p className="slidin-ads__price">{availbels[index]}</p>
                    </div>
                  </div>
                ))                
              }
              {
                titles.map((item,index) => (
                  <div key={index} className="sliding-ads__item" style={{backgroundImage : `url(${innerPinner[index]})`}}>
                    <div className="sliding-ads__item-inner" style={{backgroundImage : `url(${innerPinner[index]})`}}>
                      <p className="slidin-ads__title">{item}</p>
                      <p className="slidin-ads__price">{availbels[index]}</p>
                    </div>
                  </div>
                ))                
              }
            </Slider>
          </div>
        </div>
    </div>
  )
}

export default HomeInnerSlide