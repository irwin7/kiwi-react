import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { logo } from '../../assets/imgs'
import '../../assets/style/header.css'
import HeaderInner from './HeaderInner/HeaderInner'
import HeaderNav from './HeaderNav/HeaderNav'

const Header = ({setSerch,logged}) => {

  const [t,i18n] = useTranslation();

  const langBtns = useRef();

  const deleteActive = (items) => {
    for(let item of items.current.childNodes){
      item.classList.remove('active')
    }
  }

  const langChange = (e,lang) => {
    i18n.changeLanguage(lang);
    deleteActive(langBtns);
    e.target.classList.add('active');
  }

  return (
    <header className='header'>
      <div className="container">
        <div className="header__up">
          <Link to='/' className='header__logo-link'>
            <img className='header__logo' src={logo} alt="logo" />
            <p className="header__logo-text">{t('logo')}</p>
          </Link>
          <HeaderNav />
          <div className="header__lang" ref={langBtns}>
            <button className='header__lang-btn active' onClick={(e) => langChange(e,'ru')}>Rus</button>
            <span> | </span>
            <button className='header__lang-btn' onClick={(e) => langChange(e,'uz')}>Uz</button>
          </div>
          {
            logged.isLogged === true ? (
              <p className="user-ava">{logged.username.substring(0,1)}</p>
            ) : (
              <div className="header__reg">
                <Link className='header__reg-link' to="/authorization/sign-in">{t('log')}</Link>
                <span> | </span>
                <Link className='header__reg-link regis' to="/authorization/sign-up">{t('reg')}</Link>
              </div>
            )
          }
          
        </div>
        <HeaderInner setSerch={setSerch} />
      </div>
    </header>
  )
}

export default Header