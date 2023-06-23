import React from "react";
import './Footer.css';
import fb from '../assests/fb.png';
import twitter from '../assests/twitter.png';
import linkedin from '../assests/linkedin.png';
import instagram from '../assests/insta.png';

const Footer=()=>{
    

  return (
    <div className="footer">
      <div className="sb__footer section__padding">
      <div className="sb__footer-links">
      <div className="sb__footer-links-div">
        <h4>For Bussiness</h4>
        <a href="/employer">
            <p>Employer</p>
        </a>
        <a href="/health plan">
            <p>Health Plan</p>
        </a>
        <a href="/individual">
            <p>Individual</p>
        </a>
        
      </div>
      <div className="sb__footer-links-div">
        <h4>Resources</h4>
        <a href="/resources">
            <p>Resources</p>
        </a>
        <a href="/resources">
            <p>Testimonials</p>
        </a>
        <a href="/resources">
            <p>STV</p>
        </a>
      </div>
      <div className="sb__footer-links-div">
        <h4>Partners</h4>
        <a href="/employer">
            <p>CUSAT</p>
        </a>
        </div>
        <div className="sb__footer-links-div">
        <h4>Company</h4>
        <a href="/about">
            <p>About</p>
        </a>
        <a href="/press">
            <p>Press</p>
        </a>
        <a href="/career">
            <p>Career</p>
        </a>
        <a href="/contact">
            <p>Cotact</p>
        </a>
      </div>
      <div className="sb__footer-links-div">
        <h4>Coming Soon</h4>
        <div className="socialmedia">
            <p><img src={fb} alt=""/> </p>
            <p><img src={twitter} alt=""/> </p>
            <p><img src={linkedin} alt=""/> </p>
            <p><img src={instagram} alt=""/> </p>
        </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
            <div className="sb__footer-copyright">
            <p>
                 @{new Date().getFullYear()} CodeInn. All rights reserved.
            </p>
            </div>
            <div className="sb__footer-below-links">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>Security</p></div></a>
                <a href="/cookie"><div><p>Cookie Declarartion</p></div></a>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Footer;