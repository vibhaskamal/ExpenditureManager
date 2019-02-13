var 

function myFunction() {
    if (document.getElementById("foodInfo")){
        var foodInput = document.getElementById("foodInfo").value;
        var foodValue = parseInt(foodInput);
        foodValue += 100;
        document.getElementById("output").value = foodValue;
    }
    
  }