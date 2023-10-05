import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProducts } from '../Redux/productReducer/actions';
import { Box, Button, Flex, HStack, Heading, Image, Text, VStack, useToast } from '@chakra-ui/react';
import { BsFillHeartFill } from "react-icons/bs"
import { addToCart, getCartProducts } from '../Redux/cartReducer/actions';

const Details = () => {
  const singleData = useSelector((store) => store.productsReducer.singleProduct) || {};
  const cart = useSelector((store) => store.cartReducer.cart) || []
  // console.log("singleData", singleData);
  const { id } = useParams();
  const dispatch = useDispatch();
  const toast = useToast()
  useEffect(() => {
    if (id) {
      dispatch(getSingleProducts(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (cart.length === 0) {
      dispatch(getCartProducts())
    }
  }, [dispatch, cart]);

  const images = singleData.images || [];
  const sizes = singleData.sizes || [];
  const gender = singleData.gender || '';
  const name = singleData.name || '';
  const finalPrice = singleData.final_price || 0;
  const [selectImage, setSelectImage] = useState("");
  const [size, setSize] = useState(null)
  useEffect(() => {
    setSelectImage(images[0])
  }, [images])

  const handleAddToCart = () => {
    let payload = {
      ...singleData, size
    }
     // _id: singleData._id,
      // name: singleData.name,
      // color: singleData.color,
      // gender: singleData.gender,
      // original_price: singleData.original_price,
      // final_price:singleData.final_price,
      // images: singleData.images,
      // size,
      // reviews:singleData,
      // rating: 2
    console.log("cart payload size=>", size, payload)
    dispatch(addToCart(payload))
      .then((res) => {
        dispatch(getCartProducts())
        toast({
          title: "Add To Cart.",
          description: `Product Added To The Cart Successfully.`,
          status: "success",
          duration: 1000,
          isClosable: true,
        })
      })
      .catch((err) => console.log("Error Cart Post"))
  }

  return (
    <>
      <Box w="100%" bg="" p="4% 2%">
        <Flex w="70%" m="auto" bg="#fff" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;" borderRadius={"10px"} display={{ base: "column", sm: "column", md: "column", lg: "flex" }} p={{ base: "2%", sm: "2%", md: "3%", lg: "4%" }}>
          <Box w="100%" bg="">
            <Flex alignItems="center" justifyContent="space-between" p="1%" display={{ base: "column", sm: "column", md: "flex", lg: "flex" }}>
              <VStack w="18%" mr="3%" display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}>
                {images.length > 0 && images.map((ele, i) => <Image key={i} src={ele} onMouseOver={() => setSelectImage(ele)} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} w={"400px"} borderRadius={"10px"} cursor={"pointer"} />)}
              </VStack>
              <HStack w="18%" mr="3%" display={{ base: "flex", sm: "flex", md: "none", lg: "none" }} mb={"3%"}>
                {images.length > 0 && images.map((ele, i) => <Image key={i} src={ele} onMouseOver={() => setSelectImage(ele)} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} w={"400px"} borderRadius={"10px"} cursor={"pointer"} />)}
              </HStack>
              <Image src={selectImage} w="100%" boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;" borderRadius={"10px"} display={{ base: "100px", sm: "200px", md: "400px", lg: "500px" }} />
            </Flex>
            <Flex p={"2% 1%"} m={"auto"} alignItems={"center"} justifyContent={"space-evenly"}
              display={{ base: "100px", sm: "200px", md: "400px", lg: "800px" }} >
              {sizes.length > 0 && sizes.map((ele, i) => (
                <Button
                  key={i}
                  onClick={() => setSize(ele)}
                  bg={"#ff0000"}
                  colorScheme='#ff0000'
                  boxShadow="0px 7px 4px rgba(255, 0, 0, 0.3)" // Red shadow
                  color="#fff" // White text color
                  m={{ base: "2% 1%", sm: "2% 1%", md: "2% 1%", lg: "1% 1%" }}

                >
                  {ele}
                </Button>
              ))}
            </Flex>
          </Box>
          <Box bg={""} w={"100%"} textAlign={"left"} ml={"2%"} pl={"3%"}>
            <Text color={"gray"}>{gender}</Text>
            <Heading color={"gray.500"}>{name}</Heading>
            <Flex p={"1% 2%"} alignItems={"center"} justifyContent={"space-evenly"} w={{ base: "190px" }} bg={""} >
              <Heading ml={{ base: "-22%", sm: "-22%", md: "-9%", lg: "-7%" }} color={"red"} fontSize={{ base: "15px", sm: "16px", md: "23px", lg: "23px" }}>Rs. {finalPrice}</Heading>
              <Heading fontSize={{ base: "12px", sm: "13px", md: "19px", lg: "19px" }} as="strike" color={"#db3f3f"}>
                Rs. {singleData.original_price}
              </Heading>
            </Flex>
            <Text color={"gray"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita modi mollitia, itaque fugiat quisquam facere, animi atque nesciunt debitis tempora error fugit similique </Text>
            <Flex bg={""} m={{ base: "3%", sm: "2%", md: "8%", lg: "9%" }} alignItems={"center"} justifyContent={"center"} p={{ base: "2% 8% 2% 0%", sm: "2%", md: "2%", lg: "0" }} >
              <Button
                colorScheme='#ff0000'
                color={"#fff"}
                bg="#ff0000"
                boxShadow="0px 8px 4px rgba(255, 0, 0, 0.3)"
                m={4}
                p={5}
                isDisabled={!size}
                onClick={() => handleAddToCart()}
                fontSize={{ base: "8px", sm: "12px", md: "15px", lg: "15px" }}
                w={{ base: "100px", sm: "150px", md: "180px", lg: "180px" }}
              >
                {size ? "ADD TO CART" : "PLEASE SELECT A SIZE"}
              </Button>
              <Button colorScheme='#ff0000' bg="#ff0000" boxShadow="0px 8px 4px rgba(255, 0, 0, 0.3)" ><BsFillHeartFill color='#fff' /></Button>
            </Flex>

          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Details;
