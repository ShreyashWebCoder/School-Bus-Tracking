import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
//  Components
import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Services } from "./components/Services.jsx";
import { Register } from "./components/Register.jsx";
import { Login } from "./components/Login.jsx";
import { Navbar } from "./components/Navbar.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
