import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import ProductsList from '../../../Components/ProductsList/ProductsList'

const ProductsRead = () => {

    return (
        <>
            <Box bg={""} p={"3% 2%"}>
                <ProductsList type={"admin"} />
            </Box>
        </>
    )
}

export default ProductsRead