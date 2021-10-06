/**
 *  @author DJIMNAIBEYE Sidoine
 */

import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Home from "./home"
export default function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  )
}