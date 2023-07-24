import React from "react";
import "./About.scss";
import resume from '../../Assets/Resume/Ashish kumar.pdf'
import { AiOutlineDownload } from 'react-icons/ai'
import { FaAward } from 'react-icons/fa'
import Typewritter from 'typewriter-effect'
import myimage from '../../Assets/Image/Ashishji.jpg'

const About = () => {
  return (
    <>
      <div className="about-main-container" id="about">
        <span className="about-title">
          <h1 className="underline">
            About <span>Me</span>
          </h1>
        </span>
        <hr />
        <div className="about-container">
          <div className="about-img-container">
            <div className="person-image">
            <img src={myimage} alt="Ashish Kumar" />
            </div>
          </div>
          <div className="about-info">
            <div className="about_me">
              <h4>Ashish<span> Kumar</span> </h4>
              <div className="typerighter">
                <h2>I'AM </h2>
                <div>
                <Typewritter options={{
                strings: [" Frontend Devloper"],
                autoStart: true,
                cursor: "",
                loop: true,
                className: "Typewritter",
              }} />
                </div>
              </div>
              
              <p>A Master Degree in Computer Science Engineering has enhanced, My Proficiency in front End Web Developer. My Techniccal Skills Betterment of the Organization. i am looking the forwrd to work and enhances overall learning.</p>
            </div>
            <div className="profile-btn">
              <a href={resume} download="Ashish Resume.pdf">
                <button className="btn"> <AiOutlineDownload size={25} /> Download CV</button>
              </a>
                <a href={"https://www.canva.com/design/DAFcKpXC2wQ/XMFMZngcV2MROESEK_1a4Q/view?utm_content=DAFcKpXC2wQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink " }><button className="btn"> <AiOutlineDownload size={25} /> View Resume</button></a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
