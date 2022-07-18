const inquirer = require('inquirer'); // creates variable inquirer which takes the form of function require('inquirer') for prompting users with questions
const fs = require('fs'); // creates variable fs which takes the form of function require('fs') for reading and writing data to files

// Function prompts users with various questions related to the data of a README.md file and stores the answers. Once README.md is filled out the data is written to README.md file.
function getContent() {

    // inquirer.prompt contains question prompts to the user and stores the response of each question.
    inquirer
        .prompt([
            {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            },
            {
                type: 'list',
                message: 'What licence is your project under?',
                name: 'licence',
                choices: [
                    'None',
                    'Apache Licence 2.0', 
                    'GNU General Public Licence v3.0',
                    'MIT Licence',
                    'BSD 2-Clause "Simplified" Licence',
                    'BSD 3-Clause "New" or "Revised" Licence',
                    'Boost Software Licence 1.0',
                    'Creative Commons Zero v1.0 Universal',
                    'Eclipse Public Licence 2.0',
                    'GNU Affero General Public Licence v3.0',
                    'GNU General Public Licence v2.0',
                    'GNU Lesser General Public Licence v2.1',
                    'Mozilla Public Licence 2.0',
                    'The Unlicence'
                ],
            },
            {
            type: 'input',
            message: 'The purpose of this project is: ?',
            name: 'description',
            },
            {
                type: 'input',
                message: 'To correctly install this project: ?',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'To use this project: ? (include image links)',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'To contribute to this project: ?',
                name: 'contributing',
            },
            {
                type: 'input',
                message: 'To test the project: ?',
                name: 'tests',
            },
            {

                type: 'input',
                message: 'What is your github username?',
                name: 'github',
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email',
            },
        ])
        .then((answers) => {
            console.log(answers);
            fs.writeFile('README.md', createWrite(answers), (err) => err ? console.error(err) : console.log('Success!')); // writes data to README.md file
    });

}

// function creates a variable write which contains all content of readme.md file. The function imports user input data and exports the write variable.
function createWrite ({title, licence, description, installation, usage, contributing, tests, github, email}) {

    // creates url for importing badge image for licence type
    const badgeUrl = licence.replaceAll(" ", "%20");

    // creates String variable write that contains README.md template and user input for custom README.md file
    const write = 
`# ${title} \n
## Licencing
![licence badge](https://img.shields.io/badge/licence-${badgeUrl}-brightgreen) \n 
This licence is covered under the licence of ${licence}. \n
## Table Of Contents
[licencing](#licencing) \n
[description](#description) \n
[Installation](#installation) \n
[Usage](#usage) \n
[Contributing](#contributing) \n
[Tests](#tests) \n
[Questions](#questions) \n
## Description
The purpose of this project is ${description} \n
## Installation
To correctly install this project ${installation} \n
## Usage
To use this project ${usage} \n
## Contributing 
To contribute to this project ${contributing} \n
## Tests
To test the project ${tests} \n 
## Questions 
Please find the link to my github profile below, along with my email address should a user or developer have any further questions \n
https://github.com/${github} ${email}`; 
    return write; // returns string variable write for
}
getContent(); // calls getContent function

