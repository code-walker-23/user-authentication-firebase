import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isSignInForm && (
            <>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          {isSignInForm ? "New to our service?" : "Already have an account?"}{" "}
          <button onClick={toggleForm} className="text-blue-400 hover:underline">
            {isSignInForm ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
