import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box as='main'>
      <Navbar />
      <Hero />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
