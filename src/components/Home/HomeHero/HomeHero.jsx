import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { categorySlider } from '../../../assets/category-slider/category-slider';
import CreateArrowBtn from '../../CreateArrowBtn/CreateArrowBtn';
import { CreateCateg } from '../../CreateCateg/CreateCateg';
import '../../../assets/style/home-slider.css'
import '../../../assets/style/home-modal.css'

function HomeHero() {
  const [t] = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <CreateArrowBtn arrowtype={'right'} />,
    prevArrow: <CreateArrowBtn arrowtype={'left'} />
  };

  const modalRef = useRef();
  const innerModalRef = useRef();

  const innerCateg = CreateCateg('inner-categ')
  const veryInnerCateg = CreateCateg('very-inner-categ')

  const controlModal = (item) => {
    item.current.classList.toggle('active')
  }
  return (
    <div className="home__hero-container container">
      <div className='home__hero'>
        <div className="home__slider">
          <Slider {...settings}>
            {
              categorySlider.map((item,index) => (
                <div key={index} className="home__slider-item" onClick={() => controlModal(modalRef)}>
                  <img className='home__slider-img' src={item} alt="categ" />
                  <p className="home__slider-title">{t(`categories.${index}`)}</p>
                </div>
              ))
            }
            {
              categorySlider.map((item,index) => (
                <div key={index} className="home__slider-item" onClick={() => controlModal(modalRef)}>
                  <img className='home__slider-img' src={item} alt="categ" />
                  <p className="home__slider-title">{t(`categories.${index}`)}</p>
                </div>
              ))
            }
          </Slider>          
        </div>
        <div ref={modalRef} className="home__modal">
            <div className="home__modal-inner">
              <div className="container">
                <div className="home__modal-df">
                  {
                    innerCateg.map((item,index) => (
                      <p onClick={() => controlModal(innerModalRef)} key={index} className='home__modal-text'>{item}</p>
                    ))
                  }
                </div>
                <div ref={innerModalRef} className="home__modal-inner-categ ">
                  <div className="home__modal-header">
                    <button onClick={() => controlModal(innerModalRef)} className='home__modal-close'></button>
                    <h3 className='home__modal-title'>{t('inner-categ.1')}</h3>
                  </div>
                  <div className="inner-categ">
                    {
                      veryInnerCateg.map((item,index) => (
                        <p key={index} className='home__modal-text home__inner-text'>{item}</p>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero