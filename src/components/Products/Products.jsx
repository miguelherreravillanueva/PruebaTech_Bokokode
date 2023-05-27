import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { postAll } from '../../features/products/productsSlice'

const Products = () => {
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(postAll());
    }, []);
    
  return (
    <div>
        <p>You can also buy this</p>
    </div>
  )
}

export default Products