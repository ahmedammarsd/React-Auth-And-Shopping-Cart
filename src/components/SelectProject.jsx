import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const SelectProject = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
        <div className="d-flex gap-5 align-items-center p-2">
            <Nav.Link to={"/react-auth"} as={NavLink}>React Authintacation</Nav.Link>
            <Nav.Link to={"/shopping-cart"} as={NavLink}>Shopping Cart</Nav.Link>
        </div>
    </div>
  )
}

export default SelectProject