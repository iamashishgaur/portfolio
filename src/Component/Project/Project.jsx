import React from "react";
import "./Project.scss";
import projecth from '../../Assets/Image/project.jpg';




const Project = () => {
  return (
    <>
      <div className="Project-main-container" id="project">
        <span>
          <h1>Project</h1>
        </span>
        <hr />


        <div className="project-box-container">
          
          <div className="project-box">
            <div>
              <img src={projecth} alt=""></img>
              <p> This is the our Portfolio </p>
            </div>
            <div className="btngroup">
              <button className="btn">Demo</button>
              <button className="btn">Github</button>
            </div>
          </div>
          <div className="project-box">
            <div>
              <img src={projecth} alt=""></img>
              <p> This is the our Portfolio </p>
            </div>
            <div className="btngroup">
              <button className="btn">Demo</button>
              <button className="btn">Github</button>
            </div>
          </div>
          <div className="project-box">
            <div>
              <img src={projecth} alt=""></img>
              <p> This is the our Portfolio </p>
            </div>
            <div className="btngroup">
              <button className="btn">Demo</button>
              <button className="btn">Github</button>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Project;
