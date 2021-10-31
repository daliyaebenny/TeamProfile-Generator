// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
//const employeeArray;


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created Team Profile ')
 );
}
//function to fetch data using inquirer
function fetchEmployeeType() {
  inquirer
  .prompt([
    
    {
      type: 'list',
      message: 'Choose the employee to be added',
      name: 'employeeType',
      choices: ['Manager', 'Intern', 'Engineer', 'Generate_Profile'],
    }
  ])
  .then((data) => {
    console.log(data);
    
    switch(data.employeeType) {
        case 'Manager':
        //   const manager = new Manager();
            console.log("Manager");
            fetchEmployeeType();
          break;
        case 'Intern':
            console.log("Intern");
            fetchEmployeeType();
          break;
          case 'Engineer':
            console.log("Engineer");
            fetchEmployeeType();
          break;
          case 'Generate_Profile':
            writeToFile('./dist/fileName.html','abc');
          break;
        
        default:
          
      }

  });
}
//function to initialize app
function init() {
    fetchEmployeeType();
}

// Function call to initialize app
init();
