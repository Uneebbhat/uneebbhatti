import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

export function HeroSection() {
  return (
    <>
      <section className="main-section">
        <main className="main-wrapper">
          <div className="content">
            <div className="heading">
              <h1>
                Hi <span className="waving-emoji">👋</span>, I am Uneeb
              </h1>
            </div>
            <div className="para">
              <p>
                Ready to elevate your online presence? Let's collaborate and
                bring your ideas to life.
              </p>
            </div>
            <div className="button">
              <button className="btn">
                <Link
                  to="https://calendly.com/uneebbhatti/meeting"
                  target="_blank">
                  Launch your vision
                </Link>
              </button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
