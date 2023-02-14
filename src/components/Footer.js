import React from 'react';

import '../styles/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <footer className="footer">
      
      <div className='footer-social'>
        <a href="https://github.com/t-starkw" className="github social mobile-foot"><i><FontAwesomeIcon icon={faGithub} size="2x" /></i></a>
        <a href="https://www.linkedin.com/in/tessa-starkweather-b61941200/" className="linkedin social mobile-foot"><i><FontAwesomeIcon icon={faLinkedin} size="2x" /></i></a>
        <a href="https://www.instagram.com/tessa.starkweather/" className="insta social mobile-foot"><i><FontAwesomeIcon className='insta-icon' icon={faInstagram} size="2x" /></i></a>
      </div>
    </footer>
  );
}

export default Footer;