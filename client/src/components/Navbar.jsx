import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header>
        <div className="w-full h-15 bg-green-300 flex justify-between items-center p-5 ">
          <div className="logo">
            <NavLink to="/" className="font-black font-sans text-3xl">
              Bus Tracker
            </NavLink>
          </div>
          <nav>
            <ul className="flex justify-between gap-9 ">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
