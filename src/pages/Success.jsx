import React, { useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import RiseLoader   from "react-spinners/RiseLoader";
const Success = () => {
    const navigate=useNavigate()
    const [loading, setLoading]=useState(true)
    useEffect(()=>{
setTimeout(()=>{
    setLoading(false);
}, 3000)
    },[])
  return (
   <><div className='bg-gray-300 flex flex-col justify-center items-center h-screen'>
   {loading ? (<RiseLoader   color="#36d7b7" /> ):(<div> <h1 className='text-3xl font-bold mb-5 text-green-700'>😋Order Successful😋</h1>
      <p>Your order has been Successfully placed.</p> </div>  ) }</div>
    <IoIosClose onClick={()=>navigate("/")} className="border-2 border-gray-600 text-gray-600 rounded-md text-xl fixed top-8 right-8 hover:text-red-400 hover:border-red-400 cursor-pointer" />
    
   </>
  )
}

export default Success
