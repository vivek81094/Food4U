import React from "react";

import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.json";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";


const FoodItems = () => {
  const toastAdd = (name) => toast.success(`${name} is Added`);
  const category = useSelector(state=> state.category.category)
  const search=useSelector(state=>state.search.search)

  return (
   <>
   
   
   <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className="w-full items-center">
      <div className="flex items-center justify-center  flex-wrap gap-4 ">

{FoodData.filter((food)=>{

if(category==='All')
{
  return food.name.toLowerCase().includes(search.toLowerCase())
}
else
{
  return (
    // category===food.category
    food.category===category && food.name.toLowerCase().includes(search.toLowerCase())
  )
}

}).map((food)=>(
<FoodCard key={food.id}
          id={food.id}
            name={food.name}
            img={food.img}
            price={food.price}
            rating={food.rating}
            desc={food.desc}
            toastAdd={toastAdd}
                      
          />
))}

       
      </div>
    </div>
   
   </>

  );
};

export default FoodItems;