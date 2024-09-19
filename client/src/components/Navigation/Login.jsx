// import { Register } from "../Register";
// import { googleIconBtn } from "../assets/google-btn.png";
// import { googleIconBtn } from "src/assets/google-btn.png";

import { NavLink } from "react-router-dom";
export const Login = () => {
  return (
    <>
      <div className="container w-full h-[90vh]  bg-gradient-to-tr from-white to-blue-200 flex justify-center items-center">
        <div className="login-container w-[50vw] h-[65vh] bg-gray-100 rounded-2xl box shadow-lg shadow-gray-500 flex">
          <div className="login-left w-[50%] h-[100%] ">
            <div className="left-container w-full h-[50vh] border-2  mt-14 ">
              <h1 className="font-bold text-3xl text-center">Sign In</h1>
              <form action="" className="mt-8 text-center">
                <div className="input-field mb-4 bg-green-500">
                  <i>H</i>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-64 h-9 ml-4 p-2 rounded bg-gray-300 border-gray-500"
                  />
                </div>
                <div className="input-field">
                  <i>i</i>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-64 h-9 ml-4 p-2 rounded bg-gray-300 border-gray-500"
                  />
                </div>
              </form>
              <p className="text-xs text-center mt-7">or use your others</p>
              <div className="icons-container flex  justify-center col gap-4 mt-4">
                <div className="icon">
                  {/* <img src={googleIconBtn} alt="" /> */}
                </div>
                <div className="icon">f</div>
                <div className="icon">G</div>
                <div className="icon">in</div>
              </div>

              <div className="forget-password">
                <NavLink to="/forget-password">Forget Your Password?</NavLink>
              </div>
              <button type="submit"> SIGN IN</button>
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
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
