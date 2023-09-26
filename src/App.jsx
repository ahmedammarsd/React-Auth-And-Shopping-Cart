import { useState } from 'react';
import { Container } from "react-bootstrap";
import {Routes , Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';

function App() {

  return (
    <>
    <Navbar />
  <Container className="mb-4">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/store/" element={<Store />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Container>
  </>
  )
}

export default App
