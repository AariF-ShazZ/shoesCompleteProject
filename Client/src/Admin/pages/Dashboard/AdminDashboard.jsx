import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { FaBox, FaUsers, FaShoppingCart } from 'react-icons/fa'; // Import the specific icons you want to use
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../Redux/productReducer/actions';
import { ordersGet } from '../../../Redux/cartReducer/actions';
import { getUsersData } from '../../../Redux/authReducer/actions';
import Orders from '../Orders';
import Users from '../../components/Customers/Users';

const AdminDashboard = () => {
  const allProducts = useSelector((store) => store.productsReducer.allProducts) || 0;
  const all_orders = useSelector((store) => store.cartReducer.orders) || [];
  const usersData = useSelector((store) => store.authReducer.usersData) || [];
  console.log("all_orders",all_orders);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useEffect");
  },[])
  useEffect(() => {
      dispatch(getAllProducts());
    
    if (all_orders.length === 0) {
      dispatch(ordersGet());
    }
    if (usersData.length === 0) {
      dispatch(getUsersData());
    }
  }, [allProducts, dispatch, all_orders, usersData]);

  return (
    <>
      <Box bg={''} p={'4%'}>
        <Box bg={''} p={'2%'}>
          <Flex align={'center'} justify={'space-evenly'}>
            <Box
              bg={'red'}
              w={'25%'}
              p={'1%'}
              boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'}
              _hover={{
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
              }}
              cursor={"pointer"}
            >
              <Flex align={"center"} justify={"space-between"} mb={"2%"}>
                <FaBox color="white" size={50} />
                <Heading color={'white'}>Products</Heading>
              </Flex>
              <Heading color={'white'} fontSize={"25"}>
                {allProducts > 1 ? `${allProducts} Products` : allProducts === 1 ? '1 Product' : '0 Product'}
              </Heading>
            </Box>

            <Box
              bg={'green'}
              w={'25%'}
              p={'1%'}
              boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'}
              _hover={{
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
              }}
              cursor={"pointer"}
            >
              <Flex align={"center"} justify={"space-between"} mb={"2%"}>
                <FaUsers size={50} color="white" />
                <Heading color={'white'}>User</Heading>
              </Flex>
              <Heading color={'white'} fontSize={"25"}>
                {usersData.length > 1 ? `${usersData.length} Users` : usersData.length === 1 ? '1 User' : '0 User'}
              </Heading>
            </Box>
            <Box
              bg={'blue'}
              w={'25%'}
              p={'1%'}
              boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'}
              _hover={{
                boxShadow:
                  'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
              }}
              cursor={"pointer"}
            >
              <Flex align={"center"} justify={"space-between"} mb={"2%"}>
                <FaShoppingCart size={50} color="white" />
                <Heading color={'white'}>Order</Heading>
              </Flex>
              <Heading color={'white'} fontSize={"25"}>
                {all_orders.length > 1 ? `${all_orders.length} Orders` : all_orders.length === 1 ? '1 Order' : '0 Order'}
              </Heading>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Tabs variant='enclosed' color={"red"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"} bg={"gray.200"}>
            <TabList>
              <Tab>Users</Tab>
              <Tab>Orders</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Users/>
              </TabPanel>
              <TabPanel>
                <Orders/>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboard;
