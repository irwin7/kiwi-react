import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom'
import { gettinProds } from '../assets/Api/Api';
import '../assets/style/single-post.css'
import { CreateCateg } from '../components/CreateCateg/CreateCateg';

function SinglePage() {
  const [items,setItems] = useState([]);
  const [category,setCategory] = useState([]);
  const [singleCategory,setSingleCategory] = useState('jewelery');
  const [limit,setLimit] = useState(4);

  useEffect(() => {
    gettinProds(`https://fakestoreapi.com/products/category/${singleCategory}`,limit).then(data => setItems(data))
  },[limit,singleCategory])
  gettinProds(`https://fakestoreapi.com/products/categories`,4).then(data => setCategory(data))

  const sortingTxt = CreateCateg('slidinPost')
  const sortingBtnRef = useRef();

  const sortingChange = (e) => {
    for(let item of sortingBtnRef.current.childNodes){
      item.classList.remove('active')
    }
    e.target.classList.add('active')
    const numb = (Math.random() * 3).toFixed(0);
    setSingleCategory(category[numb])
    setLimit(4)
  }

  const id = useParams().id;

  const [t] = useTranslation();

  const [item,setItem] = useState([]);

  useEffect(() => {
    gettinProds(`https://fakestoreapi.com/products/${id}`,1).then(data => setItem(data))
  },[])

  return (
    <div className="container">
      <div className='post'>
        <h2 className="post__titles">{item.title}</h2>
        <div className="post__hero">
          <div className="post__images">
            <img className="post__img" src={item.image} alt="imagye" />
          </div>
          <div className="post__descriptions">
            <p className="post__prices">$ {item.price}</p>
            <p className="post__loaction">{t('loaction')}</p>
            <div className="post__numbers">
              <div className="post__phone">
                <p className="post__number">99891 166 ****</p>
                <p className="post__shown">{t('showKop')}</p>
              </div>
              <div className="post__phone">
                <p className="post__number">99891 166 ****</p>
                <p className="post__shown">{t('showKop')}</p>
              </div>
            </div>
            <p className="post__author">{t("author")} <span className="post__author-name">{t("authorName")}</span></p>
            <button className='post__btn'>{t("writeAuthor")}</button>
            <button className='post__btn'>{t("offerPrice")}</button>
            <p className="post__descr">{item.description}</p>
          </div>
        </div>
      </div>
      <div className="home__inner-sorting-container container">
        <div className="inner-sorting zzz">
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
    </div>
  )
}

export default SinglePage