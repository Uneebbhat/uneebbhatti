import React from "react";
import "./Process.css";
import thinkingFace from "../../../../assets/thinking-face.gif";

export default function Process() {
  return (
    <>
      <section className="process-section">
        <div className="process-section-wrapper">
          <div className="process-header">
            <h2>
              How I do{" "}
              <span>
                <img src={thinkingFace} alt="🤔" />
              </span>
              ?
            </h2>
            <p>
              Engineered to drive development and yield remarkable outcomes, our
              meticulously crafted game plan is tailored to deliver tangible
              results.
            </p>
          </div>
          <div className="process-wrapper">
            <div className="planning same-bg">
              <div className="heading">
                <h3>Planning</h3>
              </div>
              <div className="body">
                <p>
                  The cornerstone of web development. Strategize, set goals, and
                  collaborate to lay a solid foundation for success. Meticulous
                  planning breeds exceptional online presence.
                </p>
              </div>
            </div>
            <div className="wireframing same-bg">
              <div className="heading">
                <h3>Wireframing</h3>
              </div>
              <div className="body">
                <p>
                  The blueprint for success in web development. It outlines
                  structure and functionality, enabling effective communication
                  and user-centric experiences. Meticulous wireframing ensures a
                  polished and intuitive outcome.
                </p>
              </div>
            </div>
            <div className="designing same-bg">
              <div className="heading">
                <h3>Designing</h3>
              </div>
              <div className="body">
                <p>
                  The creative core of web development. It brings ideas to life
                  through visual aesthetics and user experience. Meticulous
                  design captivates and engages users for an impactful website.
                </p>
              </div>
            </div>
            <div className="development same-bg">
              <div className="heading">
                <h3>Development</h3>
              </div>
              <div className="body">
                <p>
                  The engine of web creation. It transforms ideas into
                  functional websites through coding and implementation.
                  Meticulous development ensures seamless functionality and a
                  robust online presence.
                </p>
              </div>
            </div>
            <div className="testing same-bg">
              <div className="heading">
                <h3>Testing</h3>
              </div>
              <div className="body">
                <p>
                  The quality assurance checkpoint in web development. It
                  ensures functionality, compatibility, and usability,
                  delivering a seamless user experience. Meticulous testing
                  guarantees a bug-free and reliable website.
                </p>
              </div>
            </div>
            <div className="deployment same-bg">
              <div className="heading">
                <h3>Deployment</h3>
              </div>
              <div className="body">
                <p>
                  The culmination of web development. Launching and making the
                  website live with meticulous attention to detail ensures a
                  seamless user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
