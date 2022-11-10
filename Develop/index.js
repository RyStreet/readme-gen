// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');
const markDown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'user',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe your Installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: "Describe your project's usage:",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Describe your project's contribution guidelines:",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Describe your project's tests:",
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your project license',
        choices: ['Academic Free License v3.0','Apache license 2.0','Artistic license 2.0','Boost Software License 1.0','Creative Commons license family','Do What The F*ck You Want To Public License','Educational Community License v2.0','European Union Public License 1.1','GNU General Public License family','Microsoft Public License','MIT','University of Illinois/NCSA Open Source License','zLib License']
    }
];

function writeFile(){
    return inquirer.prompt(questions)
    .then((answers) => {
    const mark = generateMarkdown(answers)
        fs.writeFile('README.md', mark, err => {
        if (err){
            console.log('Error', err)
        }
        else {
            console.log("Generating README!")
        }
    } )
})
    .catch((err) => {
        console.log(err);

})
}

writeFile()

// TODO: Create a function to write README file

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err => {
//         if(err){
//             console.log(err);
//         }
//         console.log('Creating your README file!')
//     });
// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
