import React from 'react';
import { Row , Col } from "react-bootstrap";
import storeItems from "../../data/storeItems.json";
import StoreItem from './StoreItem';
import { useShoppingCart } from '../../context/ShoppingCartContext';

const Store = () => {
    const { cartItems } = useShoppingCart()
  return (
    <div>
        <h1>Store</h1>
        <Row lg={3} md={2} xs={1}>
            {
                storeItems.map((item) => (
                    <Col key={item.id} className="mt-3">
                        <StoreItem {...item} />
                    </Col>
                ))
            }
        </Row>
        
    </div>
  )
}

export default Store