import React, { useState } from 'react'
import { BsFillCartDashFill } from 'react-icons/bs'
import { BsFillCartPlusFill } from 'react-icons/bs'

const Cart = ({ cart }) => {
  const [cartItems,setCartItems]=useState([...cart])
  
 
  const addCartList=(list)=>{
    cartItems.map((list,index)=>(
      <li>
        setCartItems([...cartItems,list])
      </li>
    ))
  }
  const deleteFromCart=(index)=>{
    const updateList=cartItems.filter((i)=>i!==index)
  }

  return (
    <>
      <h1 className='text-[orange] text-2xl font-bold text-center mt-6'>Cart List</h1>
      <ul>
        {cart.map((product, index) => (
          <li key={index} className='bg-white h-[60px] w-[800px] text-lg drop-shadow-md mt-[20px] text-[orange] mx-auto px-7 py-4 flex'>
            {product.title} - ${product.price}
            < BsFillCartPlusFill className='cursor-pointer ml-[300px]' onClick={()=>addCartList(product)}/>
            <BsFillCartDashFill className='cursor-pointer ml-[10px]' onClick={()=>deleteFromCart(index)}/>
          </li>

        ))}
      </ul>
    </>
  )
}

export default Cart


