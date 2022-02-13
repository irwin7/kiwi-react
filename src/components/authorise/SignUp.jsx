import React from 'react'
import { useTranslation } from 'react-i18next';
import { loginImg } from '../../assets/imgs'

function SignUp({setLogged}) {

  const submited = () => {

  }

  const [t] = useTranslation();

  return (
    <div className="container">
      <div className='authoris'>
        <form className='authoris__form' onSubmit={submited}>
          <input className='authoris__input' type="text" name='fname' placeholder={t("fname")} required />
          <input className='authoris__input' type="text" name='lname' placeholder={t("name")} required />
          <input className='authoris__input' type="text" name='username' placeholder={t("username")} required />
          <input className='authoris__input' type="email" name='email' placeholder={t("email")} required />
          <input className='authoris__input' type="password" name='password' placeholder={t("password")} required />
          <button className='authoris__submit-btn' type="submit">Submit</button>
        </form>
        <img src={loginImg} alt="login image" className="authoris__img" />
      </div>
    </div>    
  )
}

export default SignUp