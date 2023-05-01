

const buttonClassArray = ["numb1", "numb2", "numb3", "numb4", "numb5", "numb6", "numb7", "numb8", "numb9", "numb0", "plus", "multiply", "dot", "divide", "minus"];
let buttonArray = [];

const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const correctionButton = document.querySelector('.correction');

let resultDiv = document.querySelector('.result');


buttonClassArray.forEach(numberClass => {
  buttonArray.push(document.querySelector("." + numberClass));
});



buttonArray.forEach(btn => {
  btn.addEventListener('click', function () {
    resultDiv.innerHTML += btn.innerHTML;
    console.log('test');
  })
});

equalsButton.addEventListener('click', function () {
  resultDiv.innerHTML = eval(resultDiv.innerHTML);
});

clearButton.addEventListener('click', function () {
  resultDiv.innerHTML = '';
});

correctionButton.addEventListener('click', function () {
  resultDiv.innerHTML = resultDiv.innerHTML.slice(0, resultDiv.innerHTML.length - 1);
});




