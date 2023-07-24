import React from "react";
import "./Footer.scss";
import { BsFacebook } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="copyright-info">
          <p>Designed & Developed By <span>Ashish Kumar</span></p>
        </div>
        <div className="social-icon-container">
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
      </div>
    </>
  );
};
export default Footer;
