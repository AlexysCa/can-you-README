// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

  ## Description
  ${data.description}

  ## Table of Contents
  -[Description](#description)
  -[Installation](#install)
  -[Usage](#useInfo)
  -[License](#license)
  -[Contributing](#contribute)
  -[Tests](#instructions)
  -[Issues](#issues)

  ## Installation
  ${data.install}

  ## Usage
  ${data.useInfo}

  ## License
  This application is covered by the ${data.license} license.

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.instructions}

  ## Issues 
  ${data.issues}<br />
  <br />
  Find me on GitHub: [${data.github}](https://github.com/${data.github})<by />
  <br />
  Email me about any issues or questions: 



`;
}

module.exports = generateMarkdown;
