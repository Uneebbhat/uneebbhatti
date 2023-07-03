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
              My name is Uneeb Bhatti, and I am a talented web developer hailing
              from Pakistan. With 1 year of experience in the field, I have
              cultivated a strong passion for crafting remarkable online
              experiences. I specialize in using HTML, CSS, JavaScript, React,
              and Firebase to build dynamic and innovative websites. By
              leveraging these technologies, I bring digital concepts to life,
              creating seamless and intuitive user interfaces. My goal is to
              create websites that not only captivate users visually but also
              provide exceptional functionality and user experiences. With a
              keen eye for detail and a dedication to staying up-to-date with
              the latest industry practices, I ensure that my work is of the
              highest quality, meeting and exceeding client expectations.
            </p>
            <br />
            <p>
              In addition to my web development skills, I possess a strong
              aptitude for design. I utilize industry-leading design software
              such as Figma, Adobe XD, Illustrator, and Photoshop to bring my
              creative vision to reality. These tools allow me to design
              visually stunning interfaces, create engaging user interactions,
              and craft memorable branding elements. By seamlessly integrating
              design and development, I strive to provide holistic solutions
              that are both aesthetically pleasing and functionally robust.
              Whether it's conceptualizing wireframes, refining user flows, or
              polishing the final visual assets, I approach every design element
              with meticulous attention to detail. I am constantly seeking to
              push the boundaries of what is possible, always looking for
              innovative ways to elevate the digital experiences I create.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
