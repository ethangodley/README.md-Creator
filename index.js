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

