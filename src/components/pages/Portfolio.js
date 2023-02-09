import React from 'react';
import Project from './Project';

const projects = [
    {
        id: 0,
        title: "1st project",
        languages: "languages, html, css, blah, javascript",
        image: "../../../image/ocean.jpg",
        description: "testing description testing descrptionm",
        repo: "",
        live: "",
    },
    {
        id: 1,
        title: "2nd project",
        languages: "languages, html, css, blah, javascript",
        image: "../../../image/ocean.jpg",
        description: "testing description testing descrptionm",
        repo: "",
        live: "",
    },
    {
        id: 2,
        title: "3rd project",
        languages: "languages, html, css, blah, javascript",
        image: "../../../image/ocean.jpg",
        description: "testing description testing descrptionm",
        repo: "",
        live: "",
    },
    {
        id: 3,
        title: "4th project",
        languages: "languages, html, css, blah, javascript",
        image: "../../../image/ocean.jpg",
        description: "testing description testing descrptionm",
        repo: "",
        live: "",
    },
    {
        id: 4,
        title: "5th project",
        languages: "languages, html, css, blah, javascript",
        image: "../../../image/ocean.jpg",
        description: "testing description testing descrptionm",
        repo: "",
        live: "",
    },
    {
        id: 5,
        title: "6th project",
        languages: "languages, html, css, blah, javascript",
        image: "../../../image/ocean.jpg",
        description: "testing description testing descrptionm",
        repo: "",
        live: "",
    },
]

function Portfolio() {
    return (
        <div>
            <div>
                <h1>Portfolio</h1>
            </div>
            <Project projects={projects}/>
        </div>

    );
}

export default Portfolio;