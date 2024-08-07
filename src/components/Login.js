import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'; // Ensure this import is present

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSignInForm, setIsSignInForm] = useState(true);
  const navigate = useNavigate(); // useNavigate for navigation

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignInForm) {
      await handleSignIn();
    } else {
      await handleSignUp();
    }
  };

  // Sign In Logic
  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User signed in:", user);
      toast.success('User signed in successfully!', { position: "top-center" });
      navigate('/browse'); // Redirect to browse page
    } catch (error) {
      console.error("Sign In Error:", error);
      toast.error('Failed to sign in. Please check your credentials.', { position: "bottom-center" });
    }
  };

  // Sign Up Logic
  const handleSignUp = async () => {
    if (!email || !password || !firstName || !lastName) {
      toast.error('All fields are required.', { position: "bottom-center" });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User created:", user);

      // Set additional user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        firstName: firstName,
        lastName: lastName
      });

      toast.success('Account created successfully! Please sign in.', { position: "top-center" });

      // // Redirect to sign-in page after a brief delay
      // setTimeout(() => {
      //   navigate('/signin');
      // }, 3000); // Adjust the delay as needed

    } catch (error) {
      console.error("Sign Up Error:", error);
      toast.error('Failed to create account. Please try again later.', { position: "bottom-center" });
    }
  };

  // Toggle between sign-in and sign-up forms
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                required
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            required
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
