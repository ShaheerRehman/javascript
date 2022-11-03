
function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}   

sum = sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
document.getElementById("demo").innerHTML = sum;


function check(operation) {
  var x = document.getElementById("first").value;
  var y = document.getElementById("second").value;
  x = parseInt(x);
  y = parseInt(y);
  var ans;
    if (operation==='plus'){
      ans = x+y;
    }else if (operation === 'minus'){
      ans = x-y;
    }else if (operation==='multiply'){
      ans = x*y;
    }else if (operation==='divide'){
      ans = x/y;
    }
    document.getElementById("ans").innerHTML = ans;
  }

//function that sorts an array on click of a button
function sortit() {
    var arrayin = document.getElementById("array").value;
    var x = document.getElementById("demo2").name;
    array = arrayin.split(" ");
    for (let i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i]);
    }
    sorted = sortArray(array);
    document.getElementById("sorted").innerHTML = sorted;
}

function sortArray(arr){

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
return arr;
}

function validator(){
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (name.length == 0 || email.length == 0 || password.length == 0) {
      alert("Please fill all the fields");
      if (name.length == 0) {
        document.getElementById("fullName").style.borderColor = "red";
        document.getElementById("fullName").style.backgroundColor = "salmon";
      }else if (email.length == 0) {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").style.backgroundColor = "salmon";
      } else if (password.length == 0) {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password").style.backgroundColor = "salmon";
      }
    }else if (password.length<8) {
      alert("Password must be at least 8 characters long");
    }
  }

  function tipCalc(service){
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("people").value;
    var tip;
    if (service==='outstanding'){
      tip = (bill * 0.3) / people;
    }else if (service === 'good'){
      tip = (bill * 0.2) / people;
    }else if (service==='ok'){
      tip = (bill * 0.15) / people;
    }else if (service==='bad'){
      tip = (bill * 0.1) / people;
    }else if (service==='terrible'){
      tip = (bill * 0.05) / people;
    }
    document.getElementById("tip").innerHTML = tip;
  }