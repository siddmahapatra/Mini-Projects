let input = document.getElementById('inputplace');
let output = document.getElementById('outputplace');
let buttons = document.querySelectorAll("button");

let inputString = "";
let outputString= "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == '='){
            inputString = eval(inputString);
            output.value = inputString;
        } else if(e.target.innerHTML == 'AC'){
            inputString = '';
            input.value = inputString;
            output.value = inputString;
        } else if(e.target.innerText == ''){
            inputString = inputString.substring(0, inputString.length-1);
            input.value = inputString;
        }
        
        else {
            inputString += e.target.innerHTML;
            input.value = inputString;
        }
    })    
});