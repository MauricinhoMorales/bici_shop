import '../styles/globals.css'
import React, { useContext, useReducer, useState, useEffect } from "react";
import { ChakraProvider, Stack } from "@chakra-ui/react"
import Layout from '../components/layout'
import theme from '../theme/index'
import NavBar from '../components/navBar'
import { usePubSub, DefaultPubSubContext } from 'usepubsub';

const SeperateContext = React.createContext();

function MyApp({ Component, pageProps }) {

  let { PubSubContext, publish, subscribe, unsubscribe } = usePubSub();
  let pubsub = usePubSub();
  return (
    <>
      <PubSubContext.Provider value={{ publish, subscribe, unsubscribe }}>
        <SeperateContext.Provider
          value={{
            publish: pubsub.publish,
            subscribe: pubsub.subscribe,
            unsubscribe: pubsub.unsubscribe
          }}
        >
          <ChakraProvider theme={theme}>
            <Stack direction="row" spacing="0em">
              <NavBar />
              <Component
                {...pageProps}
              />
            </Stack>
          </ChakraProvider>
        </SeperateContext.Provider>
      </PubSubContext.Provider>
    </>
  )
}

export default MyApp;