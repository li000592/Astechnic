import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Landing from "./pages/landing/Landing";
import Resources from "./pages/resources/Resources";
import Solution from "./pages/solutions/Solutions";

function App() {
  // let footer = document.getElementById("footer");
  // console.log(footer?.getBoundingClientRect());
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/solutions" element={<Solution />}></Route>
        <Route path="/contacts" element={<Landing />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
