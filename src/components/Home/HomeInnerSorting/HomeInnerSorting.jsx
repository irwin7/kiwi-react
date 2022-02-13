import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { gettinProds } from '../../../assets/Api/Api';
import { CreateCateg } from '../../CreateCateg/CreateCateg';

function HomeInnerSorting() {
  const [items,setItems] = useState([]);
  const [category,setCategory] = useState([]);
  const [singleCategory,setSingleCategory] = useState('jewelery');
  const [limit,setLimit] = useState(4);

  useEffect(() => {
    gettinProds(`https://fakestoreapi.com/products/category/${singleCategory}`,limit).then(data => setItems(data))
  },[limit,singleCategory])
  gettinProds(`https://fakestoreapi.com/products/categories`,4).then(data => setCategory(data))

  const sortingTxt = CreateCateg('sorting-inner')
  const sortingBtnRef = useRef();

  const sortingChange = (e) => {
    for(let item of sortingBtnRef.current.childNodes){
      item.classList.remove('active')
    }
    e.target.classList.add('active')
    const numb = (Math.random() * 3).toFixed(0);
    setSingleCategory(category[numb])
    setLimit(4)
    console.log(limit,singleCategory,numb);
  }


  const [t] = useTranslation()
  return (
    <div className="home__inner-sorting-container container">
        <div className="inner-sorting">
          <div ref={sortingBtnRef} className="home__sorting">
            {
              sortingTxt.map((item,index) => (
                index ===0 ? <button onClick={sortingChange} key={index} className="home__sorting-title active">{item}</button> : <button onClick={sortingChange} key={index} className="home__sorting-title">{item}</button>
              ))
            }
          </div>
          <div className="home__posts-list">
            {
              items.map((item,index) => (
                <Link to={`posts/${item.id}`} key={index} className="home__post post">
                  <img className='post__image' src={item.image} alt="posts" />
                  <p className="post__title">{item.title}</p>
                  <p className="post__desc">{item.description}</p>
                  <p className="post__price">$ {item.price}</p>
                </Link>
              ))
            }
          </div>
          <div className='posts__show-div'>
            <button className='posts__show' onClick={() => setLimit(limit + 4)}>{t("showMore")}</button>
          </div>
        </div>
      </div>
  )
}

export default HomeInnerSorting