import React from 'react';
import Project from './Project';

const projects = [

    {
        id: 0,
        title: "Team Profile CLI",
        tools: "HTML, CSS, JavaScript, JEST, Node, Inquirer",
        image: "../../../portfolio-reactfully/image/cli.png",
        description: "A browser-based application that allows users to randomly generate strong passwords based on window prompts.",
        repo: "https://github.com/t-starkw/what-team-wildcats",
        live: "https://github.com/t-starkw/what-team-wildcats",
    },

    {
        id: 1,
        title: "J.A.T.E",
        tools: "Node, Express, Babel, Webpack, Workbox, IndexedDB",
        image: "../../../portfolio-reactfully/image/JATE.PNG",
        description: "JATE is a single-page text editor application that runs in the browser. This application meets PWA criteria and features multiple data persistence techniques.",
        repo: "https://github.com/t-starkw/snippet",
        live: "https://glacial-lake-65417.herokuapp.com/",
    },
    {
        id: 2,
        title: "Hungry",
        tools: "HTML, CSS, JavaScript, APIs",
        image: "../../../portfolio-reactfully/image/Hungry.PNG",
        description: "The happy hour food pairing generator. This API based generator renders a randomized food and cocktail pairing based on user input.",
        repo: "https://github.com/t-starkw/diy-happy-hour",
        live: "https://t-starkw.github.io/diy-happy-hour/rec.html",
    },

    {
        id: 3,
        title: "JsCafe",
        tools: "JavaScript, MongoDB, Mongoose, Express",
        image: "../../../portfolio-reactfully/image/jsCafe1.PNG",
        description: "An online MERN stack cafe site. Allows users to login and order menu items, view their favorites, and earn rewards for purchases. ",
        repo: "https://github.com/t-starkw/jsCafe",
        live: "https://js2cafe.herokuapp.com/",
    },
    {
        id: 4,
        title: "LibScrib",
        tools: "Node, Express, MySQL, Bcrypt, Handlebars",
        image: "../../../portfolio-reactfully/image/LIB.PNG",
        description: "LibScrib is a library and reviewing platform for bookworms. Users can search for books, make an account, and leave their own reviews. ",
        repo: "https://github.com/smfitz/Project-2-restAPI-group-4",
        live: "https://libscrib-app.herokuapp.com/",
    },
    {
        id: 5,
        title: "Tech Talk",
        tools: "JavaScript, MySQL, Sequelize, Express, Node, Bcrypt, Handlebars",
        image: "../../../portfolio-reactfully/image/bloggy.png",
        description: "A tech blog where users can create and personalize an account, post, and comment on other users posts.",
        repo: "https://github.com/t-starkw/what-the-tech",
        live: "https://ancient-dawn-15995.herokuapp.com/",
    },
]

function Portfolio() {
    return (
        <div className='m-4'>
            <Project projects={projects} />
        </div>

    );
}

export default Portfolio;