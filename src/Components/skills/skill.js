import React from 'react'
import './skill.css'
import WebDesign from "../../Assets/web_design_logo.png"
import Development from "../../Assets/web_development_logo.png"
import Debug from "../../Assets/debug_icon.png"

const skill = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">About Me</span>
        <span className="skillDesc">I am a passionate coder and debugger looking to 
          transition into an AI specialist role where I use my skills to effectively discover inoovative solutions to problems in the domain of AI.
        </span>
        <div className="skillBars">
          <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design and Development</h2>
            <p>Proficient in creating responsive websites using variuos technology such as React, JavaScript and HTML/CSS.</p>
          </div>
          </div>
          <div className="skillBar">
          <img src={Development} alt="Development" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Development</h2>
            <p>Capable of developing apps in Java, Python and C/C++.</p>
          </div>
          </div>
          <div className="skillBar">
          <img src={Debug} alt="Debug" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Debugging and Troubleshooting</h2>
            <p>Excellent at spotting errors in code and finding optimal solutions to fix them.</p>
          </div>
          </div>
        </div>
    </section>
  )
}

export default skill;