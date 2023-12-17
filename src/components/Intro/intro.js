import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from "react-scroll";

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hi there,</span>
                <span className="introText"> I'm <span className="introName">Joshua Attat</span> <br /> Web Developer </span>
                <p className="introPara">I'm a skilled web developer with experience in creating <br/> visually stunning & user-friendly websites.</p>
                <Link><button className="btn" onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }
        } ><img src={btnImg} alt="Hire Me" className="btnImg" />Hire Me</button></Link>
                


            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;