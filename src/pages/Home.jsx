import React from 'react'
import '../assets/style/home.css'
import HomeHero from '../components/Home/HomeHero/HomeHero';
import HomeInnerSlide from '../components/Home/HomeInnerSlide/HomeInnerSlide';
import HomeInnerSorting from '../components/Home/HomeInnerSorting/HomeInnerSorting';
import HomePosts from '../components/Home/HomePosts/HomePosts';
import HomeSorting from '../components/Home/HomeSorting/HomeSorting';

function Home() {
  return (    
    <div className='home'>
      <HomeHero />
      <HomeSorting />
      <HomePosts />
      <HomeInnerSlide />
      <HomeInnerSorting />
    </div>
  )
}

export default Home;