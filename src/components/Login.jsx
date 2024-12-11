import { useState } from "react";
import Header from "./header";
import { auth } from "../FireBase/Firebase.jsx";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  confirmPasswordCheck,
  emailValidationCheck,
  nameValidationCheck,
  passwordValidationCheck,
} from "../utils/Validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
    general: null,
  });

  const handleToggle = () => {
    setIsSignInForm((prev) => !prev);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setFormErrors({
      name: null,
      email: null,
      password: null,
      confirmPassword: null,
      general: null,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleValidation = () => {
    const errors = {};
    if (!isSignInForm) {
      // Sign-Up validations
      errors.name = nameValidationCheck(formData.name);
      errors.confirmPassword = confirmPasswordCheck(
        formData.password,
        formData.confirmPassword
      );
    }
    // Common validations
    errors.email = emailValidationCheck(formData.email);
    errors.password = passwordValidationCheck(formData.password);

    setFormErrors(errors);

    // Check if there are no errors
    return Object.values(errors).every((err) => !err);
  };

  const handleButtonClick = () => {
    if (handleValidation()) {
      if (!isSignInForm) {
        // Firebase Sign-Up
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed up successfully:", user);
            alert("Sign-Up successful! Please sign in.");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errors = { ...formErrors };

            if (errorCode === "auth/email-already-in-use") {
              errors.email = "Email is already registered.";
            } else if (errorCode === "auth/weak-password") {
              errors.password = "Password should be at least 6 characters.";
            } else {
              errors.general = error.message;
            }

            setFormErrors(errors);
          });
      } else {
        // Firebase Sign-In
        signInWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed in successfully:", user);
            alert("Sign-In successful!");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errors = { ...formErrors };

            if (errorCode === "auth/user-not-found") {
              errors.email = "No account found with this email.";
            } else if (errorCode === "auth/invalid-credential") {
              errors.password = "Incorrect password or Invalid Email ID.";
            } else if (errorCode === "auth/invalid-email") {
              errors.email = "Invalid email format.";
            } else if (errorCode === "auth/too-many-requests") {
              errors.general =
                "Too many failed attempts. Please try again later.";
            } else {
              errors.general = error.message;
            }

            setFormErrors(errors);
          });
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white m-0 p-0 box-border">
      <Header />
      <div className="fixed top-0 left-0 h-full w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_small.jpg"
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-opacity-85 text-white w-full sm:w-11/12 md:max-w-md mx-auto p-6 sm:p-8 mt-5 rounded-xl shadow-lg relative z-10"
      >
        <h1 className="font-bold py-3 text-3xl text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <div>
            <input
              className="mt-2 py-3 w-full bg-gray-800 rounded-md border border-gray-600 pl-4 text-white"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>
        )}
        <div>
          <input
            className="mt-4 py-3 w-full bg-gray-800 rounded-md border border-gray-600 pl-4 text-white"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email or mobile number"
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
          )}
        </div>
        <div>
          <input
            className="mt-4 py-3 w-full bg-gray-800 rounded-md border border-gray-600 pl-4 text-white"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
          {formErrors.password && (
            <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
          )}
        </div>
        {!isSignInForm && (
          <div>
            <input
              className="mt-4 py-3 w-full bg-gray-800 rounded-md border border-gray-600 pl-4 text-white"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
            />
            {formErrors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.confirmPassword}
              </p>
            )}
          </div>
        )}
        {formErrors.general && (
          <p className="text-red-500 text-sm mt-1">{formErrors.general}</p>
        )}
        <button
          className="bg-red-600 w-full py-3 rounded-md text-white font-semibold mt-6 hover:bg-red-700 transition"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400 mt-6 text-center">
          {isSignInForm ? "New to Netflix?" : "Already a User?"}
          <span
            className="text-white cursor-pointer hover:underline ml-1 font-semibold"
            onClick={handleToggle}
          >
            {isSignInForm ? "Sign up now." : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
