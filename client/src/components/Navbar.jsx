import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faAddressCard,
  faEnvelopeOpenText,
  faPassport,
} from "@fortawesome/free-solid-svg-icons";

const navHome = <FontAwesomeIcon icon={faHouseChimney} />;
const navContact = <FontAwesomeIcon icon={faEnvelopeOpenText} />;
const navAbout = <FontAwesomeIcon icon={faAddressCard} />;
const navServices = <FontAwesomeIcon icon={faPassport} />;

export const Navbar = () => {
  return (
    <>
      <header>
        <div className="w-[15vw] h-[98vh] mt-2 bg-white flex flex-col items-center p-5 absolute rounded-2xl box shadow-lg shadow-gray-500 ">
          <div className="logo h-14 w-[15vw] border-b-[1px] border-violet-800 text-center">
            <NavLink to="/" className="font-black text-3xl text-violet-500">
              Bus Tracker
            </NavLink>
          </div>
          <nav>
            <ul className="flex justify-between gap-9 flex-col mt-[2rem]">
              <li>
                <NavLink
                  to="/home"
                  className="nav-bar"
                >
                  {navHome}Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-bar">
                {navContact}Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-bar">
                {navAbout}
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="nav-bar">
                {navServices}
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className="nav-bar">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login" className="nav-bar">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
