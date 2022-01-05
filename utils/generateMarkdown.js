
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

  ![badge](https://img.shields.io/badge/license-${data.license}-yellow)<br />

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#install)
  * [Usage](#useInfo)
  * [License](#license)
  * [Contributing](#contribute)
  * [Tests](#instructions)
  * [Issues](#issues)

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
  Email me about any issues or questions: ${data.email}



`;
}

module.exports = generateMarkdown;
