import '../styles/globals.css'
import { ChakraProvider, Stack } from "@chakra-ui/react"
import Layout from '../components/layout'
import theme from '../theme/index'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Stack direction="row" spacing="0em">
          <Layout />
          <Component
            {...pageProps}
          />
        </Stack>
      </ChakraProvider>
    </>
  )
}

export default MyApp;