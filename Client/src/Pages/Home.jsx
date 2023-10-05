import React, { useEffect } from 'react';
import HomeSlider from "../Components/HomeSlider";
import { Box, Button, Heading, useBreakpointValue } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/productReducer/actions';
import { MultipleItems } from '../Components/ProductSlider';
import { Link, useNavigate } from 'react-router-dom';
import { getCartProducts } from '../Redux/cartReducer/actions';

const Home = () => {
  const cart = useSelector((store) => store.cartReducer.cart) || []
  const dispatch = useDispatch();
  useEffect(() => {
    if (cart.length === 0) {
      dispatch(getCartProducts())
    }
  }, [dispatch, cart]);


  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const navigate = useNavigate()
  return (
    <Box>
      <HomeSlider />
      <Box bg={""} mt={{
        base: "14%",
        sm: "5%",
        md: "6%",
        lg: "7%",
      }}>
        <Heading color={"red"} textAlign={"left"} p={"1%"}>
          Popular Shoes
        </Heading>
        <MultipleItems />
      </Box>
      <Box m={"5% 0"}>
        <Button class="button-71" role="button" onClick={() => navigate("/products")}>
          Show More Shoes
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
