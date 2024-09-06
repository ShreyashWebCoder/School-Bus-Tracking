import logo from "../assets/logo.png";
import registerImg from "../assets/registerImg.png";
export const Register = () => {
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
                  School Bus{" "}
                </span>
                Tracker
              </div>
            </div>
            <h1 className="font-bold text-4xl mt-5 ml-3 mb-7 text-indigo-950 ">
              Registration Form
            </h1>
            <form action="">
              <ul type="none">
                <li className="flex flex-col w-80">
                  <label htmlFor="" className="register-label">
                    Username
                  </label>
                  <input type="text" className="register-input" />
                </li>
                <li className="flex flex-col w-80">
                  <label htmlFor="" className="register-label">
                    Email
                  </label>
                  <input type="text" className="register-input" />
                </li>
                <li className="flex flex-col w-80">
                  <label htmlFor="" className="register-label">
                    Phone No.
                  </label>
                  <input type="text" className="register-input" />
                </li>
                <li className="flex flex-col w-80">
                  <label htmlFor="" className="register-label">
                    Password
                  </label>
                  <input type="text" className="register-input" />
                </li>
                <li className="flex flex-col w-80">
                  <label htmlFor="" className="register-label">
                    Confirm Password
                  </label>
                  <input type="text" className="register-input" />
                </li>
                <li>
                  <button className="register-btn">Register</button>
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
