import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/authReducer/actions';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
  useToast,
} from '@chakra-ui/react';
import * as yup from 'yup';

const schema = yup.object({
  usertype: yup.string().required(),
  email: yup
    .string()
    .required()
    .email('Invalid email format')
    .matches(/^\S+@\S+$/, 'Email format is not valid'),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password must be at least 8 characters long and include characters, digits, and special characters.'
    ),
}).required();

const Login = () => {
  const errorMessage = useSelector((store) => store.authReducer.isAuthError);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.data || '/';
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const toast = useToast();

  const onSubmit = (data) => {
    console.log("data", data);
    dispatch(login({
      usertype: data.usertype,
      useremail: data.email,
      userpassword: data.password
    }))
      .then((res) => {
        navigate(comingFrom, { replace: true })
        console.log("Login success");
      })
      .catch((err) => {
        console.log("Login Failed", err);
        toast({
          title: 'Login Failed',
          description: 'There was an error logging in. Please try again.',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      });
  };

  return (
    <Box p={10} maxWidth={['100%', '80%', '100%']} mx='auto' h='400px' bg='transparent'>
      <Heading color={"#fff"}>Sign In</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mr={"5%"}>
          <FormLabel fontWeight={'normal'} color={"#fff"}>User Type</FormLabel>
          <Select
            {...register('usertype')}
            isInvalid={!!errors.usertype}
            focusBorderColor='lime'
            color={"gray.400"} 

          >
            <option value="admin">ADMIN</option>
            <option value="user">USER</option>
          </Select>
          <Text color='#ff0000' fontSize='sm'>
            {errors.usertype?.message}
          </Text>
        </FormControl>
        <FormControl>
          <FormLabel color={"#fff"}>Email:</FormLabel>
          <Input
            {...register('email')}
            isInvalid={!!errors.email}
            focusBorderColor='lime'
            color={"#e1e1e1"}
            placeholder='Enter Email'
          />
          <Text color='#ff0000' fontSize='sm'>
            {errors.email?.message}
          </Text>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel color={"#fff"}>Password:</FormLabel>
           <InputGroup size="md">
            <Input
              // type='password'
              type={show ? 'text' : 'password'}
              {...register('password')}
              isInvalid={!!errors.password}
              focusBorderColor='lime'
              color={"#e1e1e1"}
              placeholder='Enter Password'
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
              </InputGroup>
          <Text color='#ff0000' fontSize='sm'>
            {errors.password?.message}
          </Text>
        </FormControl>

        <Button mt={4} colorScheme='#ff0000' bg='#ff0000' type='submit' color='#fff'>
          Sign In
        </Button>

        {errorMessage && <Text mt={4} color='red.500'>{errorMessage.message}</Text>}
      </form>
    </Box>
  )
}

export default Login;
