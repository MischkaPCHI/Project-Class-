const heightInput = document.querySelector('#your-height');
const weightInput = document.querySelector('#your-weight');

const bmiElement = document.querySelector('#result1');
const resultElement = document.querySelector('#result2');
const createButtonElement = document.querySelector("#calculate");
const resetButtonElement = document.querySelector("#clear");

let userInputHeight;
let userInputWeight;

let bmi;
let result;

const inputFieldHeight = (event) => {
    userInputHeight = event.target.value;
    if(isNaN(userInputHeight)){
        showAlertNaN();
    }
}
heightInput.addEventListener('input', inputFieldHeight);

const inputFieldWeight = (event) => {
    userInputWeight = event.target.value;
    if(isNaN(userInputWeight)){
        showAlertNaN();
    }
}
weightInput.addEventListener('input', inputFieldWeight);

const showAlertNaN = () => {
    alert("Олень! Вводи рост и вес в цифрах!");
}

const submitButtonHandler = (event) => {
    event.preventDefault();
    if ((userInputHeight===undefined && userInputWeight===undefined) || (userInputHeight===undefined || userInputWeight===undefined)){
        showAlertEmpty();
        result;
    }else{
    bmi = userInputWeight/((userInputHeight/100)**2);
    bmiElement.textContent = bmi;
    if(bmi>18.5 && bmi<25){
        result  = "Norm";
        }
    if(bmi<18.5){
        result = "Lower than norm";
        }
    if(bmi>25){
        result = "Higher than norm";
        }
    resultElement.textContent = result;
    }
}
createButtonElement.addEventListener("click", submitButtonHandler);

const resetButtonHandler = () => {
    userInputHeight = undefined;
    userInputHeight.textContent = userInputHeight;
    userInputWeight = undefined;
    userInputWeight.textContent = userInputWeight;
    bmi = "";
    bmiElement.textContent = bmi;
    result = "";
    resultElement.textContent = result;
}
resetButtonElement.addEventListener("click", resetButtonHandler);

const showAlertEmpty = () => {
    alert("Лось! Вводи  И рост И вес!!");
}
