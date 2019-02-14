function sum() {

    var foodInput = document.getElementById("food").value;
    var groceriesInput = document.getElementById("groceries").value;
    var otherInput = document.getElementById("other").value;

    var categories = [foodInput, groceriesInput, otherInput];
    var sum = 0;

    for (i = 0; i < categories.length; i++) { 
        var intParsedInput = parseInt(categories[i]);
        sum += intParsedInput;
      }

    document.getElementById("output").value = sum;

    
  }