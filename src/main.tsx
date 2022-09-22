import { BrowserRouter } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Box bg="gray.50">
          <App />
        </Box>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
