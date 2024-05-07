// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    const formattedLicense = license.replace(/ /g, "%20");
    return `![License:${license}](https://img.shields.io/badge/license-${formattedLicense}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (
    license // corectly handling different license to return the correct URLs
  ) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "Boost 1.0":
      return "https://www.boost.org/LICENSE_1_0.txt";
    case "MPL 2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return ""; // No link for unknown or 'None' license
  }
  // if (license !== "None") {
  //   return `https://opensource.org/licenses/${license}`;
  // }
  // return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License\nThis project is licensed under the [${license}](${renderLicenseLink(
      license // provide no license section if no license is selected
    )}) license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
 ${renderLicenseBadge(data.license)}
 
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contribution
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions, please contact me at [GitHub](https://github.com/${
    data.github
  }) or email me at ${data.email}.
  `;
}

module.exports = generateMarkdown;
