import { NavLink } from "react-router-dom";
import Spline from "@splinetool/react-spline";
export const Error = () => {
  return (
    <>
      <main className="w-[70vw] h-[100%] box-border ml-[15rem]">
        <div className="w-[84vw] h-[100vh]  text-center flex flex-col justify-center ">
          <div className="w-[84vw] h-[10vh] z-10">
            <h1 className="font-extrabold text-[8.8rem] text-center">404</h1>
            <p className="font-semibold">
              Oops! It Seems like the page you're tryping to access doesn't
              exist. If you <br />
              believe there's on issue. feel free to report it, and we'll look
              into it.
            </p>
            <div className="mt-5">
              <button type="submit" className="register-btn">
                <NavLink to="/home">Go to Home</NavLink>
              </button>
              <button type="submit" className="register-btn">
                <NavLink to="/contact">Report Problem</NavLink>
              </button>
            </div>
          </div>
          <Spline scene="https://prod.spline.design/T-FGjFhUshBm7wKd/scene.splinecode" />
          {/* <iframe
      src="https://my.spline.design/robotinteractiveevents-37fe3ae153aa87499a215a27dced4ded/"
      frameborder="0"
      className="h-[100vh] w-[100vw]"
    ></iframe> */}
        </div>
      </main>
    </>
  );
};
