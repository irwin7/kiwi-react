import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

function HeaderInner({setSerch}) {

  const cities = ["Andijon","Angren","Asaka","Baxt","Bekobod","Beruniy","Bukhara","Chimboy","Chirchiq","Chartak","Dashtobod","Denov","Fergana","Gijduvon","Guliston","Guzor","Jizzax","Juma","Kattaqo‘rg‘on","Kegeyli","Khakkulabad","Khiva","Kogon","Kokand","Kosonsoy","Kungrad","Margilan","Mo‘ynoq","Namangan","Navoiy","Nukus","Nurota","Okhangaron","Olmaliq","Oqtosh","Piskent","Qarshi","Qorako‘l","Qorasuv","Qozoonketkan","Quva","Quvasoy","Rishdan","Samarqand","Shahrisabz","Shakhrihon","Shirabad","Shirin","Sirdaryo","Tashkent","Taxiatosh","Termez","Tomdibuloq","To‘ytepa","Turtkul","Uchqo‘rg‘on","Uchquduq","Urganch","Urgut","Vobkent","Xalqobod","Xonobod","Xo‘jayli","Yangiobod","Yangiyer","Yangiyo‘l","Zarafshon"];
  const [t] = useTranslation();

  const [categ,setCateg] = useState([]);
  const seacrhValues = useRef();

  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then(res=>res.json())
      .then(json=>setCateg(json))
  },[])

  const sorting = () => {
    const values = seacrhValues.current.childNodes;
    setSerch({
      searchVal : values[1].value,
      link :  values[0].value !== '' ? `products/category/${values[0].value}` : 'products'
    })
  }

  const location = useLocation();
  const minifLoaction = (location.pathname).substring(1);

  return minifLoaction !== 'posts' && (
    <div className="header__inner">
      <div className="header__sort">
        <div className="header__sorter sorter" ref={seacrhValues}>
          <select className='sorter__select' name="sorter">
            <option value=''>{t('selectVal')}</option>
            {
              categ.map((item,index) => (
                <option key={index} value={item}>{item}</option>
              ))
            }
          </select>
          <input className='sorter__input' type="search" placeholder={t("search")} />
          <select className='sorter__select' name="sorter-country">
            <option value="">{t('allCountry')}</option>
            {
              cities.map((item,index) => (
                <option key={index} value={item}>{item}</option>
              ))
            }
          </select>
        </div>
        <Link to="/posts" className='header__sort-btn' onClick={sorting}>{t("searchBtn")}</Link>
      </div>
        <button className='header__add-btn'>{t("addBtn")}</button>
    </div>
  )
}

export default HeaderInner