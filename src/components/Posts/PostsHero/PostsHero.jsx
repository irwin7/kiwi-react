import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { gettinProds } from '../../../assets/Api/Api';

function PostsHero({maxVal,minVal,link,searchVal}) {

  const [t] = useTranslation();

  const [items,setItems] = useState([]);
  const [oldIitems,setOldItems] = useState([]);
  const [limit,setLimit] = useState(10);
  useEffect(() => {
     gettinProds(`https://fakestoreapi.com/${link}`,limit).then(data => setItems(data))
  },[limit])

  useEffect(() => {
    setOldItems(items);
     setOldItems(
      items.filter((item) => item.title.toLowerCase().includes(searchVal.toLowerCase()))
    )
  },[items])

  useEffect(() => {
    setOldItems(
      items.filter((item) => item.price >= minVal && item.price <= maxVal)
    )

    if(items.length === 0){
      setLimit(10)
    }
  },[maxVal,minVal])
  
  return (
    <div className="home__posts posts">
      <div className="home__posts-list">
        {
          oldIitems.map((item,index) => (
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
  )
}

export default PostsHero