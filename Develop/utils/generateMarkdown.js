// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

function generateMarkdown(answers) {
  return `# ${answers.title}
  
## Description

${answers.description}

## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

  ${answers.installation}

## Usage

${answers.usage}

## License

This project is licensed under the ${answers.license} license.

## Contributing

  ${answers.contributing}

## Tests

To run tests, run the following command:

  ${answers.tests}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at ${answers.username}.
  `;
}

module.exports = generateMarkdown;
