import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

const ShoppingCartContext = createContext({});

const initialCartItems = localStorage.getItem("shopping-cart") ? JSON.parse(localStorage.getItem("shopping-cart")) : []

const ShoppingCartProvider = ({children}) => {
    const [isOpen , setIsOpen] = useState(false)
    const [cartItems , setCartItems] = useState(initialCartItems);

    useEffect(() => {
      localStorage.setItem("shopping-cart" , JSON.stringify(cartItems))
    },[cartItems])
    const openCart = () => {
      setIsOpen(true)
    }
    const closeCart = () => {
      setIsOpen(false)
    }
     // GET SUMITION THE ITEMS IN CART (CONTAIN TH DUBLE OF ITEM)
    const cartQuantity = cartItems.reduce((quantity , item) => item.quantity + quantity , 0)

    // GET ITEM IN CART IF === IN CART ===
    const getItemsQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0
    } 

    //START ADD TO CART
    const increaseCartQuantity = (id) => {
      setCartItems((currntItems) => {
        // === CHECK THE ITEM IN THE CART OR NOT ===

        //console.log(currntItems.find((item) => item.id === id)) IN FIRST TIME ITS NOT WORK AFTER CHECK THE VALUE AND CONDTION ITS WORK == NULL

        // CASE ONE === ITEM NOT IN CART == IF ITEM NOT IN CART == ADD ITEM TO CART
        if(currntItems.find((item) => item.id === id) == null){
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
    removeItemFromCart,
    isOpen,
    openCart,
    closeCart,
    cartQuantity
  }}
  >
    {children}
    <ShoppingCart isOpen={isOpen}/>
  </ShoppingCartContext.Provider>
  )
}


export default ShoppingCartProvider;

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
}
