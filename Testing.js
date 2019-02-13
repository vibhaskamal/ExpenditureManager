document.getElementById("testing").innerHTML = "Hello JS";

console.log("Testing the functioning of console.log()");
var x = myFunction();

function myFunction() {
    if (document.getElementById("foodInfo")){
        var foodInput = document.getElementById("foodInfo").value;
        console.log(foodInput);
        console.log("Hello");
    }
    
  }