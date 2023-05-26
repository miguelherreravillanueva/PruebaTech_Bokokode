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
        <p>People also buy</p>
    </div>
  )
}

export default Products