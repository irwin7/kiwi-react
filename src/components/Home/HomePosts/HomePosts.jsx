import { t } from 'i18next';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { gettinProds } from '../../../assets/Api/Api';
import '../../../assets/style/home-posts.css'

function HomePosts() {
  const [items,setItems] = useState([]);
  const [limit,setLimit] = useState(10);

  useEffect(() => {
    gettinProds('https://fakestoreapi.com/products',limit).then(data => setItems(data))
  },[limit])
  
  return (
    <div className="home__posts-container container">
      <div className="home__posts posts">
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

export default HomePosts