import logo from "../assets/logo.png";
import registerImg from "../assets/registerImg.png";
import { useState } from "react";

export const Register = () => {
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
    // console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <div className="register-container w-full h-[90vh] bg-gray-600 flex justify-center items-center">
        <div className="inner-container w-[65rem] h-[80vh] rounded-md flex">
          <div className="left-conatiner w-[33vw] h-[80vh] bg-white p-16 rounded-md rounded-r-none ">
            <div className="flex">
              <div className="logo w-10 mr-6">
                <img src={logo} alt="" />
              </div>
              <div className="logo-name">
                <span className="text-blue-500 font-bold font-mono">
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
                    Username
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
                    Email
                  </label>
                  <input
                    type="email"
                    className="register-input"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    required
                  />
                </li>
                <li className="flex flex-col w-80">
                  <label htmlFor="" className="register-label">
                    Phone No.
                  </label>
                  <input
                    type="number"
                    className="register-input"
                    name="phone"
                    value={user.phone}
                    onChange={handleInput}
                    required
                  />
                </li>
                <li className="flex flex-col w-80">
                  <label htmlFor="" className="register-label">
                    Password
                  </label>
                  <input
                    type="text"
                    className="register-input"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    required
                  />
                </li>
                <li className="flex flex-col w-80">
                  <label htmlFor="" className="register-label">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    className="register-input"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    required
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
          <div className="right-conatiner w-[36vw] h-[80vh]">
            <div className="registerImg">
              <img
                src={registerImg}
                alt=""
                className=" h-[80vh] rounded-l-none rounded-md "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
