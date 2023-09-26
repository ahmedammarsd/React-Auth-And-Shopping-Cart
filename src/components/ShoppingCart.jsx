import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';

const ShoppingCart = () => {
    const {cartItems} = useShoppingCart();
  return (
    <Offcanvas show={false}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart