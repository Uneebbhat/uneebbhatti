import React from "react";
import "./Portfolio.css";
import thinkingFace from "../../../../assets/thinking-face.gif";
import work1 from "../../../../assets/work1.svg";
import work2 from "../../../../assets/work2.svg";
import work3 from "../../../../assets/work3.svg";
import arrow from "../../../../assets/arrow.gif";
// import data from "../../../../data/portfolio.json";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio-section">
        <div className="portfolio-wrapper">
          <div className="header">
            <h2>
              What I do{" "}
              <span>
                <img src={thinkingFace} alt="🤔" />
              </span>
              ?
            </h2>
            <p>
              Combining creativity and code to develop engaging, user-centric
              websites and applications.
            </p>
          </div>
          <div className="portfolio">
            <div className="portfolio-card-wrapper">
              {/* {data.map((item) => (
                <h1 key={item.id}>{item.title}</h1>
              ))} */}
              <div className="first">
                <div className="left">
                  <div className="head">
                    <h2>Portfolio Website</h2>
                    <p>Front-End Development - 2023</p>
                  </div>
                  <div className="desc">
                    <p>Developed the website for a UI/UX designer</p>
                  </div>
                  <div className="website-link">
                    <button className="website-link-btn">
                      Visit the website{" "}
                      <span>
                        <img src={arrow} alt="" />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="right">
                  <img src={work1} alt="" />
                </div>
              </div>

              <div className="first">
                <div className="left">
                  <div className="head">
                    <h2>Landing Page</h2>
                    <p>Front-End Developer - 2023</p>
                  </div>
                  <div className="desc">
                    <p>Developed a landing page for marketing company</p>
                  </div>
                  <div className="website-link">
                    <button className="website-link-btn">
                      Visit the website{" "}
                      <span>
                        <img src={arrow} alt="" />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="right">
                  <img src={work2} alt="" />
                </div>
              </div>

              <div className="first">
                <div className="left">
                  <div className="head">
                    <h2>Landing Page</h2>
                    <p>Front-End Developer - 2023</p>
                  </div>
                  <div className="desc">
                    <p>
                      Developed a landing page for a bookmark organizer appy
                    </p>
                  </div>
                  <div className="website-link">
                    <button className="website-link-btn">
                      Visit the website{" "}
                      <span>
                        <img src={arrow} alt="" />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="right">
                  <img src={work3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
