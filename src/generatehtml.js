function employeeCheck(employee){
    let data ='';
switch(employee.getRole()){
    case 'Manager':
     data= `<li><span>&#9742;</span>${employee.getOfficeNumber()}</li>`;
     
    break;
    case 'Engineer':
     data = `<li><i class="fa fa-github"></i><a href = "https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>`;
    break;
    case 'Intern':
    data =  `<li><span class="iconify" data-icon="mdi:school"></span>${employee.getSchool()}</li>`;
    break;
}
console.log(employee.getRole,data);
return data;
}


function generateEmployeeCard(employees){
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="./teamprofile.css">
        </head>
    <body>
    <h1>Team Profile</h1>
    <div class="card-group">
    ${employees.map(employee =>` 
  <div class="card">
    <p class="card-title"> ${employee.getName()}</p>
    <div class="card-body">
      <h5 class="card-title1">${employee.getRole()}</h5>
      <ul>
      <li>${employee.getId()}</li>
      <li><span>&#9993;</span><a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
     ${employeeCheck(employee)}
      </ul>
      
    </div>
  </div>
`)}
<script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
`;
    
}

module.exports = generateEmployeeCard;
