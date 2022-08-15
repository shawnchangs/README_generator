// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "No License") {
    return `![${license}](https://img.shields.io/badge/license-${license}-green)`
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// 'Apache', 'GNU', 'MIT', 'Mozilla', 'No License'

function renderLicenseLink(license) {
  let licenseLink = ""; 
    if (license === "Apache") {
      licenseLink = "https://www.apache.org/licenses/"
    } else if (license === "GNU") {
      licenseLink = "https://www.gnu.org/licenses/license-recommendations.html"
    } else if (license === "MIT") {
      licenseLink = "https://choosealicense.com/licenses/mit/"
    } else if (license === "Mozilla") {
      licenseLink = "https://choosealicense.com/licenses/mpl-2.0/"
    } else if (license === "") {
      licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "No License") {
    licenseSection = ""
  } else {
    licenseSection =
    `License: ${license} `
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
// Title, License, Description, Installation, Usage, Contribution, Tests
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
- [Description](#description)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contribution)
- [Testing](#test)
- [Contact](#GitHub, #email)

## Description
${data.description}

## License
${data.license}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Testing
${data.test}

## Contact Information
#Github: 
  https://github.com/${data.username}
#email: 
  ${data.email}

`;
}

module.exports = generateMarkdown;
