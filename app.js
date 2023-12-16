let boxes = document.querySelectorAll("#box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msgParagraph = document.querySelector("#msg");

let turns = true;  // playerX, player0

const winnerPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];



boxes.forEach((box) =>{
     box.addEventListener("click", () =>{
       if (turns) {
        box.innerText = "0";
        turns = false;
       } else {
        box.innerText = "X";
        turns = true;
       }
       box.disabled = true;
       checkWinner();
     });
});

const checkWinner = () =>{
    for(let pattern of winnerPattern){
       let pos1Value = boxes[pattern[0]].innerText;
       let pos2Value = boxes[pattern[1]].innerText;
       let pos3Value = boxes[pattern[2]].innerText;
       if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
           if (pos1Value === pos2Value && pos2Value === pos3Value) {
            //    console.log("winner", pos1Value);
               showWinner(pos1Value);
           }
       }
    }
};

const resetGame = () => {
    turns = true;
    enableButton(); 
    msgContainer.classList.add("hide");
}

const disableButton = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableButton = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msgParagraph.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableButton();
}


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

