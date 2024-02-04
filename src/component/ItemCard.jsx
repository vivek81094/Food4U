import React from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {removeCart, increaseQty, decreaseQty} from '../redux/CartSlice'
const ItemCard = ({id, img, name, price, qty, toastRemove}) => {
 const dispatch=useDispatch()
const removeItem =()=>{
  dispatch(removeCart({id,}))
  toastRemove(name)
}

const increament=()=>{
   dispatch(increaseQty({id})) 
}

const decreament=()=>{
  qty>1 ? dispatch(decreaseQty({id})) : dispatch(removeCart({id,}))
}

  return (
    <div>
      <div className="flex gap-2 rounded-lg p-2 mb-5 shadow-md">
        <MdDelete onClick={removeItem} className="border-2 border-gray-600 text-gray-600 rounded-md text-xl absolute  right-7  hover:bg-red-500 hover:text-white hover:border-none transition-all ease-linear cursor-pointer" />
        <img
          src={img}
          alt="cartItem"
          className="w-[50px] h-[50px] "
        />

        <div className="leading-6">
          <h1 className="w-[90%]">{name}</h1>
        <div className="flex ">
        <span className="text-green-400">₹{price}</span>
          <div className="flex justify-between items-center absolute   right-7">
            <IoIosAdd onClick={increament} className="border-2 border-gray-600 text-gray-600 rounded-md text-xl hover:bg-green-500 hover:text-white hover:border-none transition-all ease-linear cursor-pointer" />
            <span className="p-2">{qty}</span>
            <IoIosRemove onClick={decreament} className="border-2 border-gray-600 text-gray-600 rounded-md text-xl hover:bg-green-500 hover:text-white hover:border-none transition-all ease-linear cursor-pointer" />
          </div>
        </div>
        </div>
        
      
      </div>
    </div>
  );
};

export default ItemCard;
