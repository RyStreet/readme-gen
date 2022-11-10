// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// let importBadge = ""

// function renderLicenseBadge(license) {
  
//   if(`${answers.license}`==="MIT"){

//     let importBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
// # ${importBadge} 
//   }
// }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(answers) {
  
  
  let editLicense = (answers.license).replaceAll('_'," ")

  return `
# ${answers.title}

# ${answers.user}

![badge](https://img.shields.io/badge/license-${answers.license}-blue)<br />


 ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contribution
  ${answers.contribution}

  ## Tests
  ${answers.tests}

  ## License
  ${editLicense}
`

;
}

module.exports = generateMarkdown;
