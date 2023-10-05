import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ProductForm from '../Form'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProducts } from '../../../Redux/productReducer/actions'

const ProductsUpdate = ({onClose}) => {
  const singleUpdate = useSelector((store) =>store.productsReducer.singleProduct)
  const dispatch = useDispatch()
  useEffect(() => {
    if(singleUpdate.length === 0){
      dispatch(getSingleProducts())
    }
  },[singleUpdate])
  console.log("singleUpdate",singleUpdate)
  return (
    <div>
       <Box>
        <ProductForm onClose={onClose} data ={singleUpdate} type={"update"}/>
        </Box>
    </div>
  )
}

export default ProductsUpdate