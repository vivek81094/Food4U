import React from "react";
import {useDispatch} from 'react-redux'
import { FaStar } from "react-icons/fa";
import Styled from "styled-components";
import {addToCart} from '../redux/CartSlice'
import { Link } from "react-router-dom";

const FoodCard = ({id, name, img, price, rating, desc, toastAdd }) => {
  const dispatch=useDispatch()
  
  const AddItem=()=>{
dispatch(addToCart({id, price, img, name, rating, qty:1,  }))
toastAdd(name)
  }

  return (
   <>
   
    <div className=" w-[250px] h-[400px] px-4 py-3 bg-slate-100 relative" >
      <div className="">
        <Link to={`/food/${id}`}>
         <img src={img} alt="" className="w-[10rem] h-[10rem] flex justify-center items-center hover:scale-110 cursor-grab transition-all duration-500 ease-in-out m-auto " />
        </Link>
        <div className="font-semibold flex justify-between py-3">
          <h1>{name} &#32;</h1>
          <h1 className="text-green-400">₹{price}</h1>
        </div>
        <div className=" ">{desc.slice(0, 50)}...</div>
        <div className="flex justify-between gap-12 py-3  absolute bottom-1">
          <span className="flex justify-between items-center font-bold">
            <FaStar className="text-yellow-400  mr-1"  />
            {rating}
          </span>
          <CartButton onClick={AddItem}>Add to cart</CartButton>
        </div>
      </div>
    </div>
   </>
  );
};

export default FoodCard;

export const CartButton=Styled.button`
padding: 10px;
  margin: 0 10px;
  font-weight:500;
  border: 4px;
  border-radius: 8px;
  color: white;
background-color: #f22f2f ;

&:hover{
  background-color: #dd0707;
  font-weight:600;
  
}
`;