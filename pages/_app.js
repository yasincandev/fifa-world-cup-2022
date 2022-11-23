import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colorModeConfig } from "../lib/color-mode-utils";
import Layout from "../components/Layout";

const theme = extendTheme({
  config: colorModeConfig,
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
