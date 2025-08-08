import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import Loader from './Loader'
import { useGetProductsQuery } from '../feature/injectedProductApi'

const Home = () => {
  const {  isLoading, isError, error } = useGetProductsQuery()
  return (
   <>
    {
      isLoading ? <Loader/>: <ProductCard />
    }
    </> 
  )
}

export default Home
