import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../feature/productSlice'

const Productdetails = () => {
  const params = useParams()
  const productId = params.id
  let products = JSON.parse(localStorage.getItem('products'))
  const dispatch = useDispatch()
  let product = products.filter(prod => prod.id === productId)
  product = product[0]
  const navigate = useNavigate()

  const handleCart = (e, product) => {
    e.preventDefault()
    dispatch(addToCart(product))
    navigate('/add-to-cart')
  }

  return (
    <div className='px-20 mt-10'>
      {product && (
        <div className='flex flex-col md:flex-row items-center justify-center sm:justify-between gap-8 shadow-[0_0_10px_rgba(0,0,0,0.25)] '>
          <img src={product.image} alt={product.image} className='' />
          <div className='flex flex-col  gap-6 px-2 py-4 '>
            <h2 className='font-bold text-2xl'>{product.name}</h2>
            <p className='text-xl'>
              <span className='font-bold'>Price:</span> Rs. {product.price}
            </p>
            <p className='sm:w-1/2 text-xl'>{product.description}</p>
            <button
              className='bg-black text-white px-4 py-2 cursor-pointer max-w-[150px] mt-8'
              onClick={e => handleCart(e, product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Productdetails
