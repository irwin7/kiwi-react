import React from 'react'
import { useParams } from 'react-router-dom';
import '../assets/style/authoris.css'
import Login from '../components/authorise/Login';
import SignUp from '../components/authorise/SignUp';

function Authorization({setLogged}) {

  const link = useParams().id;

  return link === 'sign-in' ? <Login setLogged={setLogged} /> : <SignUp setLogged={setLogged} /> 
}

export default Authorization