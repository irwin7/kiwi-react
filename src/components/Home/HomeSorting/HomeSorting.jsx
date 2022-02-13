import React, { useRef } from 'react'
import { CreateCateg } from '../../CreateCateg/CreateCateg';
import '../../../assets/style/home-sorting.css'

function HomeSorting() {
  const sortingTxt = CreateCateg('sorting')
  const sortingBtnRef = useRef();
  const sortingChange = (e) => {
    for(let item of sortingBtnRef.current.childNodes){
      item.classList.remove('active')
    }
    e.target.classList.add('active')
  }
  return (
    <div className="home__sorting-container container">
      <div ref={sortingBtnRef} className="home__sorting">
        {
          sortingTxt.map((item,index) => (
            index ===0 ? <button onClick={sortingChange} key={index} className="home__sorting-title active">{item}</button> : <button onClick={sortingChange} key={index} className="home__sorting-title">{item}</button>
          ))
        }
      </div>
    </div>
  )
}

export default HomeSorting