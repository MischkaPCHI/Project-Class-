const heightInput = document.querySelector('#your-height');
const weightInput = document.querySelector('#your-weight');

let userInputHeight;
const inputFieldHeight = (event) => {
    userInputHeight = event.target.value;
    console.log(userInputHeight);
}
heightInput.addEventListener('input', inputFieldHeight);

let userInputWeight;
const inputFieldWeight = (event) => {
    userInputWeight = event.target.value;
    alert("Олень!")
}
weightInput.addEventListener('input', inputFieldWeight);

const createButtonElement = document.querySelector("button");

const bmiElement = document.querySelector('#result1');
const resultElement = document.querySelector('#result2');

const submitButtonHandler = (event) => {
    event.preventDefault();
    let bmi = userInputWeight/((userInputHeight/100)**2);
    bmiElement.textContent = bmi;
    let result;
    if(bmi>18.5 && bmi<25){
        result  = "Norm";
        }
    if(bmi<18.5){
        result = "Lower then norm"
        }
    if(bmi>25){
        result = "Higher then norm"
        }
    resultElement.textContent = result;
}

createButtonElement.addEventListener("click", submitButtonHandler);
