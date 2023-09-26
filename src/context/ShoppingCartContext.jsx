import { createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

const ShoppingCartContext = createContext({});

const ShoppingCartProvider = ({children}) => {
    const [cartItems , setCartItems] = useState([]);

    const getItemsQuantity = (id) => {
      console.log(id)
        return cartItems.find((item) => item.id === id)?.quantity || 0
    } 

    //START ADD TO CART
    const increaseCartQuantity = (id) => {
      setCartItems((currntItems) => {
        // === CHECK THE ITEM IN THE CART OR NOT ===

        // CASE ONE === ITEM NOT IN CART == IF ITEM NOT IN CART == ADD ITEM TO CART
        if(currntItems.find((item) => item.id === id) === null){
          return [...currntItems , {id , quantity : 1}]
          //return cartItems.push( {id , quantity : 1})
        } 

        // CASE TWO === ITEM IN CART
        else {
          return currntItems.map((item) => { 
            // CHECK ALL ITEMS FOR INCRESE THE ITEM WHEN FOUND IN CART
            if (item.id === id){
              return {...item , quantity: item.quantity + 1}
            }
            else {
              return item
            }
          })
        }
      }) 
    }
    // END ADD TO CART

    //START DECREASE ITEM IN CART
    const decreaseCartQuantity = (id) => {
      setCartItems((currntItems) => {
        // === CHECK THE ITEM IN THE CART OR NOT ===

        // CASE ONE === ITEM IN CART == IF ITEM IN CART == BACK ITEMS FROM CART
        if(currntItems.find((item) => item.id === id) === null){
          return currntItems.filter((item) => item.id !== id)
        } 

        // CASE TWO === ITEM IN CART
        else {
          return currntItems.map((item) => { 
            // CHECK ALL ITEMS FOR DECRESE THE ITEM WHEN FOUND IN CART
            if (item.id === id){
              return {...item , quantity: item.quantity - 1}
            }
            else {
              return item
            }
          })
        }
      }) 
    }
    // END DECREASE ITEM IN CART

    // START REMOVE ITEM
      const removeItemFromCart = (id) => {
        setCartItems((currntItems) => currntItems.filter((item) => item.id !== id))
      }
    // END REMOVE ITEM
  return (
  <ShoppingCartContext.Provider value={{
    cartItems ,
    getItemsQuantity ,
    increaseCartQuantity , 
    decreaseCartQuantity , 
    removeItemFromCart
  }}
  >
    {children}
    <ShoppingCart />
  </ShoppingCartContext.Provider>
  )
}


export default ShoppingCartProvider;

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
}
