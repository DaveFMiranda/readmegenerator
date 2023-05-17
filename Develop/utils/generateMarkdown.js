// Function to render the license badge
function renderLicenseBadge(license) {
  // Leaves a blank if user selects "none" for license
  if (license === "None") {
    return "";
    // Pulls in a license badge from shields.io
  } else {
    var formattedLicense = license.replace(/\s+/g, "");
    var badgeURL = `https://img.shields.io/badge/License-${formattedLicense}-blue`;
    return badgeURL;
  }
}

// Creates the markdown skeleton for the README and imports user-generated answers
function generateMarkdown(answers) {
  const badgeURL = renderLicenseBadge(answers.license);
  return `# ${answers.title}

![](${badgeURL})

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

If you have any questions about the repo, open an issue or contact me directly at [${answers.email}](mailto:${answers.email}). You can find more of my work at [www.GitHub.com/${answers.username}](https://www.github.com/${answers.username}).
  `;
}

// Makes the above function available to other files
module.exports = generateMarkdown;
