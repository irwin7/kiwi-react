import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'

function HeaderNav() {

  const [t] = useTranslation();

  return (
    <nav className='header__nav nav'>
      <NavLink className='nav__item' to='/posts'>{t('nav.item1')}</NavLink>
      <NavLink className='nav__item' to='/shops'>{t('nav.item2')}</NavLink>
      <NavLink className='nav__item' to='/bussines'>{t('nav.item3')}</NavLink>
      <NavLink className='nav__item' to='/help'>{t('nav.item4')}</NavLink>
    </nav>
  )
}

export default HeaderNav