import React from "react";
import "./Footer.css";
import fb from "../../../../assets/facebook.svg";
import insta from "../../../../assets/instagram.svg";
import reddit from "../../../../assets/reddit.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-wrapper">
          <div className="images">
            <img src={fb} alt="Facebook" />
            <img src={insta} alt="Instagram" />
            <img src={reddit} alt="Reddit" />
          </div>
          <div className="contact">
            <a href="mailto:uneebbhatti3@gmail.com">uneebbhatti3@gmail.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}
