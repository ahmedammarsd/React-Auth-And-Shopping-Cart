import { useState } from 'react';
import {Routes , Route } from "react-router-dom"
import Home from './components/Shopping-Cart/Home';
import Store from './components/Shopping-Cart/Store';
import About from './components/Shopping-Cart/About';
import MainCart from './components/Shopping-Cart/Main';
import SelectProject from './components/SelectProject';
import  MainAuth from './components/React-Authentication/Main';

function App() {

  return (
    <>
    <SelectProject />
    <Routes>
      <Route path='/' element={<SelectProject />} />
      <Route path="/shopping-cart" element={<MainCart />}>
        <Route path="" element={<Home />}/>
        <Route path="store" element={<Store />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path='/react-auth'>
        <Route path="" element={<MainAuth />} />
      </Route>
    </Routes>
  </>
  )
}

export default App
