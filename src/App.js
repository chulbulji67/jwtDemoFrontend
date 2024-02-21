import React from "react";
import Navbar from "./components/navbar/SimpleNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import AddBook from "./components/AddBook";
import About from "./components/About";
import Home1 from "./components/Home1";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
    <Navbar />
    {/* <Home1/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout/>}/>
        </Routes>
    </BrowserRouter>
   <Footer/>
  </div>
  );
}

export default App;
