// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const console = require('console');
const writeToFile = util.promisify(fs.writeFile);

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
        name: 'install',
        message: 'What should users have installed?',
    },
    {
        type: 'input',
        name: 'useInfo',
        message: 'What is the application used for?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide guidelines on how users can contribute to the application.',
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
        message: 'What should users do if they have issues?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
    },
    ]);
};


// TODO: Create a function to write README file
async function init() {
    try {
        const data = await questions();
        const generateFile = generateMarkdown(data);

        await writeToFile('./dist/README.md', generateFile);
        console.log('README.md has been created!');
    } catch(err) {
        console.log(err);
    }
}

init();
