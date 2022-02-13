import React, { useEffect, useState } from 'react'
import PostsHeader from '../components/Posts/PostsHeader/PostsHeader'
import '../assets/style/posting.css'
import PostsHero from '../components/Posts/PostsHero/PostsHero';

function Posts({searchVal,link}) {
  const [minVal,setMinVal] = useState(1)
  const [maxVal,setMaxVal] = useState(100);
  
  return (
    <div className="posting">
      <div className='container'>
        <PostsHeader setMinVal={setMinVal} setMaxVal={setMaxVal} />
        <PostsHero 
          searchVal={searchVal} 
          link={link} 
          maxVal={maxVal} 
          minVal={minVal} 
        />        
      </div>
    </div>
  )
}

export default Posts