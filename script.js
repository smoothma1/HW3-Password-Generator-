//generate random password 
function generate(){

//set password length/complexuty
let complexity = document.getElementById("slider").value;

//possible password values
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"

let password ="";

//create for loop to choose password characters
for(var i = 0; i <= complexity; i++){
    password = password + values.chartAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}


document.getElementById("display").value = password;
}