import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import "./Navbar.css";

const Navbar = () => {
  const context = useContext(UserContext);
  return (
    <div>
      <header className="site-navbar">
        <div class="container">
          <div className="row align-items-center nav-main">
            <div class="col-11 col-xl-2">
              <h1 className="mb-0 site-logo">
                <a href="/" className="mb-0 m-0 brand-color">
                  Video App
                </a>
              </h1>
            </div>
            <div className="col-12 col-md-10">
              <nav className="site-navigation position-relative text-right">
                <ul className="site-menu">
                  <li className="">
                    <a href="/">
                      <span className="">Home</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="/about">
                      <span className="">About</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="/contact">
                      <span className="">Contact</span>
                    </a>
                  </li>
                  <li className="navitem">
                    {context.user ? (
                      <>
                        <li>
                          <a
                            href=""
                            className="sign"
                            onClick={() => {
                              context.setUser(null);
                            }}
                          >
                            <span className="gyellow">Signout</span>
                          </a>
                        </li>
                      </>
                    ) : (
                      <div style={{ display: "flex" }}>
                        <li>
                          <a href="/signin" className="sign">
                            <span className="gblue">SignIn</span>
                          </a>
                        </li>
                        <li className="">
                          <a href="/signup" className="sign">
                            <span className="ggreen">SignUp</span>
                          </a>
                        </li>
                      </div>
                    )}
                  </li>
                  {/* <li>
                    <a href="/signin">
                      <span className="gblue">SignIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="/signup">
                      <span className="ggreen">SignUp</span>
                    </a>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
