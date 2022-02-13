import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { loginImg } from '../../assets/imgs'

function Login({setLogged}) {

  const [user,setUser] = useState({
    login : '',
    password : ''
  })

  const [users,setUsers] = useState([])
  const [result,setResult] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then(res=>res.json())
      .then(json=>setUsers(json))
  },[])
  

  const submited = (e) => {
    e.preventDefault();
    const inputs = e.target.childNodes;
    setUser({
      login : inputs[0].value,
      password : inputs[1].value
    })
  }

  useEffect(() => {
    setResult(
      users.filter((item) => item.email === user.login && item.password === user.password ||  item.username === user.username && item.password === user.password)
    )
  },[user])

  useEffect(() => {
    result.length === 0 ? setLogged({
      isLogged : false,
      username : ''
    }) : setLogged({
      isLogged : true,
      username : user.login
    }) 
  },[result])

  console.log(result);
  console.log(user);
  console.log(users);

  const [t] = useTranslation();

  return (
    <div className="container">
      <div className='authoris'>
        <form className='authoris__form' onSubmit={submited}>
          <input className='authoris__input' type="text" name='login' placeholder={t("email")} />
          <input className='authoris__input' type="password" name='password' placeholder={t("password")} required />
          <button className='authoris__submit-btn' type="submit">Submit</button>
          <p>{result.length === 0 ? "Please try again" : "yess" }</p>
        </form>
        <img src={loginImg} alt="login image" className="authoris__img" />
      </div>
    </div>
  )
}

export default Login