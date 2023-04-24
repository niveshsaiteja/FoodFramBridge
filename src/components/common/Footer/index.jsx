import React from 'react';
import Logo from '../Logo';
import './styles.css';
import fb from "../../common/Logo/logo2.png";
import twitter from "../../common/Logo/logo2.png";
import linkedin from "../../common/Logo/logo2.png";
import insta from "../../common/Logo/logo2.png";



const Footer = () => {
  return (
    <footer>
      <p>
       @COPYRIGHTS2023 WEBLAUCH.INDIA
      </p>
      <Logo />
    </footer>
  );
};


const Footer1 = () =>{
  return (
    <div className='footer'>
      <div className='inner-section'>
        <div className='inner-section-links'>
          <div className='inner-section-link-div'>
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employee</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className='inner-section-link-div'>
            <h4>Resource</h4>
            <a href="/employer">
              <p>Resource Center</p>
            </a>
            <a href="/resource">
              <p>Testimonials</p>
            </a>
            <a href="/individual">
              <p>STV</p>
            </a>
          </div>
          <div className='inner-section-link-div'>
            <h4>Partners</h4>
            <a href="/employer">
              <p>Swing Tech</p>
            </a>
          </div>
          <div className='inner-section-link-div'>
            <h4>Company</h4>
            <a href="/employer">
              <p>About</p>
            </a>
            <a href="/healthplan">
              <p>Press</p>
            </a>
            <a href="/individual">
              <p>Career</p>
            </a>
            <a href="/individual">
              <p>Contact</p>
            </a>
          </div>
          <div className='inner-section-link-div'>
            <h4>Coming soon on</h4>
            <div className='socialmedia'>
              <p><img src={fb} alt="" /></p>
              <p><img src={twitter} alt="" /></p>
              <p><img src={linkedin} alt="" /></p>
              <p><img src={insta} alt="" /></p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
//export default Footer;
export default Footer1;
