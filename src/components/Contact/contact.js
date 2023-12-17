import React, { useRef } from "react";
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cgomwx9', 'template_p93p2x9', form.current, 'UlbEEw5mL3ZTwhRm7')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!');
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
<section id="contactPage">
    <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">Here are some of the clients have been opportuned to work with</p>
        <img src={Walmart} alt="clientimage" className="clientImg" />
        <img src={Adobe} alt="clientimage" className="clientImg" />
        <img src={Microsoft} alt="clientimage" className="clientImg" />
        <img src={Facebook} alt="clientimage" className="clientImg" />
    </div>
    <div id="contact">
    <h1 className="contactPageTitle">Contact Me</h1>
    <span className="contactDesc">Please fill out the form below</span>
    <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name="from_name" />
        <input type="email" className="email" placeholder="Your Email" name="your_email" />
        <textarea className="msg" name="message" rows="5" placeholder="Type your message here"></textarea>
        <button value="send" type="submit" className="submitBtn">Message Joshua</button>
        <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={YoutubeIcon} alt="Youtube" className="link" />
            <img src={InstagramIcon} alt="Instagram" className="link" />
        </div>
    </form>
    </div>

</section>
    );
}

export default Contact;