import { useState } from "react";
import Header from "./header";
import { nameValidationCheck } from "../utils/Validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleToggle = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    nameValidationCheck(name);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_small.jpg" />
      </div>
      <form className="bg-black text-white absolute w-4/12 p-10 my-28 mx-auto right-0 left-0 rounded-xl bg-opacity-85" >
        <h1 className="font-bold py-3 text-3xl">{isSignInForm ? "Sign In": "Sign Up"}</h1>
        {!isSignInForm && <input
          className="mt-2 py-3 w-full bg-[#141312] bg-opacity-70 rounded-md border border-[#5C5C5C] pl-5"
          type="text"
          placeholder="Full Name"
        ></input> }
        <input
          className="mt-4 mb-2 py-3.5 w-full bg-[#141312] bg-opacity-70 rounded-md border border-[#5C5C5C] pl-5"
          type="text"
          placeholder="Email or mobile number"
        ></input>
        <input
          className="mt-2 mb-5 py-3 w-full bg-[#141312] bg-opacity-70 rounded-md border border-[#5C5C5C] pl-5"
          type="text"
          placeholder="Password"
        ></input>
         {!isSignInForm && <input
          className="py-3 w-full bg-[#141312] bg-opacity-70 rounded-md border border-[#5C5C5C] pl-5 mb-5 "
          type="text"
          placeholder="Confirm Password"
        ></input> }
        <button className="bg-red-700 w-full py-2 rounded-md text-white font-semibold" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-[#B3B3B3] mt-6">
          {isSignInForm ? "New to Netflix?" : "Already a User?"}
          <span
            className="text-white cursor-pointer hover:underline ml-1 font-semibold"
            onClick={handleToggle}
          >
           {isSignInForm ? " Sign up now." : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
