import React from 'react'
import { Container } from "react-bootstrap";
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <Navbar />
        <div>
        <Container className="mb-4">
            <Outlet />
        </Container>
        </div>
    </div>
  )
}

export default Main