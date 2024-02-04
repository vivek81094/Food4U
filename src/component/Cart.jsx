import React, {useState} from "react";
import { IoIosClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Styled from "styled-components";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import {  useNavigate } from "react-router-dom";
const Cart = () => {
  const [cartActivity, setCartActivity] = useState(true);
  const cartItems = useSelector((state) => state.cart.cart);
  const  toastRemove= (name) => toast(`${name} is Removed`, {
    icon: '👋',
  });

  const navigate=useNavigate();
  const totalQty=cartItems.reduce((totalQty, items)=> totalQty + items.qty, 0)
  const totalAmount=cartItems.reduce((totalAmt, items)=> totalAmt + items.qty*items.price, 0)
  return (
    <>
    <div className={`bg-white w-full  lg:w-[20vw] min-h-[100vh] max-h-fit  absolute right-0 top-0 border-gray-600
     text-gray-600 border-2 ${cartActivity? 'scale-x-0' : 'scale-100'} transition-all duration-500 z-50`}>
      <div className="flex justify-between p-4">
        <h1>My Order </h1>
        <IoIosClose onClick={()=>setCartActivity(!cartActivity)} className="border-2 border-gray-600 text-gray-600 rounded-md text-xl hover:text-red-300 hover:border-red-300 cursor-pointer" />
      </div>
      <div>
      {cartItems.length ===0 && <h1 className="flex justify-center p-4"> Your cart is empty </h1>}
      {cartItems.map((food) => {
        return (
          <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
              toastRemove={toastRemove}
            />
        );
      })}
      
      </div>

      <div className="absolute bottom-0 p-2 ">
        <h1>Items : {totalQty}</h1>
        <h1>Total Amount : {totalAmount}</h1>
        <hr className="w-[90vw] lg:w-[18vw] my-2" />
        <CartButton onClick={()=>navigate("/success")} className="lg:w-[18vw] w-full flex justify-center">
          Checkout
        </CartButton>
      </div>
    </div>
    <div className={`cursor-pointer rounded-full bg-white shadow-md p-3 text-3xl fixed bottom-5 right-5 ${totalQty>0 && 'animate-bounce delay-500 transition-all'}`}>
    <h1 className="absolute top-4 right-[21px] text-white text-xs font-medium"> {totalQty}</h1>
    <FaShoppingCart onClick={()=>setCartActivity(!cartActivity)} />
    </div>
    </>
  );
};

export default Cart;
export const CartButton = Styled.button`
padding: 10px;
 
  font-weight:500;
  border: 4px;
  border-radius: 8px;
  color: white;
background-color: #4ade80 ;

&:hover{
  background-color: #f22f2f;
  font-weight:bold;
}
`;
