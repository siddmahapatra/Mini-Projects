let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn0 =true;  // player X, player O
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0) {
            box.innerText = "O";
            box.style.color = "green";
            turn0 = false;
        } else {
            box.innerText = "X";
            box.style.color = "red";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    })
})

const gameDraw = () => {
    msg.innerText = "Game was a Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
    hideResetBtn();
}

const resetGame = () => {
    count = 0;
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    unhideResetBtn();
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const hideResetBtn = () => {
    resetbtn.classList.add("hide");
}

const unhideResetBtn = () => {
    resetbtn.classList.remove("hide");
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations!!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    hideResetBtn();
}

const checkWinner = () => {
    for( let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click",  resetGame);
resetbtn.addEventListener("click", resetGame);