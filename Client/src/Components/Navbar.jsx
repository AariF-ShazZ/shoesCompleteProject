import React, { useEffect, useRef, useState } from "react";
import emptyCart from "../Images/emptyCart.webp";
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Input,
    InputGroup,
    InputLeftElement,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    ModalFooter,
    Heading,
    InputRightElement,
    Textarea,
    Text,
    Icon,
    Image,
    useToast,
    RadioGroup,
    Radio,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { HiShoppingCart } from "react-icons/hi";
import { BsFillHeartFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import SearchBox from "./SearchBox";
import {
    decreaseCartQuantity,
    deleteCartProduct,
    getCartProducts,
    increaseCartQuantity,
} from "../Redux/cartReducer/actions";
import { logout } from "../Redux/authReducer/actions";
import { RiAdminFill } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";


export default function Navbar() {
    const cart = useSelector((store) => store.cartReducer.cart) || [];
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [mobileDrawerIsOpen, setMobileDrawerIsOpen] = useState(false);
    const btnRef = useRef();
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bgColor = useColorModeValue("#ffffff", "#fff");
    const toast = useToast();
    const userType = JSON.parse(localStorage.getItem("userType")) || {
        usertype: "user",
    };
    const [cartDrawerIsOpen, setCartDrawerIsOpen] = useState(false);

    const openCartDrawer = () => {
        setCartDrawerIsOpen(true);
    };

    const closeCartDrawer = () => {
        setCartDrawerIsOpen(false);
    };

    useEffect(() => {
        if (cart.length === 0) {
            dispatch(getCartProducts());
        }
    }, [dispatch, cart]);

    const handleSubmit = () => {
        dispatch(query)
            .then((res) => navigate("/products"))
            .catch((err) => console.log("err", err));
    };

    const handleIncrease = (payload) => {
        dispatch(increaseCartQuantity(payload))
            .then((res) =>
                toast({
                    title: "Increase Quantity.",
                    description: `Cart Item Quantity Increased Successfully.`,
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                })
            )
            .catch((err) =>
                toast({
                    title: "Cart Item Error.",
                    description: `Cart Item Not Found.`,
                    status: "error",
                    duration: 1000,
                    isClosable: true,
                })
            );
    };

    const handleDecrease = (payload) => {
        if (payload.qty > 1) {
            dispatch(decreaseCartQuantity(payload))
                .then((res) =>
                    toast({
                        title: "Decrease Quantity.",
                        description: `Cart Item Quantity Decreased Successfully.`,
                        status: "success",
                        duration: 1000,
                        isClosable: true,
                    })
                )
                .catch((err) =>
                    toast({
                        title: "Cart Item Error.",
                        description: `Cart Item Not Found.`,
                        status: "error",
                        duration: 1000,
                        isClosable: true,
                    })
                );
        } else {
            dispatch(deleteCartProduct(payload._id))
                .then((res) =>
                    toast({
                        title: "Cart Item Deleted.",
                        description: `Cart Item Deleted Successfully.`,
                        status: "success",
                        duration: 1000,
                        isClosable: true,
                    })
                )
                .catch((err) =>
                    toast({
                        title: "Cart Item Error.",
                        description: `Cart Item Not Found.`,
                        status: "error",
                        duration: 1000,
                        isClosable: true,
                    })
                );
        }
    };

    const handleRemove = (id) => {
        dispatch(deleteCartProduct(id))
            .then((res) =>
                toast({
                    title: "Cart Item Deleted.",
                    description: `Cart Item Deleted Successfully.`,
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                })
            )
            .catch((err) =>
                toast({
                    title: "Cart Item Error.",
                    description: `Cart Item Not Found.`,
                    status: "error",
                    duration: 1000,
                    isClosable: true,
                })
            );
    };

    let total_final_price = 0;
    let total_original_price = 0;

    const convertToNumber = (str) => {
        if (Number(str)) {
            return Number(str);
        }
        let arr = str.includes(",") ? str.split(",") : [];
        let final_str = arr.reduce((acc, value) => acc + value, "");

        let result = Number(final_str);
        return result;
    };

    cart.length > 0 &&
        cart.forEach((prod) => {
            total_original_price +=
                convertToNumber(prod.original_price) * prod.qty;
            total_final_price += convertToNumber(prod.final_price) * prod.qty;
        });

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <>
            <Box bg={bgColor} position={"sticky"} zIndex={"10"} top={"0"} px={4} pt={"10px"} pb={"16px"}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box display={{ lg: "none" }}>
                        <HamburgerIcon
                            onClick={() => {
                                setMobileDrawerIsOpen(!mobileDrawerIsOpen);
                            }}
                            ref={btnRef}
                            color='red'
                            fontSize={"28px"}
                        />
                    </Box>
                    <HStack spacing={14} alignItems={'center'} w={"auto"}>
                        <Box>
                            <Heading textAlign={"left"} color={"#ff0000 "}>
                                <Link to={"/"}>ShoesHub</Link>
                            </Heading>
                        </Box>
                        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                            <HStack
                                as={'nav'}
                                spacing={4}
                                display={{
                                    base: 'none',
                                    md: { display: "flex" },
                                    lg: "flex"
                                }}
                                align="center"
                                justify="center"
                            >
                                <Box display={['none', 'none', 'block']}>
                                    <SearchBox
                                        handleSubmit={handleSubmit}
                                        query={query}
                                        setQuery={setQuery}
                                    />
                                </Box>
                            </HStack>
                        </Flex>
                    </HStack>
                    <Flex w="14%" alignItems={'center'} justifyContent={"space-between"}>
                        <Flex w={"70%"} alignItems={'center'} justifyContent={"space-between"} display={['none', 'none', 'flex']}>
                            <Box border={"2px solid #dfdfdf "} p={"10%"} borderRadius={"50%"}>
                                <BsFillHeartFill cursor={"pointer"} color="#5e6c84" fontSize={"20px"} />
                            </Box>
                            <Box border={"2px solid #dfdfdf"} p={"10%"} borderRadius={"50%"} onClick={openCartDrawer}>
                                <HiShoppingCart cursor={"pointer"} color="#5e6c84" fontSize={"23px"} />
                                <Box
                                    position="absolute"
                                    top="10px"
                                    right="70px"
                                    bg="red"
                                    color="white"
                                    borderRadius="50%"
                                    fontSize="12px"
                                    width="20px"
                                    height="20px"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    {cart && cart.length > 0 ? <Text color={"#fff"}>{cart.length}</Text> : 0}
                                </Box>
                            </Box>
                            <Drawer
                                isOpen={cartDrawerIsOpen}
                                placement='right'
                                onClose={closeCartDrawer}
                                size="sm"
                            >
                                <DrawerOverlay />
                                <DrawerContent bg={"#fff"}>
                                    <DrawerCloseButton />
                                    <DrawerHeader color={"gray"} fontWeight={"bold"} fontSize={"25px"}> YOUR CART ({cart && cart.length > 0 ? cart.length : 0})</DrawerHeader>
                                    <DrawerBody>
                                        {cart.length && cart.length > 0 ? (
                                            cart.map((item) => {
                                                return (
                                                    <Flex key={item._id} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} m="1" mb="7" p="2" bg={"gray.500"}>
                                                        <Image boxSize={"75px"} src={item.images[0]} alt="shoe" mr={"3%"} />
                                                        <Box>
                                                            <Flex justifyContent={"space-between"} align="center">
                                                                <Text fontSize={"13px"}>{`${item.name} | ${item.color} | ${item.gender}`}</Text>
                                                                <Icon boxSize={5} ml="5" as={RxCross2} onClick={() => handleRemove(item._id)} cursor={"pointer"} />
                                                            </Flex>
                                                            <Text as="sup">{item.size}</Text>
                                                            <Flex border={""} w={"100%"} align="center" justifyContent={"space-between"}>
                                                                <Flex bg={""} w={"150px"} align={"center"} justify={"space-evenly"}>
                                                                    <Button colorScheme="red" bg={"red"} color={"#fff"} onClick={() => handleDecrease(item)}>-</Button>
                                                                    <Button colorScheme="red" bg={"red"} color={"#fff"}>{item.qty}</Button>
                                                                    <Button colorScheme="red" bg={"red"} color={"#fff"} onClick={() => handleIncrease(item)}>+</Button>
                                                                </Flex>
                                                                <Flex w={"130px"} m="4%" align="center" justifyContent={"space-between"}>
                                                                    <Text fontSize={"18px"} fontWeight={"bold"}>Rs.{item.final_price}</Text>
                                                                    <Text as="s" fontWeight={"100"}>Rs.{item.original_price}</Text>
                                                                </Flex>
                                                            </Flex>
                                                        </Box>
                                                    </Flex>
                                                );
                                            })
                                        ) : (
                                            <Image src={emptyCart} mt={"10%"} />
                                        )}
                                    </DrawerBody>
                                    <Flex display={"flex"} justifyContent={"space-between"} alignItems="center" m={2}>
                                        <Text color={"gray"} fontWeight={"bold"} fontSize={"20px"} textDecoration={"underline"}>SUBTOTAL</Text>
                                        <Flex p={2} display={"flex"} justifyContent={"space-between"} alignItems="center" >
                                            <Text p={2} fontSize={"18px"} fontWeight={800} color="green">Rs {total_final_price}</Text>
                                            <Text p={2} as="s" color={"red"} fontSize={"16px"} fontWeight={600}>Rs {total_original_price}</Text>
                                        </Flex>
                                    </Flex>
                                    <DrawerFooter>
                                        <Button colorScheme='#ff0000' bg="#ff0000" color={"#fff"} onClick={() =>{ 
                                            navigate("/checkout")
                                            setCartDrawerIsOpen(false);
                                            }} isDisabled={cart.length === 0}>{cart.length > 0 ? "Checkout" : "First Choose Products"}</Button>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </Flex>
                        <Menu>
                            {userType.usertype == "user" ? (
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}
                                >
                                    <Avatar
                                        size={'sm'}
                                        src={
                                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                        }
                                    />
                                </MenuButton>
                            ) : (
                                <RiAdminFill m={"0% 5%"} fontSize={"25px"} onClick={() => {
                                    localStorage.setItem("pageValue", "admin")
                                    navigate("/admin/dashboard")
                                    window.location.reload();
                                }} color={"red"} bg={"red"} colorScheme="red"  cursor={"pointer"}/>
                            )}
                            <MenuList>
                                <Link to={"/login"}>
                                    <MenuItem>Authentication</MenuItem>
                                </Link>
                                <MenuDivider />
                                <MenuItem onClick={() =>{
                                     handleLogout()
                                     window.location.reload()
                                     }}>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
                <Flex h={16} mt={"-3%"} mb={"2%"} alignItems={'center'} justifyContent={'space-between'} display={{
                    base: { display: "flex" },
                    md: { display: "flex" },
                    lg: "none"
                }}>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{
                            base: { display: "flex" },
                            sm: { display: "flex" },
                            md: { display: "flex" },
                            lg: "none",
                        }}
                    >
                        <Box p={"2%"} m={"2% 0"}>
                            <SearchBox
                                handleSubmit={handleSubmit}
                                query={query}
                                setQuery={setQuery}
                            />
                        </Box>
                    </HStack>
                </Flex>
            </Box>

            <Drawer
                isOpen={mobileDrawerIsOpen}
                placement='left'
                onClose={() => setMobileDrawerIsOpen(false)}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Box>
                            <Heading textAlign={"left"} color={"#ff0000 "}>
                                <Link to={"/"}>ShoesHub</Link>
                            </Heading>
                        </Box>
                    </DrawerHeader>
                    <hr />
                    <DrawerBody>
                        <Box h={"400px"} w={"95%"} bg={""} mt={"4%"} p={"5% 0%"}>
                            <Box>
                                <UnorderedList listStyleType={"none"} fontSize={"25px"} mb={"3%"} ml={"-0%"} bg={""} p={"4%"} >
                                    <ListItem p={"2% 3%"}  color={"red"} _hover={{bg:"red",color:"white"}} m={"8% 0"}  >
                                        <Link to={"/"} onClick={() => {
                                            setMobileDrawerIsOpen(false)
                        
                                        }
                                        }>
                                            <Text>
                                                Home
                                            </Text>
                                        </Link>
                                    </ListItem>
                                    <ListItem m={"8% 0"} p={"2% 3%"}  color={"red"} _hover={{bg:"red",color:"white"}}>
                                        <Link to={"/products"} onClick={() => {
                                            setMobileDrawerIsOpen(false)
                                        }
                                        }>
                                            <Text>
                                            Products
                                            </Text>
                                        </Link>
                                    </ListItem>
                                    <ListItem  m={"8% 0"} p={"2% 3%"}  color={"red"} _hover={{bg:"red",color:"white"}}> 
                                        <Link onClick={() => {
                                            setMobileDrawerIsOpen(false)
                                            openCartDrawer()
                                        }
                                        }>
                                            <Text>
                                                Cart
                                            </Text>
                                        </Link>
                                    </ListItem>
                                </UnorderedList>
                            </Box>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
