import { createSlice } from "@reduxjs/toolkit";
const localStorageKey='cart'
const Items=localStorage.getItem('cart') != null ? JSON.parse(localStorage.getItem('cart')) : [];
const CartSlice=createSlice({
    name: 'cart',
    initialState:{
        cart:Items,
        // status: 'idle'
    },

    reducers:{

        addToCart: (state, action)=>{
            const existingItem=state.cart.find((item)=> item.id===action.payload.id);
            
            if(existingItem)
            {
                state.cart=state.cart.map((item)=> 
                item.id===action.payload.id? {...item, qty: item.qty+1} : item)
            }
            else{
                state.cart.push(action.payload)
            }
            localStorage.setItem('cart', JSON.stringify(state.cart.map((data)=>data)))
        },

        removeCart: (state, action)=>{
            state.cart=state.cart.filter((item)=>item.id!==action.payload.id)
            localStorage.setItem('cart', JSON.stringify(state.cart.map((data)=>data)))
        },

        increaseQty: (state, action)=>{
            state.cart=state.cart.map((item)=>
            item.id===action.payload.id? {...item, qty: item.qty + 1 } : item 
            )
            localStorage.setItem('cart', JSON.stringify(state.cart.map((data)=>data)))
        },

        decreaseQty: (state, action)=>{

            state.cart=state.cart.map((item)=>
            item.id===action.payload.id? {...item, qty: item.qty - 1 } : item 
            )
            localStorage.setItem('cart', JSON.stringify(state.cart.map((data)=>data)))
        }
    },

    extraReducers: (builder)=> {
        builder

    }
})
export const  {addToCart, removeCart, increaseQty, decreaseQty} =CartSlice.actions 
export default CartSlice.reducer