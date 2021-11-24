import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="col-md-12 copy">
        <p className="text-center text-white">
          Copyright &copy; 2021 All Rights Reserved by
          <a
            href="/"
            style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem" }}
          >
            &nbsp;Ganesh
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Footer;
