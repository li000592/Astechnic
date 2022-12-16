import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import Landing from "./pages/landing/Landing";

function App() {
  let footer = document.getElementById('footer')
  console.log(footer?.getBoundingClientRect());
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<>...</>}></Route>
        {/* <Route path="/resources" element={<Landing />}></Route>
        <Route path="/products" element={<Landing />}></Route>
        <Route path="/contacts" element={<Landing />}></Route> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
