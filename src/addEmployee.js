//const Manager = require("../lib/Manager");
const inquirer = require('inquirer');

  async function fetchEmployeeData(){
    let employees=[];
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
    repeat = data.repeat;
    employees.push(data);
  
  });
}while(repeat);
console.log(employees);
return employees;
}

module.exports=fetchEmployeeData;
