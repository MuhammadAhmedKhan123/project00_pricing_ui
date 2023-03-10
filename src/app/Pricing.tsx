'use client';
import React from 'react';
import icon1 from './icons/icon1';
import {ChakraProvider ,Box,Heading,Text,Flex,Button, HStack,Icon,SimpleGrid} from "@chakra-ui/react"
function pricing() {
  return( 
     <ChakraProvider>
      <SimpleGrid >
        
      
      
       <Box w={{base:"400px" ,sm:'850px'}} ml={{sm:'110px'}} m={{base:"auto"}} mt={{base:"-140",sm:'-170'}}>
        <Flex>
        <Box  w='378px' bg=' #cbb8ee' roundedLeft={{sm:"2xl"}} roundedTop={{base:"2xl"}} h='336px' textAlign='center' boxShadow=' 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' >
          <Text  pt='16' textColor='#171923' fontSize='24px' fontWeight='bold'>Premium PRO</Text>
          <Heading textColor='#171923' fontSize='60px' pt='2'>$329</Heading>
          <Text textColor='#171923' fontSize='18px' pt='1' pb='6'>Billed just once</Text>
          <Button w='240px' textColor='white' fontWeight='bold' bg='#6B46C1' >
              Get Start
          </Button>
        </Box>
        </Flex>
       </Box>


       <Box w={{base:"400px",sm:'950px'}} ml={{sm:'475'}} m={{base:"auto"}}  mt={{sm:'-336'}}>
        <Flex>
        <Box  w={{base:"378px",sm:'500px'}} bg='white'  roundedRight={{sm:'2xl'}} roundedBottomRight="2xl"  roundedBottomLeft={{base:"2xl",sm:"0"}}  h='336px' shadow='2xl'  boxShadow=' 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' >
            <Text pt='50px' pl={{base:"30px",sm:'30px'}}> Access these features when you get this pricing package for your business.</Text>
            <HStack  pt='28px' pl={{base:"30px",sm:'30px'}}>
            <Icon as={icon1} />
            <Text>International calling and messaging API</Text>
            </HStack>
            <HStack  pt='18px'pl={{base:"30px",sm:'30px'}}>
            <Icon as={icon1} />
            <Text>Additional phone numbers</Text>
            </HStack>
            <HStack  pt='18px'pl={{base:"30px",sm:'30px'}} >
            <Icon as={icon1} />
            <Text>Automated messages via Zapier</Text>
            </HStack>
            <HStack  pt='18px'pl={{base:"30px",sm:'30px'}}>
            <Icon as={icon1} />
            <Text>24/7 support and consulting</Text>
            </HStack>
        </Box>
        </Flex>
       </Box>

       </SimpleGrid>
     </ChakraProvider>
  );
}
export default pricing;

