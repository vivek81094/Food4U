import React from "react";
import Styled from "styled-components";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";


const DetailedFoodCard = ({ id, name, img, price, rating, desc, toastAdd }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const AddItem = () => {
    dispatch(addToCart({ id, price, img, name, rating, qty: 1 }));

    toastAdd(name);
  };

  return (
    <div>
      <div className="flex gap-5 flex-col lg:flex-row justify-center  items-center">
        <div className="mr-20">
          <img
            src={img}
            alt=""
            className="lg:w-[20rem] lg:h-[20rem] w-[10rem] h-[10rem]   ml-12 mt-12 hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
          />
        </div>
        <div>
          <div className="font-semibold flex lg:gap-8 justify-between py-3">
            <h1>{name} </h1>
            <h1 className="text-green-400">₹{price}</h1>
          </div>
          <div className=" lg:w-[36rem]  w-[20rem]">{desc}</div>
          <div className="flex justify-between gap-12 py-3  ">
            <span className="flex justify-between items-center font-bold">
              <FaStar className="text-yellow-400  mr-1" />
              {rating}
            </span>
            <CartButton
              onClick={ 
                AddItem
              }
            >
              Add to cart
            </CartButton>
          </div>
        </div>
      </div>
      <IoIosClose onClick={()=>navigate("/")} className="border-2 border-gray-600 text-gray-600 rounded-md text-xl fixed top-8 right-8 hover:text-red-400 hover:border-red-400 cursor-pointer" />
    </div>
  );
};

export default DetailedFoodCard;
export const CartButton = Styled.button`
padding: 10px;
  margin: 0 10px;
  font-weight:500;
  border: 4px;
  border-radius: 8px;
  color: white;
background-color: #f22f2f ;

&:hover{
  background-color: #4ade80;
  font-weight:bold;
}
`;
