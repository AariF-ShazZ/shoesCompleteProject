import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useState } from 'react'
import ProductsRead from '../../components/ProductsRead/ProductsRead'
import ProductPost from '../../components/ProductProst/ProductProst'

const Products = () => {
    
    return (
        <>
            <Box 
                p={"2%"}
                top={0}
                left={0}
                w={"auto"}
            >
                <Tabs variant='soft-rounded' colorScheme={"red"}>
                    <TabList>
                        <Tab>Read Products</Tab>
                        <Tab>Post Products</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <ProductsRead />
                        </TabPanel>
                        <TabPanel>
                            <ProductPost />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

        </>
    )
}

export default Products