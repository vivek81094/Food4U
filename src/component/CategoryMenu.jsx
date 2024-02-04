import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import FoodData from "../data/FoodData.json";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/CategorySlice";
const CategoryMenu = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  const [categories, setCategories] = useState([]);
  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);

  const selectCategory = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="px-7 ">
      {/* <h1 className="text-xl font-semibold "> Find Food 4 You</h1> */}
      <div className=" py-3 overflow-x-scroll lg:overflow-x-hidden scroll-smooth">
        <Button
          onClick={() => dispatch(setCategory("All"))}
          className={` bg-[#cbd5e1] text-black ${selectedCategory === "All" && "bg-[#f22f2f] font-bold text-white"}`}
        >
          All
        </Button>
        {categories.map((category, id) => (
          <Button
            onClick={() => selectCategory(category)}
            key={id}
            className={`bg-[#cbd5e1] text-black  ${selectedCategory === category && "bg-[#f22f2f] text-white"}`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;

export const Button = Styled.button`
padding: 10px;
  margin: 10px 10px;
  font-weight:500;
  border: 4px;
  border-radius: 8px;
// background-color:  #cbd5e1;

// background-color:${({ isSelected }) => (isSelected ? "#f22f2f" : "#cbd5e1")};
// color:${({ isSelected }) => (isSelected ? "white" : "black")};



&:hover{
  background-color: #dd0707;
 font-weight:700;
  color:white;
  
}
`;
