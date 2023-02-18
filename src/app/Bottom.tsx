'use client';
import icon2 from './icons/icon2';
import icon3 from './icons/icon3';
import icon4 from './icons/icon4';
import {ChakraProvider ,Box,Heading,Text,Flex,Button,HStack,Stack,Icon} from "@chakra-ui/react"
import React from 'react';
function Bottom() {
  return (
      
    <ChakraProvider>
        <Box mt={{base:"50px",md:'46PX'}} mr={{base:"auto"}} ml={{base:"100px",md:'160px'}}  mb={{base:"50px",md:"0px"}}>
           <Stack direction={{base:"column",md:"row"}}>
            <HStack mr='20px' pt={{base:"20px",md:"0px"}} >
                <Box pr={{base:'30px',md:"10px"}}>
                <Icon as={icon2}  />
                </Box>
                <Text w={{base:'250px',md:"180px"}} >30 days money back Guarantee</Text>
            </HStack>
            <HStack mr='20px'  pt={{base:"20px",md:"0px"}}>
                <Box  pr={{base:'30px',md:"10px"}}>
                <Icon as={icon3}/>
                </Box>
                <Text w={{base:'250px',md:"180px"}}>No setup fees 100% hassle-free</Text>
            </HStack>
            <HStack mr='20px' pt={{base:"20px",md:"0px"}} >
                <Box  pr={{base:'30px',md:"10px"}}>
                <Icon as={icon4}/>
                </Box>
                <Text w={{base:'250px',md:"180px"}}>No monthly subscription Pay once and for all</Text>
            </HStack>
           </Stack> 
        </Box>
     
    </ChakraProvider>
    
    
  );
}

export default Bottom;
