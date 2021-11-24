import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Signin.css";
import { UserContext } from "../context/UserContext";

import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(UserContext);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        context.setUser({ email: user.email, uid: user.uid });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn();
  };

  if (context.user?.uid) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="signin">
        <h1>Please Sign In to access the content</h1>
        <Link to="/">
          <img className="signin-logo" src="" alt="" />
        </Link>

        <div className="signin-container">
          <h1>Sign-In</h1>
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
              Continue
            </button>

            <p>
              By continuing, you agree to our Conditions of Use and Privacy
              Notice.
            </p>
            <p>Need help?</p>
            <div className="new">
              <h5>New to Video App?</h5>
            </div>
            <Link to="/signup">
              <button type="submit" className="signup-btn">
                Create your Video App Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
