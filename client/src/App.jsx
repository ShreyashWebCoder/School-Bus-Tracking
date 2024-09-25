import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

//  Components
import { Home } from "./components/Navigation/Home.jsx";
import { About } from "./components/Navigation/About.jsx";
import { Contact } from "./components/Navigation/Contact.jsx";
import { Services } from "./components/Navigation/Services.jsx";
import { Register } from "./components/Register.jsx";
import { Login } from "./components/Navigation/Login.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Error } from "./components/Error.jsx";

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
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

     
    </>
  );
};

export default App;
