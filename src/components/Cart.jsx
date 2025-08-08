import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { decrementQty, incrementQty, removeProduct } from '../feature/productSlice';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
const{cartItems,totalQuantity,totalAmount}= useSelector(state=>state.app.cart);
console.log("cartItems",cartItems);
const navigate=  useNavigate();
const dispatch=useDispatch();
useEffect(()=>{},[cartItems])

  return (
    <div className='w-full h-full flex items-center flex-col gap-4 px-4 sm:px-36 mt-8 pb-8'>
      { //filter wil return item whose quantity is graeter then 0      
       cartItems&& cartItems.filter(product=>product.quantity>0).map((product)=>(
            <div className='w-full shadow-[0px_0px_10px_rgba(0,0,0,0.25)] flex justify-between sm:pe-4'>
                <div className='flex items-center pe-6 gap-4'>
                    <img src={product.image} alt={product.image} className='w-24'/>
                    <div>
                        <p className='font-bold text-sm md:text-lg '>{product.name}</p>
                        <p>Qty: {product.quantity}</p>
                    </div>
                </div>
                <div className='flex justify-evenly flex-col'>
                       <p className='flex text-sm sm:gap-2 items-center font-bold '><span>Rs. {product.price}</span> <MdDelete className='text-2xl sm:text-xl cursor-pointer text-red-600 ' onClick={()=>dispatch(removeProduct(product))}/></p>
                    <div className='sm:space-x-2'>
                        <button className='px-1 md:px-3 text-center rounded-sm bg-black text-white text-xl cursor-pointer'onClick={()=>(dispatch(decrementQty(product)))}>-</button>
                        <span className='px-1'>{product.quantity}</span>
                        <button className='px-1 md:px-3 text-center rounded-sm bg-black text-white text-xl cursor-pointer' onClick={()=>(dispatch(incrementQty(product)))}>+</button>
                    </div>
                </div>
            </div>               
        ))
      }  
    {
     cartItems && cartItems.filter(prod=>prod.quantity>0).length>0 &&  <div className='flex items-end flex-col gap-2 font-bold w-full'>
        <p>Total Quantiity: {totalQuantity}</p>
        <p>Total Amount: Rs {totalAmount}</p>
         <button className='px-4 py-2 text-center rounded-sm bg-black/90 hover:bg-black/100 transition-[bg] text-white cursor-pointer' onClick={()=>{alert("Order palced Successfully"); navigate("/")}}>Place Order</button>
      </div> 
    }  
    
    </div>
  )
}

export default Cart