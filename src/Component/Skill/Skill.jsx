import React from "react";
import "./Skill.scss";

const Skill = () => {
  return (
    <>
      <div className="skill-main-container" id="skill">
        <span>
          <h1>My Skills</h1>
        </span>
        <hr/>
        <div className="skill-container">
          <div className="skill-cards">
            <div className="skill-card-bg">
              <h2>HTML</h2>
              <div className="skill-card">
                <div class="outer">
                  <div className="inner">90%</div>
                </div>
              </div>
            </div>
            <div className="skill-card-bg">
              <h2>css</h2>
              <div className="skill-card">
                <div class="outer">
                  <div className="inner">85%</div>
                </div>
              </div>
            </div>
            <div className="skill-card-bg">
              <h2>Bootstrap</h2>
              <div className="skill-card">
                <div class="outer">
                  <div className="inner">75%</div>
                </div>
              </div>
            </div>
            <div className="skill-card-bg">
              <h2>Javascript</h2>
              <div className="skill-card">
                <div class="outer">
                  <div className="inner">70%</div>
                </div>
              </div>
            </div>
            <div className="skill-card-bg">
              <h2>React</h2>
              <div className="skill-card">
                <div class="outer">
                  <div className="inner">60%</div>
                </div>
              </div>
            </div>
            <div className="skill-card-bg">
              <h2>Pythan</h2>
              <div className="skill-card">
                <div class="outer">
                  <div className="inner">40%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
