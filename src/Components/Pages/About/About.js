import React, { useState } from "react";
import "./About.css";
import thinkingFace from "../../../assets/thinking-face.gif";
import myImg from "../../../assets/my-img.svg";

export default function About() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const movementStrength = 20; // Adjust this value to control the movement intensity
    const x =
      (event.nativeEvent.offsetX / event.target.offsetWidth - 0.5) *
      movementStrength;
    const y =
      (event.nativeEvent.offsetY / event.target.offsetHeight - 0.5) *
      movementStrength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <>
      <section className="about-section">
        <div className="about-wrapper">
          <div className="about-header">
            <h2>
              Who am I{" "}
              <span>
                <img src={thinkingFace} alt="🤔" />
              </span>
              ?
            </h2>
          </div>

          <div
            className="my-img"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}>
            <img src={myImg} alt="" />
          </div>

          <div className="about-me">
            <p>
              Hello, I'm Uneeb Bhatti, an enthusiastic web developer hailing
              from Pakistan, with a strong desire to create remarkable online
              experiences. While I'm relatively new to the freelancing scene on
              platforms like Fiverr and Upwork, I bring a year of hands-on
              experience in web development, specializing in HTML, CSS,
              JavaScript, React, and Webflow. My focus is on building dynamic
              and innovative websites that showcase my passion for delivering
              both stunning visuals and exceptional functionality.
            </p>
            <br />
            <p>
              My goal is to create websites that not only captivate users
              visually but also provide seamless and intuitive user interfaces.
              I'm dedicated to staying up-to-date with the latest industry
              practices to ensure that my work is of the highest quality, even
              as I'm just starting to establish my freelancing career.
            </p>
            <br />
            <p>
              I possess a strong aptitude for design and use industry-leading
              design software such as Figma, Illustrator, and Photoshop to bring
              my creative vision to reality. By seamlessly integrating design
              and development, I strive to provide holistic solutions that are
              both aesthetically pleasing and functionally robust.
            </p>
            <br />
            <p>
              Even though I'm at the early stages of building my freelancing
              portfolio, my commitment to meticulous attention to detail is
              unwavering. I'm constantly seeking to push the boundaries of
              what's possible, always on the lookout for innovative ways to
              elevate the digital experiences I create.
            </p>
            <br />
            <p>
              I'm excited to kickstart my freelancing journey and eager to
              collaborate with clients who share my vision. Together, we can
              bring your digital ideas to life, creating something extraordinary
              that leaves a lasting impression.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
