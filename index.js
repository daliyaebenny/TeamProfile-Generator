// Include packages needed for this application

const fetchEmployeeData = require("./src/addEmployee");


function start(){
  let employees=[];
  employees=fetchEmployeeData();//fetchEmployeeData() returns ana array of objects
  console.log(employees[0]);
}
start();