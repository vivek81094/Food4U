import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/SearchSlice'
const Navbar = () => {
const dispatch=useDispatch()
  const search=(e)=>{
dispatch(setSearch(e.target.value))
  }
  return (
    <nav className='flex  flex-col lg:flex-row justify-between p-2 relative top-2'>
      <div className='text-gray-500 font-medium  text-lg'>
      <h1>{new Date().toUTCString().slice(0, 16)}</h1>
           {/* <h1 className='text-gray-900 font-medium '>Food 4 You</h1> */}
      </div>
           <div >
           <input className='border-gray-400 outline-none lg:w-[18vw] w-full border rounded-lg p-2' type="serch" placeholder='search' onChange={(e)=>search(e)} />
           </div>
    </nav>
  )
}

export default Navbar
