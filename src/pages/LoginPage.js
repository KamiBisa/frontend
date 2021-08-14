import {
  Box,
  Image,
  Img,
  Text,
  Stack,
  UnorderedList,
  Link,
  Input,
  FormControl,
  FormLabel,
  Button,
} from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import React, { useState } from 'react';

const LoginPage = () => {
  const [person, setPerson] = useState({ email: '', password: '' });
  const [people, setPeople] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }

  return (
    <>
      <Box
        bgColor="#f6fbff"
        h="calc(100vh - 65px)"
        display="flex"
        w="100%"
        // w={{ base: "93%", md: "50%" }}
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
        <Box
          w={{ base: '93%', md: '50%', xl: '40%' }}
          h="260px"
          boxShadow=" 0 1px 10px rgba(0,0,0,.1)"
          borderRadius="20px"
        >
          <Box
            w="100%"
            // w={{ base: "93%", md: "50%" }}
            h="200px"
            bgColor="white"
            d="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            fontSize="20px"
            paddingTop="10px"
            borderRadius="20px"
          >
            <Box h="35px">
              <Heading
                as="h3"
                fontFamily="bloggersansreg"
                fontSize="25px"
                fontWeight="bold"
              >
                Sign In
              </Heading>
            </Box>
            <Box
              w="80%"
              d="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              h="160px"
              bgcolor="black"
            >
              {/* <Box> */}
              <FormControl id="email" _hover={{ border: 'none' }}>
                <FormLabel htmlFor="email"></FormLabel>
                <Box marginBottom="10px">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={person.email}
                    onChange={handleChange}
                    placeholder="email/phone number"
                    autoComplete="off"
                  ></Input>
                </Box>
                <Box>
                  <Input
                    type="password"
                    name="password"
                    value={person.password}
                    onChange={handleChange}
                    placeholder="Password"
                    autoComplete="off"
                  ></Input>
                </Box>
              </FormControl>
              <Box>
                <Button w="100%" borderRadius="100px">
                  Masuk
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            d="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="black"
            w="100%"
            h="60px"
          >
            <Text>
              Not have an Account ?{' '}
              <Link src="#" color="#3A99D8" _hover={{ color: 'blue' }}>
                Sign Up
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
