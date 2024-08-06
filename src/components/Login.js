import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validat";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const validationError = checkValidData(email.current.value, password.current.value);
    setErrorMessage(validationError);
  };

  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-black">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
        alt="background"
        className="absolute inset-0 object-cover w-full h-full opacity-60"
      />
      <div className="relative z-10 bg-black bg-opacity-70 p-16 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form className="space-y-6">
          {!isSignInForm && (
            <>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-200 text-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-200 text-lg"
              />
            </>
          )}
          <div className="relative">
            <input
              type="email"
              ref={email}
              placeholder="Email Address"
              className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-100 text-lg"
            />
            {errorMessage === "Email is not valid" && (
              <p className="absolute top-full left-0 mt-2 p-2 bg-red-600 text-white text-sm rounded-lg shadow-md transition-opacity duration-300 opacity-100">
                <svg
                  className="w-5 h-5 inline-block mr-2 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Email is not valid</span>
              </p>
            )}
          </div>
          <div className="relative mt-4">
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-100 text-lg"
            />
            {errorMessage === "Password is not valid" && (
              <p className="absolute top-full left-0 mt-2 p-2 bg-red-600 text-white text-sm rounded-lg shadow-md transition-opacity duration-300 opacity-100">
                <svg
                  className="w-5 h-5 inline-block mr-2 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Password is not valid</span>
              </p>
            )}
          </div>
          <button
            className="w-full py-4 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300 text-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="flex items-center justify-between text-white text-lg mt-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="custom-checkbox" />
            <span className="text-white">Remember me</span>
          </label>
          {isSignInForm && (
            <a href="/" className="text-white hover:underline">
              Forgot Password?
            </a>
          )}
        </div>
        <p className="text-gray-500 mt-6 text-center text-lg">
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          <button onClick={handleSignIn} className="text-white hover:underline">
            {isSignInForm ? "Sign Up now." : "Sign In now."}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;


























/* import React from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validat";
import { useRef, useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = React.useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  const handleButtonCLick = () => {
    // checkValidData(email, password);
    // console.log("Email: ", email); // return an object
    // console.log("Password:", password);
    // console.log("Email: ", email.current.value);
    // console.log("Password:", password.current.value);
    setErrorMessage(
      checkValidData(email.current.value, password.current.value)
    );
    // console.log("Message: ", errorMessage); // prints the previous clicked value message not the current clicked value message and it is because of the asynchronous nature of the react.
  };

  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen flex items-center justify-center bg-black">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
        alt="background"
        className="absolute inset-0 object-cover w-full h-full opacity-60"
      />
      <div className="relative z-10 bg-black bg-opacity-70 p-16 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-6"
        >
          {!isSignInForm && (
            <>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-200 text-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-200 text-lg"
              />
            </>
          )}
          <div className="relative">
            <input
              type="email"
              ref={email}
              placeholder="Email Address"
              // onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-100 text-lg"
            />
            {errorMessage === "Email is not valid" && (
              <p className="absolute top-full left-0 mt-2 p-2 bg-red-600 text-white text-sm rounded-lg shadow-md transition-opacity duration-300 opacity-100">
                <svg
                  className="w-5 h-5 inline-block mr-2 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Email is not valid</span>
              </p>
            )}
          </div>

          <div className="relative mt-4">
            <input
              type="password"
              ref={password}
              placeholder="Password"
              // onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-white bg-opacity-20 text-white placeholder-white border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-100 text-lg"
            />
            {errorMessage === "Password is not valid" && (
              <p className="absolute top-full left-0 mt-2 p-2 bg-red-600 text-white text-sm rounded-lg shadow-md transition-opacity duration-300 opacity-100">
                <svg
                  className="w-5 h-5 inline-block mr-2 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Password is not valid</span>
              </p>
            )}
          </div>

          <button
            className="w-full py-4 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition duration-300 text-lg"
            onClick={handleButtonCLick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="flex items-center justify-between text-white text-lg mt-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="custom-checkbox" />
            <span className="text-white">Remember me</span>
          </label>

          {isSignInForm && (
            <a href="/" className="text-white hover:underline">
              Forgot Password?
            </a>
          )}
        </div>
        <p className="text-gray-500 mt-6 text-center text-lg">
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          <button onClick={handleSignIn} className="text-white hover:underline">
            {isSignInForm ? "Sign Up now." : "Sign In now."}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;

/* 

formik : it is library for form handling in react and it is very popular library for form handling in react. 

*/

/* 
there is two way to way to take the input from the user in react.
1. setEmail and setPassword
2. useRef : it is used to take the input from the user in react and it is used to reference that input box.

if we click on submit it will try to submit and refresh the page. to prevent this we have to use e.preventDefault().


*/
