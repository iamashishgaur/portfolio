import React from "react";
import "./Profile.scss";
import { BsFacebook } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import resume from "../../../Assets/Resume/Ashish kumar.pdf";
import Typewritter from 'typewriter-effect'



const Profile = () => {
  return (
    <>
      <div className="profile-container" id="home">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
              <span className="title-text">Hello, I'am</span>
              <div className="primary-text">
                <span>
                  <h1>Ashish Kumar</h1>
                </span>
                <Typewritter options={{
                  strings:["Frontend Devloper"],
                  autoStart:true,
                  cursor:"",
                  loop:true,
                  className:"Typewritter",
                }}/>
              </div>
            </div>
            <div className="profile-about-me">
              <p>
              A Master Degree in Computer Science Engineering has enhanced, My Proficiency in front End Web Developer.
              </p>
            </div>
            <div className="profile-social-icon">
              <div className="social-icon">
              <a href="https://linkedin.com/iamashishgaur"><AiFillLinkedin size={25} /></a>
              </div>
              <div className="social-icon">
                <a href="https://github.com/iamashishgaur"><AiFillGithub size={25} /></a>
              </div>
              <div className="social-icon">
              <a href="https://facebook.com/iamashishgaur"><BsFacebook size={25} /></a>
              </div>
              <div className="social-icon">
              <a href="https://twitter.com/iamashishgaur"><FaTwitterSquare size={25} /></a>
              </div>
              <div className="social-icon">
              <a href="https://instagram.com/iamashishgaur"><FaInstagram size={25} /></a>
              </div>
            </div>
            <div className="profile-options">
              <div className="profile-btn">
                <a href={resume} download="Ashish Resume.pdf">
                  <button className="btn">
                    <AiOutlineDownload /> Download CV
                  </button>
                </a>
                <a href={"https://www.canva.com/design/DAFcKpXC2wQ/XMFMZngcV2MROESEK_1a4Q/view?utm_content=DAFcKpXC2wQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink " } >
                  <button className="btn">
                    <AiOutlineDownload /> View Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="profile-image-container">
            <div className="profile-image"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;