import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CreateCateg } from '../../CreateCateg/CreateCateg';

function PostsHeader({setMinVal,setMaxVal}) {
  const [t] = useTranslation();

  const sortcat = CreateCateg("recsort")
  const inCategors = CreateCateg("inCategors")
  const sortTypes = CreateCateg("sortTypes")

  const [theMinVal,setTheMinVal] = useState(1)
  const [theMaxVal,setTheMaxVal] = useState(1599)

  const maxChange = (e) => {
    setTheMaxVal(e.target.value);
  }
  const minChange = (e) => {
    setTheMinVal(e.target.value);
  }

  const sortMe = () => {
    setMinVal(theMinVal)
    setMaxVal(theMaxVal)
  } 

  return (
    <div className='posting__header'>
      <input type="search" className="posting__search" placeholder={t("splace")}/>
      <div className="posting__rec-sorting">
        {
          sortcat.map((item,index) => (
            <p key={index} className="posting__rec-sorting-text">{item}</p>
          ))
        }
      </div>
      <div className="posting__incategor">
        <p className="posting__static-title">{t("inCategor")}</p>
        <div className="posting__incategor-inner">
        {
          inCategors.map((item,index) => (
            <p key={index} className="posting__incategor-title">{item}</p>
          ))
        }
        </div>
      </div>
      <div className="posting__filter-price">
        <p className="posting__static-title">{t("selecPriceFrom")} : $ {theMinVal}</p>
        <input value={theMinVal} onChange={minChange} className='posting__filter-range' type="range" name="minprice" max={999}/>
      </div>
      <div className="posting__filter-price">
        <p className="posting__static-title">{t("selecPriceTo")} : $ {theMaxVal}</p>
        <input value={theMaxVal} onChange={maxChange} className='posting__filter-range' type="range" name="maxprice" min={1} max={1599}/>
      </div>
      <div className="posting__selects">
        {
          sortTypes.map((item,index) => (
            <select className='posting__select' key={index} name="slect">
              <option value={item}>{item}</option>
              <option value={item}>{item}</option>
              <option value={item}>{item}</option>
            </select>
          ))
        }   
        <button onClick={sortMe} className="posting__submit">{t("submit")}</button>     
      </div>
    </div>
  )
}

export default PostsHeader