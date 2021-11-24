import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Signin.css";
import { UserContext } from "../context/UserContext";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../config/firebaseConfig";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(UserContext);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        context.setUser({ email: user.email, uid: user.uid });
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  if (context.user?.uid) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="signin">
        <div className="signin-container">
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit}>
            <h5>Email</h5>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
            />
            <h5>Password</h5>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            />
            <button type="submit" className="signin-btn">
              Create Account
            </button>
          </form>
          <p>
            By continuing, you agree to all of our Conditions of Use and Privacy
            Notice.
          </p>
          <p>Need help?</p>

          <p>
            Already have an account? &nbsp;
            <Link className="redirect-signin" to="/signin">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
