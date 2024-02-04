import React, { useEffect, useState } from "react";
import DetailedFoodCard from "./DetailedFoodCard";
import FoodCard from "./FoodCard";
import { useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const FoodDetails = ({ food }) => {
  const [dFood, setDFood] = useState([{}]);
  const { id } = useParams();
  const toastAdd = (name) => toast.success(`${name} is Added`);
  useEffect(() => {
    const filterFood = food.filter((item) => item.id == id);

    setDFood(filterFood[0]);
  }, [id]);

  return (
    <>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>

<div className="mb-10">
{ food.filter((item) => item.id == id

).map((food) => (
    <DetailedFoodCard
      key={food.id}
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
<div><h1 className="border-spacing-2 text-center animate-bounce delay-75  transition-all ease-in-out text-xl bg-gray-300"> Similar food items</h1>
<div className="flex items-center justify-center  flex-wrap gap-4 ">
  { food.filter((item) => item.category == dFood.category

).map((food) => (
    <FoodCard
      key={food.id}
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

export default FoodDetails;
