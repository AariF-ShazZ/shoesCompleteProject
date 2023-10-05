import React, { useEffect, useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Checkbox,
  CheckboxGroup,
  VStack,
  Heading,
  Flex
} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { RadioGroup } from '@mui/material'
const FilterCom = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.getAll("category")
  const [category, setCategory] = useState(initialCategory || [])
  const initialSort = searchParams.getAll("sort")
  // console.log("initialSort =>", initialSort[0]);
  const [sort, setSort] = useState(initialSort[0] || "")

  const handleFilterCheckbox = (e) => {
    // console.log(e.target.value);
    const newCategories = [...category]
    if (newCategories.includes(e.target.value)) {
      newCategories.splice(newCategories.indexOf(e.target.value), 1)
    } else {
      newCategories.push(e.target.value)
    }
    setCategory(newCategories)
  }

  const handleSort = (e) => {
    setSort(e.target.value)
  }
  // console.log("category",category);
  useEffect(() => {
    let params = {}
    params.category = category
    sort && (params.sort=sort)
    setSearchParams(params)
  }, [category, setSearchParams,sort])
  
  console.log("sort",sort);
  return (
    <>
      <Box w={"100%"} h={"400px"} bg={"gray.200"} boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px;"} p={"10% 8%"}>
        <Box mb={"10%"}>
          <Heading as='legend' fontSize={"25px"} color={"gray"} mb={"6%"}>
            Types
          </Heading>
          <CheckboxGroup defaultValue='Itachi' >
            <VStack spacing='10px' textAlign={"start"} color={"gray.500"} >
              <Flex w={"150px"}  align={"center"}  justify={"start"}>
                <Flex w={"60px"} bg={""} justify={"space-between"}>
                <input
                  type="checkbox"
                  value={"MEN"}
                  checked={category.includes("MEN")}
                  onChange={handleFilterCheckbox} />
                <label htmlFor="">MEN</label>
                </Flex>
              </Flex>
              <Flex w={"150px"} bg={""} align={"center"}  justify={"start"}>
               <Flex w={"88px"} bg={""} justify={"space-between"}>
               <input
                  type="checkbox"
                  value={"WOMEN"}
                  checked={category.includes("WOMEN")}
                  onChange={handleFilterCheckbox} />
                <label htmlFor="">WOMEN</label>
               </Flex>
              </Flex>
              <Flex w={"150px"} bg={""} align={"center"}  justify={"start"}>
              <Flex w={"60px"} bg={""} justify={"space-between"}>
              <input
                  type="checkbox"
                  value={"KIDS"}
                  checked={category.includes("KIDS")}
                  onChange={handleFilterCheckbox} />
                <label htmlFor="">KIDS</label>
              </Flex>
               
              </Flex>
            </VStack>
          </CheckboxGroup>
        </Box>
        <Box textAlign={"left"}>
          <Heading as='legend' fontSize={"25px"} color={"gray"}>
            Sort By Price
          </Heading>
          <RadioGroup defaultValue='Itachi'>
            <VStack spacing='28px' color={"gray.500"}>
              <Flex onChange={handleSort} direction={"column"} mt={"5%"} textAlign={"left"}>
                <Flex w={"150px"} bg={""} align={"center"}  justify={"space-evenly"}>
                <input
                  type="radio"
                  value={"asc"}
                  name='sortBy'
                  defaultChecked={sort==="asc"}
                   />
                <label htmlFor="">Low To High</label>
                </Flex>
               <Flex w={"150px"} bg={""} align={"center"}  justify={"space-evenly"}>
               <input
                  type="radio"
                  value={"desc"}
                  name='sortBy'
                  defaultChecked={sort==="desc"}
                  />
                <label htmlFor="">High To Low</label>
               </Flex>
              </Flex>
            </VStack>
          </RadioGroup>
        </Box>
      </Box>
    </>
  )
}

export default FilterCom