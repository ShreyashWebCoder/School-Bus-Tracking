import logo from "../assets/logo.png";
import registerImg from "../assets/registerImg.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMobileScreenButton,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const regUsername = <FontAwesomeIcon icon={faUser} />;
const regEmail = <FontAwesomeIcon icon={faEnvelope} />;
const regPhone = <FontAwesomeIcon icon={faMobileScreenButton} />;
const regPassword = <FontAwesomeIcon icon={faLock} />;

export const Register = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // handling Input value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);

    try {
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);

      if (response.ok) {
        setUser({
          name: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      }
      // debugger
    } catch (error) {
      console.log("Error : ", error.message);
    }
  };
  return (
    <>
      <div className="register-container w-full h-[100vh] bg-gradient-to-tr from-gray-200 to-gray-500  flex justify-center items-center">
        <div className="inner-container w-[60vw] h-[80vh] ml-[14rem] rounded-md flex overflow-hidden">
          <div className="left-conatiner w-[28vw] h-[80vh] bg-white p-14 rounded-md rounded-r-none ">
            <div className="flex">
              <div className="logo w-10 mr-6">
                <img src={logo} alt="" />
              </div>
              <div className="logo-name">
                <span className="text-blue-500 font-bold font-mono ">
                  School Bus
                </span>
                Tracker
              </div>
            </div>
            <h1 className="font-bold text-4xl mt-5 ml-3 mb-7 text-indigo-950 ">
              Registration Form
            </h1>
            <form action="" onSubmit={handleSubmit}>
              <ul type="none">
                <li className="flex flex-col w-80">
                  <label htmlFor="" className="register-label">
                    {regUsername}
                    <span className="ml-3">Username</span>
                  </label>
                  <input
                    type="text"
                    className="register-input"
                    name="name"
                    value={user.name}
                    onChange={handleInput}
                  />
                </li>
                <li className="flex flex-col w-80">
                  <label htmlFor="" className="register-label">
                    {regEmail}
                    <span className="ml-3">Email</span>
                  </label>
                  <input
                    type="email"
                    className="register-input"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    required
                    autoComplete="email"
                  />
                </li>
                <li className="flex flex-col w-80">
                  <label htmlFor="" className="register-label">
                    {regPhone}
                    <span className="ml-3">Phone No.</span>
                  </label>
                  <input
                    type="number"
                    className="register-input"
                    name="phone"
                    value={user.phone}
                    onChange={handleInput}
                    required
                    // autoComplete=""
                  />
                </li>
                <li className="flex flex-col w-80">
                  <label htmlFor="" className="register-label">
                    {regPassword}
                    <span className="ml-3">Password</span>
                  </label>
                  <input
                    type="password"
                    className="register-input"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    required
                    autoComplete="new-password"
                  />
                </li>
                <li className="flex flex-col w-80">
                  <label htmlFor="" className="register-label">
                    {regPassword}
                    <span className="ml-3">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    className="register-input"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    required
                    autoComplete="new-password"
                  />
                </li>
                <li>
                  <button type="submit" className="register-btn">
                    Register Now
                  </button>
                </li>
              </ul>
            </form>
          </div>
          <div className="right-conatiner w-[36vw] h-[80vh] bg-white relative rounded-r-lg">
            <div className="blue-box bg-blue-400 h-[28vh] w-[30vh] rounded-full absolute top-[-12%] right-[-10%]"></div>
            <div className="blue-box bg-blue-400 h-[27vh] w-[28vh] rounded-full absolute bottom-[-14%] left-[-10%]"></div>
            <div className="blue-box bg-blue-400 h-[14vh] w-[14vh] rounded-full absolute top-[1%] left-[10%]"></div>
            <div className="registerImg ">
              <img
                src={registerImg}
                alt="Register Image"
                className="mt-16 rounded-l-none rounded-md "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
