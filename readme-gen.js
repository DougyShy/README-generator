const inquirer = require('inquirer');
const fs = require('fs');

console.log("README-SCRIPT");

const getLicenseBadge = license => {
    switch(license) {
        case "None":
            return '![Static Badge](https://img.shields.io/badge/no_license-chosen-blue)';
        case "Apache License 2.0":
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case "GNU General Public License v3.0":
            return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
        case "MIT License":
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'BSD 2-Clause "Simplified" License':
            return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
        case 'BSD 3-Clause "New" or "Revised" License':
            return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        case 'Boost Software License 1.0':
            return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        case 'Creative Commons Zero v1.0 Universal':
            return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
        case 'Eclipse Public License 2.0':
            return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
        case 'GNU Affero General Public License v3.0':
            return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
        case 'GNU Lesser Generic Public License v2.1':
            return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'; // 2.1?
        case 'Mozilla Public License 2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        case 'The Unlicense':
            return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
        default:
    }
}

const getBilly = () => {
    return "BILLY";
}

const generateREADME = ( { title, description, installation, usage, contributions, tests, license, githubUserName, email, additionalInfo } ) =>    
`# ${title}
${description} 

${getLicenseBadge(license)}

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributing](#contributions)
  - [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

 - The current lincense for this project is: ${license}

## Tests

${tests}

## Contributions

${contributions}

## Questions

GitHub Profile: https://github.com/${githubUserName}

E-mail: ${email}

 - Other ways to contact me:
    - ${additionalInfo}`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter an informative description of your project: ',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please add any necessary installation instructions: ',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide a brief project description: ',
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please list any contribution guidelines: ',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide any project testing instructions: ',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose which license you prefer: ',
            choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser Generic Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense' ],   
        },
        {
            type: 'input',
            name: 'githubUserName',
            message: 'Please enter your GitHub username: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your e-mail address: ',
        },
        {
            type: 'input',
            name: 'additionalInfo',
            message: 'For any questions, how else can they contact you? ',
        },
    ])
    .then(answers => {
          fs.writeFile('README.md', generateREADME(answers), err => {
            if (err) {
                console.log('Error writing to file:', err);
                return;
            }
            console.log('File write operation completed');
        });
    });