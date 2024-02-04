import React from 'react'
import Navbar from '../component/Navbar'
import CategoryMenu from '../component/CategoryMenu'
import FoodItems from '../component/FoodItems'
import Cart from '../component/Cart'
import Carousel from '../component/Carousel'
import { FooterFour } from '../component/Footer'
// import Styled from "styled-components";
const Home = () => {
  return (
    <div >
       
      <Navbar/>
      <Carousel/>
      <CategoryMenu/>
      <FoodItems/>
      <Cart/>
      <FooterFour/>
    
    </div>
  )
}

export default Home

