// 'use client'
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   Button,
//   Grid,
//   GridItem,
//   Flex,
//   Select
// } from '@chakra-ui/react'

// import {
//   Box,
//   Center,
//   useColorModeValue,
//   Heading,
//   Text,
//   Stack,
//   Image
// } from '@chakra-ui/react'
// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'

// export default function Card(props) {
//   // console.log("card =>",props.data);
//   const [selectImage, setSelectImage] = useState(props.data.images[0])
//   const [Img, setImg] = useState(props.data.images[0])
//   const { isOpen, onOpen, onClose } = useDisclosure()
 
//   const showSecondImage = () => {
//     setImg(props.data.images[1])
// }
// const showFirstImage = () => {
//     setImg(props.data.images[0])
// }
//   return (
//     <Center py={12}>
//       <Box
//         onMouseEnter={() => showSecondImage()} onMouseLeave={() => showFirstImage()}
//         role={'group'}
//         p={6}
//         maxW={'330px'}
//         w={'full'}
//         bg={useColorModeValue('white', 'gray.300')}
//         boxShadow={'2xl'}
//         rounded={'lg'}
//         pos={'relative'}
//         zIndex={1}>

//         <Box
//           onClick={onOpen}
//           rounded={'lg'}
//           mt={-12}
//           pos={'relative'}
//           height={'230px'}
//           _after={{
//             transition: 'all .3s ease',
//             content: '""',
//             w: 'full',
//             h: 'full',
//             pos: 'absolute',
//             top: 5,
//             left: 0,
//             backgroundImage: `url(${props.data.images[0]})`,
//             filter: 'blur(15px)',
//             zIndex: -1,
//           }}
//           _groupHover={{
//             _after: {
//               filter: 'blur(20px)',
//             },
//           }}>
//           <Image
//             rounded={'lg'}
//             height={230}
//             width={282}
//             objectFit={'cover'}
//             src={Img}
//             alt="#"
//             cursor={"pointer"}
//           />
//         </Box>
//         <Modal isOpen={isOpen} onClose={onClose} >
//           <ModalOverlay />
//           <ModalContent bg={"#ffffff"} >
//             <ModalHeader color={"#171923"}>Product Details</ModalHeader>
//             <ModalCloseButton color={"#171923"} />
//             <ModalBody maxHeight="calc(100vh - 200px)" overflowY="auto">
//               <Box w={"100%"} >
//                 <Image src={selectImage} w={"100%"} h={"200px"} mb={"3%"} borderRadius={"5%"} boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px;"} />
//                 <Grid w={"100%"} templateColumns='repeat(5, 1fr)' gap={3} >
//                   {
//                     props.data.images.map((ele, i) =>
//                       <GridItem w='100%' h={"70px"} _hover={{ cursor: "pointer",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"10px" }} onMouseOver={() => setSelectImage(ele)}>
//                         <Image src={ele} key={i} w={"100%"} alt='Image Error' backgroundColor={"transparent"} borderRadius={"10px"}/>
//                       </GridItem>
//                     )
//                   }
//                 </Grid>
//               </Box>
//               <Box>
//                 <ModalHeader color={"#171923"}>Product Info</ModalHeader>
//                 <Box >
//                   <Flex bg={" "} alignItems={"center"} justifyContent={"space-between"}
//                     mb={"1%"}
//                     p={"6px 3px"}
//                   >
//                     <Text color={"#979ba6"}>Color</Text>
//                     <Text color={"#171923 "}>{props.data.color}</Text>
//                   </Flex>
//                   <Flex color={"#979ba6"} alignItems={"center"} justifyContent={"space-between"}
//                     mb={"1%"}>
//                     <Text>Final Price</Text>
//                     <Text color={"#171923 "}>{props.data.final_price
//                     }</Text>
//                   </Flex>
//                   <Flex color={"#979ba6"}  alignItems={"center"} justifyContent={"space-between"}
//                     mb={"1%"}>
//                     <Text color={""}>Gender</Text>
//                     <Text color={"#171923 "}>{props.data.gender}</Text>
//                   </Flex>
//                   <Flex color={"#979ba6"} alignItems={"center"} justifyContent={"space-between"}
//                     mb={"1%"}>
//                     <Text>Name</Text>
//                     <Text color={"#171923 "}>{props.data.name}</Text>
//                   </Flex>
//                   <Flex color={"#979ba6"} alignItems={"center"} justifyContent={"space-between"}
//                     mb={"1%"}>
//                     <Text>Original Price</Text>
//                     <Text color={"#171923 "}> {props.data.original_price}</Text>
//                   </Flex>
//                   <Flex color={"#979ba6"} alignItems={"center"} justifyContent={"space-between"}
//                     mb={"1%"}>
//                     <Text>Reviews</Text>
//                     <Text color={"#171923 "}>{props.data.reviews}</Text>
//                   </Flex>
//                   <Flex color={"#979ba6"} alignItems={"center"} justifyContent={"space-between"}
//                     mb={"1%"}>
//                     <Text>Rating</Text>
//                     <Text color={"#171923 "}>{props.data.rating}</Text>
//                   </Flex>
//                   <Flex color={"#979ba6"} alignItems={"center"} justifyContent={"space-between"}
//                     mb={"1%"}>
//                     <Text >Size</Text>
//                     <Text color={"#171923 "}>
//                       <Select>
//                         {props.data.sizes.map((ele) =>
//                           <option>{ele}</option>
//                         )}
//                       </Select>
//                     </Text>
//                   </Flex>                
//                 </Box>

//               </Box>
//             </ModalBody>

//             <ModalFooter>
//               <Link to={`/details/${props.data._id}`}>
//               <Button colorScheme='#ff0000' bg={"#ff0000"} color={"#fff"} mr={3} >
//                 More Details
//               </Button>
//               </Link>
              
           
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//         <Stack pt={10} align={'center'}>
//           <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
//             {props.data.gender}
//           </Text>
//           <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
//             {props.data.name}
//           </Heading>
//           <Stack direction={'row'} align={'center'}>
//             <Text fontWeight={800} fontSize={'xl'}>
//               Rs. {props.data.final_price}
//             </Text>
//             <Text textDecoration={'line-through'} color={'gray.600'}>
//               Rs. {props.data.original_price}
//             </Text>
//           </Stack>
//         </Stack>
//       </Box>
//     </Center >
//   )
// }




'use client'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Grid,
    GridItem,
    Flex,
    Select,
    useToast
} from '@chakra-ui/react'

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct, getSingleProducts } from '../Redux/productReducer/actions'
import ProductsUpdate from '../Admin/components/ProductUpdate/ProductUpdate'

export default function Card(props) {
    // console.log("card =>", props);
    const [selectImage, setSelectImage] = useState(props.data.images[0])
    const [Img, setImg] = useState(props.data.images[0])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()

    const [editModalIsOpen, setEditModalIsOpen] = useState(false); 

    const openEditModal = () => {
        setEditModalIsOpen(true); 
    };

    const closeEditModal = () => {
        setEditModalIsOpen(false); 
    };
    const toast = useToast();
    const showSecondImage = () => {
        setImg(props.data.images[1])
    }
    const showFirstImage = () => {
        setImg(props.data.images[0])
    }

    const deleteItem = (id) => {
        dispatch(deleteProduct(id))
            .then((res) => {
                console.log("res card", res);    
                toast({
                    title: 'Product Deleted.',
                    description: `Deleted the Product whose id is ${id}.`,
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
                onClose(); // Close the modal
                window.location.reload()
            })
            .catch((err) => {
                toast({
                    title: 'Product Not Deleted',
                    description: `There was an error while deleting the product whose id is ${id}. Please try again.`,
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                });
            });
    }
    const getSingleItem = (id) => {
        console.log("id",id);
        dispatch(getSingleProducts(id))
            .then((res) => {
                openEditModal() 
                console.log("res getSingleItem", res);
            })
            .catch((err) => {
                toast({
                    title: 'Product Not Found',
                    description: `There was an error while Finding the product whose id is ${id}. Please try again.`,
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                });
            });
    }
    return (
        <Center py={12}>
            <Box
                key={props.data._id}
                onMouseEnter={() => showSecondImage()} onMouseLeave={() => showFirstImage()}
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.300')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>

                <Box
                    onClick={onOpen}
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${props.data.images[0]})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={Img}
                        alt="#"
                        cursor={"pointer"}
                    />
                </Box>
                <Modal isOpen={isOpen} onClose={onClose} >
                    <ModalOverlay />
                    <ModalContent bg={"#ffffff"} >
                        <ModalHeader color={"#171923"}>Product Details</ModalHeader>
                        <ModalCloseButton color={"#171923"} />
                        <ModalBody maxHeight="calc(100vh - 200px)" overflowY="auto">
                            <Box w={"100%"} >
                                <Image src={selectImage} w={"100%"} h={"200px"} mb={"3%"} borderRadius={"5%"} boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px;"} />
                                <Grid w={"100%"} templateColumns='repeat(5, 1fr)' gap={3} >
                                    {
                                        props.data.images.map((ele, i) =>
                                            <GridItem key={i} w='100%' h={"70px"} _hover={{ cursor: "pointer", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "10px" }} onMouseOver={() => setSelectImage(ele)}>
                                                <Image src={ele}  w={"100%"} alt='Image Error' backgroundColor={"transparent"} borderRadius={"10px"} />
                                            </GridItem>
                                        )
                                    }
                                </Grid>
                            </Box>
                            <Box>
                                <ModalHeader color={"#171923"}>Product Info</ModalHeader>
                                <Box >
                                    <Flex bg={" "} alignItems={"center"} justifyContent={"space-between"}
                                        mb={"1%"}
                                        p={"6px 3px"}
                                    >
                                        <Text color={"#979ba6"}>Color</Text>
                                        <Text color={"#171923 "}>{props.data.color}</Text>
                                    </Flex>
                                    <Flex color={"#979ba6"} alignItems={"center"} justifyContent={"space-between"}
                                        mb={"1%"}>
                                        <Text>Final Price</Text>
                                        <Text color={"#171923 "}>{props.data.final_price
                                        }</Text>
                                    </Flex>
                                    <Flex color={"#979ba6"} alignItems={"center"} justifyContent={"space-between"}
                                        mb={"1%"}>
                                        <Text color={""}>Gender</Text>
                                        <Text color={"#171923 "}>{props.data.gender}</Text>
                                    </Flex>
                                    <Flex color={"#979ba6"} alignItems={"center"} justifyContent={"space-between"}
                                        mb={"1%"}>
                                        <Text>Name</Text>
                                        <Text color={"#171923 "}>{props.data.name}</Text>
                                    </Flex>
                                    <Flex color={"#979ba6"} alignItems={"center"} justifyContent={"space-between"}
                                        mb={"1%"}>
                                        <Text>Original Price</Text>
                                        <Text color={"#171923 "}> {props.data.original_price}</Text>
                                    </Flex>
                                    <Flex color={"#979ba6"} alignItems={"center"} justifyContent={"space-between"}
                                        mb={"1%"}>
                                        <Text>Reviews</Text>
                                        <Text color={"#171923 "}>{props.data.reviews}</Text>
                                    </Flex>
                                    <Flex color={"#979ba6"} alignItems={"center"} justifyContent={"space-between"}
                                        mb={"1%"}>
                                        <Text>Rating</Text>
                                        <Text color={"#171923 "}>{props.data.rating}</Text>
                                    </Flex>
                                    <Flex color={"#979ba6"} alignItems={"center"} justifyContent={"space-between"}
                                        mb={"1%"}>
                                        <Text >Size</Text>
                                        <Text color={"#171923 "}>
                                            <Select>
                                                {props.data.sizes.map((ele) =>
                                                    <option>{ele}</option>
                                                )}
                                            </Select>
                                        </Text>
                                    </Flex>
                                </Box>

                            </Box>
                        </ModalBody>

                        <ModalFooter>
                            {
                                props.type !== "admin" ? <Link to={`/details/${props.data._id}`}>
                                    <Button colorScheme='#ff0000' bg={"#ff0000"} color={"#fff"} mr={3} >
                                        More Details
                                    </Button>
                                </Link> : <Flex>
                                    <Button colorScheme='#ff0000' bg={"#ff0000"} color={"#fff"} mr={3} onClick={() => deleteItem(props.data._id)}>
                                        Delete
                                    </Button>
                                </Flex>
                            }
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        {props.data.gender}
                    </Text>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {props.data.name}
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={800} fontSize={'xl'}>
                            Rs. {props.data.final_price}
                        </Text>
                        <Text textDecoration={'line-through'} color={'gray.600'}>
                            Rs. {props.data.original_price}
                        </Text>
                    </Stack>
                    {
                        props.type === "admin" ? (
                            <>
                                <Button colorScheme='#ff0000' bg={"#ff0000"} color={"#fff"} mr={3} onClick={() => {
                                    getSingleItem(props.data._id)
                                 
                                    }}>
                                    Edit
                                </Button>
                                <Modal isOpen={editModalIsOpen} onClose={closeEditModal}>
                                    <ModalOverlay />
                                    <ModalContent bg={"#ffffff"}>
                                        <ModalHeader color={"#171923"}>Edit Product</ModalHeader>
                                        <ModalCloseButton color={"#171923"} />
                                        <ModalBody>
                                           <ProductsUpdate onClose={closeEditModal}/>
                                        </ModalBody>
                                        <ModalFooter>
                                            {/* Add buttons and actions for saving or canceling the edit */}
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            </>
                        ) : (
                            <></>
                        )
                    }

                </Stack>
            </Box>
        </Center >
    )
}

