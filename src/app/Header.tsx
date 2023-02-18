
'use client';
import {ChakraProvider ,Box,Heading,Text} from "@chakra-ui/react"
import React from 'react';

function Header() {
  return (
    <ChakraProvider> 
    <Box textAlign={{md:"center"}} pl={{base:'20px'}} bg="#6B46C1" pt={{base:"50px", md:"90px"}}  pb='220px' textColor='white'>
        <Heading>Simple pricing for your business</Heading>
        <Text pt='16px'>Plans that are carefully crafted ti suit your business</Text>
    </Box>
    </ChakraProvider>
  );
}

export default Header;