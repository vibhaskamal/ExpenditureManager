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
    // var parentId = "newInputBox";
    // var elementTag = "input";
    // var elementId = getNumberOfInputBoxElements() + 1;
    // var html = "New ";
    // addElement(parentId, elementTag, elementId, html);
    console.log(getLastEditableInputBox());
    var numberOfInputBoxes = getNumberOfInputBoxElements();
  
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("inputBoxes");
    // Clear previous contents of the container
    // while (container.hasChildNodes()) {
    //     container.removeChild(container.lastChild);
    // }

    //Adding category text for the new input box
    // var span = document.getElementById("span");
    // var text = document.createTextNode("New:");
    // span.appendChild(text);
    // var textNode = document.createTextNode("New:");
    // span.style = "display: inline-block;";
    var text = document.createTextNode("New");
    // span.appendChild(text);
    container.appendChild(text);
    // container.value = "Hello";
    // container.removeChild(document.createElement("br"));

    // Create an <input> element, set its type and name attributes
    var input = document.createElement("input");
    input.id = "inputBox_" + (numberOfInputBoxes + 1);
    input.type = "text";
    input.value = 0;
    input.style = "height: 20; margin-bottom: 0;";
    input.innerHTML = "Trial";
    // var text2 = document.createTextNode("This just got added");
    // input.appendChild(text2);
    // container.appendChild(text2);
    // container.innerHTML = "This just got added";
    
    container.appendChild(input);
    
    
    // span.appendChild(document.createElement("br")); 
    // Append a line break 
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));
    // container.appendChild(document.createElement("div"));
    
  }


