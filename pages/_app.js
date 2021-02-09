import '../styles/globals.css'
import React, { useContext, useReducer, useState, useEffect } from "react";
import { ChakraProvider, Stack } from "@chakra-ui/react"
import Layout from '../components/layout'
import theme from '../theme/index'
import NavBar from '../components/navBar'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <ChakraProvider theme={theme}>
        <Stack direction="row" spacing="0em">
          <NavBar />
          <Component
            {...pageProps}
          />
        </Stack>
      </ChakraProvider>
    </>
  )
}

export default MyApp;