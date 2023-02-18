'use client'
import {ChakraProvider} from '@chakra-ui/react'
import React from 'react'
import Header from './Header'


import Pricing from './Pricing'
import Bottom from './Bottom'
export const config={
  unstable_runtimeJS:false
}
export default function page() {
  return (
    
      <ChakraProvider>
          <Header/>
          <Pricing/>
          <Bottom/>
      </ChakraProvider>
    
  );
}
