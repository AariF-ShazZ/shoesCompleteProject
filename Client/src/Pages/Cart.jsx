import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartData= useSelector((store) => store.cartReducer.cart)
  console.log("cart",cartData);
  return (
    <>
    <Flex bg={"blue"}>
      <Box>
        payment
      </Box>
      <Box>
        details
      </Box>
    </Flex>
    </>
  )
}

export default Cart
