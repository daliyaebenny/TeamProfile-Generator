// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateEmployeeCard = require('./src/generatehtml');
const employees=[];
console.log("Before"+employees);

// function to write html file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Successfully created html ')
);
}
 async function start(){
  let repeat =true;
do{
  await inquirer.prompt([

  {
    type: 'input',
    name: 'role',
    message: 'Employee Role ',
  },
  
  {
    type: 'input',
    name: 'name',
    message: 'Employee Name ',
  },
  
  {
    type: 'input',
    name: 'id',
    message: 'Employee Id',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Employee email',
    
  },
  {
    type: 'number',
    name: 'officeNumber',
    message: 'Employee Office number',
    when: (data) => data.role === 'Manager',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Employee Github username',
    when: (data) => data.role === 'Engineer',
  },
  {
    type: 'input',
    name: 'school',
    message: 'Employee School',
    when: (data) => data.role === 'Intern',
  },
  {
    type: "confirm",
    name: "repeat",
    message: "Do you want to add another employee ?",
  },

])
.then((data) => {
  let emp;
  switch (data.role) {
    case 'Manager':
      emp = new Manager(data.name,data.id,data.email,data.officeNumber);
      break;
    case 'Engineer':
      emp = new Engineer(data.name,data.id,data.email,data.github);
      break;
    case 'Intern':
      emp = new Intern(data.name,data.id,data.email,data.school);
      break;
    default:
      emp = new Employee(data.name,data.id,data.email);
  }
  repeat = data.repeat;
  employees.push(emp);

});
}while(repeat);
 

writeToFile('./dist/TeamProfile.html',generateEmployeeCard(employees));
//fs.writeFile('./dist/filename.html',generateEmployeeCard(employees));

//generatecard();
}
// async function generatecard(){
//  await console.log( generateEmployeeCard(employees));  
// }
start();