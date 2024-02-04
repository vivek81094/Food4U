import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({element}) => {
  const cartItem=useSelector((state)=>state.cart.cart)
  return (
    <div>
      {cartItem.length>0 ? element : <Navigate to='/' />}
    </div>
  )
}

export default ProtectedRoute
