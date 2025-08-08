import React, { useEffect, useState } from 'react'
import { useGetProductsQuery } from '../feature/injectedProductApi'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, saveProducts } from '../feature/productSlice'
import { useNavigate } from 'react-router-dom'


const ProductCard = () => {
  const dispatch = useDispatch()
  const { data: products } = useGetProductsQuery()
  const { cart } = useSelector(state => state.app)
  const navigate = useNavigate()

  const handleCart = (e, product) => {
    e.preventDefault()
    console.log('product', product)
    dispatch(addToCart(product))
  }
  const saveCartToLocalStorage = cart => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  const saveProductsToLocalStorage = products => {
    localStorage.setItem('products', JSON.stringify(products))
  }
  useEffect(() => {
    saveCartToLocalStorage(cart)
  }, [cart])
  useEffect(() => {
    dispatch(saveProducts(products))
    saveProductsToLocalStorage(products)
  }, [products])
  return (
    <div className='px-10'>
      <h1 className='font-bold text-xl my-4'> Product Listing</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-4 ProductCardCoainter'>
        {products &&
          products.map(product => (
            <div
              className='border-[1px] border-gray-500/30 max-w-64 rounded-lg overflow-hidden hover:scale-[1.03] transition-[scale]'
              key={product.id}
            >
              <img
                src={product.image}
                alt={product.image}
                onClick={() => navigate(`/product-details/${product.id}`)}
              />
              <div className='flex flex-col justify-between items-center gap-2 px-2 py-4'>
                <h2 className='text-center font-bold text-lg'>
                  {product.name}
                </h2>
                <p className=''>${product.price}</p>
                <button
                  className='bg-black text-white px-4 py-2 cursor-pointer'
                  onClick={e => handleCart(e, product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ProductCard
