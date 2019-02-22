function sum() {
    var sum = 0;

    var inputBoxes = getListOfEditableInpuxBoxElements();

    for (i = 0; i < inputBoxes.length; i++) {
      var intParsedInput = parseInt(inputBoxes[i].value);
      sum += intParsedInput;
    }

    document.getElementById("output").value = sum;
  }


  function getListOfEditableInpuxBoxElements(){
    var inputs;
    var index;
    var listOfEditableInputBoxes = [];

    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; ++index) {
        // Getting the list of input boxes that are not read only
        if(inputs[index].readOnly == false) {
          listOfEditableInputBoxes.push(inputs[index]);
        }
    }
    // console.log(listOfEditableInputBoxes);
    return listOfEditableInputBoxes;
  }


  function getNumberOfInputBoxElements(){
    var listOfEditableInputBoxes = getListOfEditableInpuxBoxElements();
    return listOfEditableInputBoxes.length;
  }


  function getLastEditableInputBox(){
    var editableInputBoxes = getListOfEditableInpuxBoxElements();
    return editableInputBoxes[editableInputBoxes.length - 1];
  }

  function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

  function addInputBox(){
    // console.log(getLastEditableInputBox());
    var numberOfInputBoxes = getNumberOfInputBoxElements();
  
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("inputBoxes");
    var categoryName = popUpInputBox();
    // var text = document.createTextNode("New");
    var text = document.createTextNode(categoryName);
    container.appendChild(text);

    // Create an <input> element, set its type and name attributes
    var input = document.createElement("input");
    input.id = "inputBox_" + (numberOfInputBoxes + 1);
    input.type = "text";
    input.value = 0;
    input.style = "height: 20; margin-bottom: 0; text-align:center";
    
    container.appendChild(input);
    
    // Append a line break 
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));
    
  }

  function popUpInputBox(){
    var category = prompt("Please enter a category:", "");
    if (category == null || category == "") {
      category = "New";
    }

    return category;
  }

  function removeInputBox() {
    var lastCategory = getLastEditableInputBox();
    var lastCategoryId = lastCategory.id;
    var element = document.getElementById(lastCategoryId);
    element.parentNode.removeChild(lastCategoryId);
}


