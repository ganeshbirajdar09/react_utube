import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Redirect, Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const context = useContext(UserContext);

  //Put anypage behind login
  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <>
      <h2>Home Page</h2>
      <div className="main">
        <ul className="videos">
          <li className="content effect">
            <h3>The Largest Black Hole in the Universe - Size Comparison</h3>
            <p className="small">
              Although in reality specific things need to happen to create
              different kinds of black holes
            </p>
            <a
              href="https://www.youtube.com/watch?v=0FH9cgRhQ-k"
              target="_blank"
            >
              Watch Video
            </a>
          </li>
          <li className="content effect">
            <h3>What is Web 3?</h3>
            <p className="small">
              Web 3.0 enables a future where distributed users and machines are
              able to interact with data.Here are a few early-stage Web 3.0
              applications that already exist today
            </p>
            <a
              href="https://www.youtube.com/watch?v=2uYuWiICCM0"
              target="_blank"
            >
              Watch Video
            </a>
          </li>
          <li className="content effect">
            <h3>Meta</h3>
            <p className="small">
              Introducing the Metaverse.The metaverse is a hypothesized
              iteration of the internet, supporting persistent online 3-D
              virtual environments
            </p>
            <a
              href="https://www.youtube.com/watch?v=pjNI9K1D_xo"
              target="_blank"
            >
              Watch Video
            </a>
          </li>
          <li className="content effect">
            <h3>Difference between Programming and Coding</h3>
            <p className="small">
              Programming is something that almost everyone is doing. Through
              coding, we are enabling everyone to do programming.
            </p>
            <a
              href="https://www.youtube.com/watch?v=6tZz6gr1h9E"
              target="_blank"
            >
              Watch Video
            </a>
          </li>
          <li className="content effect">
            <h3>Uefa Champions League Final 2014</h3>
            <p className="small">
              Relive Real Madrid's famous 'La Décima' victory over city-rivals
              Atlético in the 2014 UEFA Champions League final in Lisbon.
            </p>
            <a
              href="https://www.youtube.com/watch?v=9XfuxIvcQEw"
              target="_blank"
            >
              Watch Video
            </a>
          </li>
          <li className="content effect">
            <h3>What is Entrepreneurship?</h3>
            <p className="small">
              we have explained the meaning of entrepreneurship in an elaborated
              manner.The most prominent example of entrepreneurship is the
              starting of new businesses
            </p>
            <a
              href="https://www.youtube.com/watch?v=MdNNGfoxrqA"
              target="_blank"
            >
              Watch Video
            </a>
          </li>
          <li className="content effect">
            <h3>The first 20 hours -- how to learn anything</h3>
            <p className="small">
              Josh Kaufman is the author of the #1 international bestseller,
              'The Personal MBA: Master the Art of Business'
            </p>
            <a
              href="https://www.youtube.com/watch?v=5MgBikgcWnY"
              target="_blank"
            >
              Watch Video
            </a>
          </li>
          <li className="content effect">
            <h3>Why China is Acquiring Foreign Military Bases </h3>
            <p className="small">
              C Raja Mohan writes: It is trying to assert its primacy in Asia
              and the Indo-Pacific region while pushing out the US and
              India.Reports that the United States
            </p>
            <a
              href="https://indianexpress.com/videos/news-video/why-china-is-acquiring-foreign-military-bases-express-opinion-by-c-raja-mohan/"
              target="_blank"
            >
              Watch Video
            </a>
          </li>
          <li className="content effect">
            <h3>What is Inflation?</h3>
            <p className="small">
              Economists constantly refer to inflation and tend to suggest it is
              a Very Bad Thing. But why exactly, where does it come from and
              what could one do to tame it?
            </p>
            <a
              href="https://www.youtube.com/watch?v=UMAELCrJxt0"
              target="_blank"
            >
              Watch Video
            </a>
          </li>
          <li className="content effect">
            <h3>Will Zomato race to Profitability?</h3>
            <p className="small">
              Zomato went ipo in on 14th July 2021! and while most of us only
              know zomato as food delivery start up which is losing 100s of cr
              with each passing quarter
            </p>
            <a
              href="https://www.youtube.com/watch?v=-NtB3rf8paE"
              target="_blank"
            >
              Watch Video
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
