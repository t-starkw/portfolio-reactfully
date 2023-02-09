import React from 'react';
import Project from './Project';

const projects = [
    {
        id: 0,
        title: "LibScrib",
        tools: "Node, Express, MySQL, Bcrypt, Handlebars",
        image: "../../../image/ocean.jpg",
        description: "testing description testing descrptionm",
        repo: "https://github.com/smfitz/Project-2-restAPI-group-4",
        live: "https://libscrib-app.herokuapp.com/",
    },
    {
        id: 1,
        title: "J.A.T.E",
        tools: "Node, Express, Babel, Webpack, Workbox, IndexedDB",
        image: "../../../image/JATE.PNG",
        description: "JATE is a single-page text editor application that runs in the browser. This application meets PWA criteria and features multiple data persistence techniques.",
        repo: "https://github.com/t-starkw/snippet",
        live: "https://glacial-lake-65417.herokuapp.com/",
    },
    {
        id: 2,
        title: "3rd project",
        tools: "tools, html, css, blah, javascript",
        image: "../../../image/ocean.jpg",
        description: "testing description testing descrptionm",
        repo: "",
        live: "",
    },
    {
        id: 3,
        title: "4th project",
        tools: "tools, html, css, blah, javascript",
        image: "../../../image/ocean.jpg",
        description: "testing description testing descrptionm",
        repo: "",
        live: "",
    },
    {
        id: 4,
        title: "5th project",
        tools: "tools, html, css, blah, javascript",
        image: "../../../image/ocean.jpg",
        description: "testing description testing descrptionm",
        repo: "",
        live: "",
    },
    {
        id: 5,
        title: "6th project",
        tools: "tools, html, css, blah, javascript",
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
                <h1 className='text-center'>Portfolio</h1>
            </div>
            <Project projects={projects} />
        </div>

    );
}

export default Portfolio;