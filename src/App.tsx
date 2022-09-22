import { Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "./helpers/ShoppingCartContext";
import { Container } from "@chakra-ui/react";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container maxW="container.xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}
