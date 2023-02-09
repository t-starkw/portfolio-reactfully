import React from 'react';
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'


function Footer() {
  return (
    <footer className="footer">
      
      <div className='footer-social'>
        <a href="https://github.com/t-starkw"><i><BsGithub /></i></a>
        <a href="https://www.linkedin.com/in/tessa-starkweather-b61941200/"><i><BsLinkedin /></i></a>
        <a href="https://www.instagram.com/tessa.starkweather/"><i><BsInstagram /></i></a>
      </div>
    </footer>
  );
}

export default Footer;