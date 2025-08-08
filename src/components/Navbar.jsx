import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { totalQuantity } = useSelector(state => state.app.cart)
  console.log(totalQuantity)
  useEffect(() => {}, [totalQuantity])

  return (
    <nav className='bg-black w-full px-4 sm:px-10 py-3 text-white flex justify-between items-center text-xl md:text-2xl'>
      <div className=' md:font-bold'>EcomDashboard</div>
      <ul className='flex justify-between items-center gap-6'>
        <li className='cursor-pointer border-b-2 border-black hover:border-white transition-[border]'>
          <NavLink
            to='/'
            className={({ isActive }) => {
              console.log('isActive', isActive)
              return isActive
                ? 'border-white border-b-2'
                : 'border-black border-b-2'
            }}
          >
            Home
          </NavLink>
        </li>

        <li
          className='cursor-pointer border-b-2 border-black hover:border-white transition-[border]'
          onClick={() => {
            isOpen ? setIsOpen(false) : setIsOpen(true)
          }}
        >
          <NavLink
            to='/add-to-cart'
            className={({ isActive }) =>
              isActive ? 'border-white border-b-2' : 'border-black border-b-2'
            }
          >
            Cart
            <sup className='ms-1 text-sm'>{totalQuantity}</sup>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
