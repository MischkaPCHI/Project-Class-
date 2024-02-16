const heightInput = document.querySelector('#your-height');
const weightInput = document.querySelector('#your-weight');

const bmiElement = document.querySelector('#result1');
const resultElement = document.querySelector('#result2');
const createButtonElement = document.querySelector("button");

let userInputHeight;
let userInputWeight;

const inputFieldHeight = (event) => {
    userInputHeight = event.target.value;
    console.log(userInputHeight);
}
heightInput.addEventListener('input', inputFieldHeight);


const inputFieldWeight = (event) => {
    userInputWeight = event.target.value;
    // alert("Олень!")
}
weightInput.addEventListener('input', inputFieldWeight);

const submitButtonHandler = (event) => {
    event.preventDefault();
    let bmi = userInputWeight/((userInputHeight/100)**2);
    bmiElement.textContent = bmi;
    let result;
    if(bmi>18.5 && bmi<25){
        result  = "Norm";
        }
    if(bmi<18.5){
        result = "Lower than norm"
        }
    if(bmi>25){
        result = "Higher than norm"
        }
    resultElement.textContent = result;
}
createButtonElement.addEventListener("click", submitButtonHandler);
