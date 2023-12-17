import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Do</span><br/>
            <span className="skillDesc">I'm a Frontend Engineer proficient in HTML, CSS, Javascript & React.Js</span>
            <div className="skillBars">
                <div className="skillBar">
                <img src={UIDesign} alt="UIDesign"  className="skillBarImg"   /> 
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Skilled in interpreting UI/UX designs for frontend developement</p>

                </div>
                </div>

            

            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign"  className="skillBarImg"   /> 
                <div className="skillBarText">
                    <h2>Web Development</h2>
                    <p>Skilled in Frontend Languages such as Javascript & React</p>

                </div>

            </div>

            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign"  className="skillBarImg"   /> 
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Skilled in Designing both Android & iOS Apps.</p>

                </div>

            </div>
            </div>
        </section>
    );
}

export default Skills;