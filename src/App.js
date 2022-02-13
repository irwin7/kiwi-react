import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './container/Header/Header';
import Home from './pages/Home';
import Shops from './pages/Shops';
import ForBussines from './pages/ForBussines';
import Posts from './pages/Posts';
import Help from './pages/Help';
import Authorization from './pages/Authorization';
import SinglePage from './pages/SinglePage';


const App = () => {

  const [serch,setSerch] = useState({
    link : 'products',
    searchVal : '',
    country : ''
  });
  const [logged,setLogged] = useState({
    isLogged : false,
    username : ''
  });
  console.log(logged);

  return (
    <div className="App">
        <BrowserRouter>
          <Header setSerch={setSerch} logged={logged} />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/shops" element={<Shops />}/>
              <Route path="/bussines" element={<ForBussines />}/>
              <Route path="/posts" element={<Posts link={serch.link} searchVal={serch.searchVal} />} />
              <Route path='/posts/:id' element={<SinglePage />} />
              <Route path="/help" element={<Help />}/>
              <Route path="/authorization/:id" element={<Authorization setLogged={setLogged} />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
