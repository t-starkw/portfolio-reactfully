import React from 'react';

import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'


function About() {
    return (
        <div>
            <div>
                <div>ABOUT ME</div>
                <div>
                    I am a recent graduate from UNC Chapel
                    Hill with a Bachelor of Science in Biology.
                    I am currently employed as an air
                    quality analyst, but my newly discovered passion for computer science
                    has led me to UNC's Coding Bootcamp.
                </div>
                <div>
                    <a href="https://github.com/t-starkw"><i><BsGithub /></i></a>
                    <a href="https://www.linkedin.com/in/tessa-starkweather-b61941200/"><i><BsLinkedin /></i></a>
                    <a href="https://www.instagram.com/tessa.starkweather/"><i><BsInstagram /></i></a>
                </div>
            </div>
            <div>
                <img src="../../../image/me.jpg" alt="Me" width='500' />
            </div>
        </div>

        // <div>
        //     <div className="title-big pb-3 mb-3">
        //         <h3>ABOUT ME</h3>
        //     </div>
        //     <p>
        //         Hi, my name is Tessa.
        //     </p>
        //     <p> I am a recent graduate from UNC Chapel
        //         Hill with a Bachelor of Science in Biology. I am currently employed as an air
        //         quality
        //         analyst, but my
        //         newly discovered passion for computer science has led me to UNC's Coding Bootcamp.
        //     </p>
        //     <div>
        //         <a href="https://github.com/t-starkw"><i><BsGithub /></i></a>
        //         <a href="https://www.linkedin.com/in/tessa-starkweather-b61941200/"><i><BsLinkedin /></i></a>
        //         <a href="https://www.instagram.com/tessa.starkweather/"><i><BsInstagram /></i></a>
        //     </div>
        // </div>

    );
}

export default About;