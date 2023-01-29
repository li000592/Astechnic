import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Landing from "./pages/landing/Landing";
import Resources from "./pages/resources/Resources";
import Solution from "./pages/solutions/Solutions";
import { useLocation } from "react-router-dom";
import LeaveMessage from "./components/LeaveMessage";
import MessageDialog from "./components/MessageDialog";

function App() {
  const { pathname } = useLocation();
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false);
  // let footer = document.getElementById("footer");
  // console.log(footer?.getBoundingClientRect());
  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);
  console.log(pathname);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/solutions" element={<Solution />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="*" element={<>404 Page</>}></Route>
      </Routes>
      {isMessageDialogOpen && <MessageDialog isOpen={isMessageDialogOpen} setIsOpen={setIsMessageDialogOpen} />}
      {!pathname.includes("contact") && <LeaveMessage openDialog={() => setIsMessageDialogOpen(true)} />}
      <Footer />
    </>
  );
}

export default App;
