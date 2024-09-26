import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const passwordIcon = <FontAwesomeIcon icon={faLock} />;

export const Login = () => {
  let navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleloginInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    // console.log(loginUser);

    const loginResponse = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser),
    });

    console.log(loginResponse);

    if (loginResponse.ok) {
      setLoginUser({
        email: "",
        password: "",
      });
      navigate("/home");
    }
    const res_login = await loginResponse.json();
    console.log(res_login);
  };

  return (
    <>
      <div className="container w-full h-[100vh] bg-[#f2f2f2] flex justify-center items-center">
        <div className="login-container w-[50vw] h-[65vh] bg-gray-100 rounded-2xl shadow-lg shadow-gray-500 flex ml-[15rem]">
          <div className="login-left w-[50%] h-[100%] ">
            <div className="left-container w-full h-[50vh]  mt-14 ">
              <h1 className="font-bold text-3xl text-center text-violet-900">
                Sign In
              </h1>
              <form
                action=""
                onSubmit={loginSubmit}
                className="mt-8 text-center"
              >
                <div className="input-field mb-4 ">
                  {emailIcon}
                  <input
                    type="email"
                    name="email"
                    value={loginUser.email}
                    onChange={handleloginInput}
                    placeholder="Email"
                    className="border-2 
                    w-[15vw]
                    border-b-slate-500
                    bg-gray-100 
                    border-t-gray-100
                    border-l-gray-100
                    border-r-gray-100 
                    p-1 mb-6"
                  />
                </div>
                <div className="input-field">
                  {passwordIcon}
                  <input
                    type="password"
                    name="password"
                    value={loginUser.password}
                    onChange={handleloginInput}
                    placeholder="Password"
                    autoComplete=""
                    className="border-2 
                    w-[15vw]
                    border-b-slate-500
                    bg-gray-100 
                    border-t-gray-100
                    border-l-gray-100
                    border-r-gray-100 
                    p-1 mb-6 "
                  />
                </div>

                <p className="text-xs text-center mt-7 font-semibold">
                  or use your others
                </p>
                <div className="icons-container flex  justify-center col gap-4 mt-4">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                    </svg>
                  </div>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                    </svg>
                  </div>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </div>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </div>
                </div>

                <div className="forget-password text-sm text-blue-500 text-center mt-5 font-semibold">
                  <NavLink to="/forget-password">Forget Your Password?</NavLink>
                </div>
                <button
                  type="submit"
                  className=" w-36  mt-12   p-2 rounded-lg border box-border text-white border-violet-600 bg-violet-800 text-sm font-semibold"
                >
                  SIGN IN
                </button>
              </form>
            </div>
          </div>

          <div className="login-right w-[50%] h-[100%] bg-gradient-to-tr from-violet-700 to-violet-950 rounded-tr-2xl rounded-br-2xl rounded-tl-[8rem] rounded-bl-[8rem] flex justify-center items-center">
            <div className="right-container p-8 box-border">
              <h1 className="text-center font-bold font-sans text-3xl mb-4 text-white">
                Hello, Friend!
              </h1>
              <p className="text-center text-white">
                Register with your personal details to use all of site features
              </p>
              <button className=" w-32 ml-[6rem] mt-12  p-2 rounded-lg border box-border text-white text-sm font-semibold">
                <NavLink to="/register">SIGN UP</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
