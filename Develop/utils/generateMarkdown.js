// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


// if None is selected for license, function returns an empty string. Otherwise, function returns a badge with selected license.
function renderLicenseBadge(answers) {
  let importBadge = ""
  if(answers.license ==="None"){
    importBadge = ""
    return importBadge;
  }else{
    return `![badge](https://img.shields.io/badge/license-${answers.license}-blue)<br />`
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

//Returns empty string if none is selected
function renderLicenseSection(answers) {
  if (answers.license === "None") {
    return "";
  } else {
    return   `${answers.license}`
    }
  }

// TODO: Create a function to generate markdown for README



function generateMarkdown(answers) {
  
  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    BSD3clause: "https://opensource.org/licenses/BSD-3-Clause",
    Apache2: "http://www.apache.org/licenses/LICENSE-2.0",
    GPLv3: "https://www.gnu.org/licenses/gpl-3.0.html",
    GPLv2: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
    None: ""
  };
  answers.licenseLink = licenseLinks[answers.license];

  // let editLicense = (answers.license).replaceAll('_'," ")

  return `
# **${answers.title}**

## [${answers.user}](https://github.com/${answers.user}) 👋
___
${renderLicenseBadge(answers)}

 # Table of Contents 📒
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
___
  ## Description 
  ${answers.description}
___
  ## Installation 
  ${answers.installation}
___
  ## Usage 
  ${answers.usage}
___
  ## Contribution 
  ${answers.contribution}
___
  
  ## Tests  
  ${answers.tests}
  
___
  ## License 
[${renderLicenseSection(answers)}](${answers.licenseLink})
___
  ### Questions ❓
  Contact me with any additional questions:
  <br />
  💻 ${answers.email}

`

;
}

module.exports = generateMarkdown;
