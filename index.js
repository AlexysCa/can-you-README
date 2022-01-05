// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// prompts user with questions for README
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
       type: 'input',
       name: 'description',
       message: 'Provide a description about your project.', 
    },
    {
       type: 'input',
       name: 'contents',
       message: 'Enter Table of Contents.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Provide installation process.',
    },
    {
        type: 'input',
        name: 'useInfo',
        message: 'What is the application used for?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide guidelines on how users can contribute to the application',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Provide instructions on how to test application.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license for this project: ',
        choices: [
            'Apache',
            'Academic',
            'GNU',
            'ISC',
            'MIT',
            'Mozilla',
            'Open',
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'issues',
        message: 'What do users do if they have isues?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
    },
    ]);
};

questions()


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
