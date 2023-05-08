let color = "black";

document.addEventListener("DOMContentLoaded", function(){
    let btnSelect = document.querySelector("#popup");
    createBoard(16);


btnSelect.addEventListener("click", function(){
    let size = getSize();
    createBoard(size);
})

})




function createBoard(size){
let board = document.querySelector(".container");
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

let numDivs = size * size;
for(let i=0; i < numDivs;  i++){
    let box = document.createElement("div");
    box.addEventListener("mouseover", colorBox);
    board.insertAdjacentElement("beforeend", box);
}
}


function getSize(){
    let input = prompt("Type a size for the board");
    let message = document.querySelector("#message");

    if (input == ""){
        message.textContent = "Please provide a number";
    }else if(input <= 0 || input > 100){
        message.textContent = "Size should be more than 0 and NO more than 100";
    }else{
        message.textContent = "Board is ready!";
    }
    return input;
}

function colorBox(){
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100% , 50%)`
    }else{
        this.style.backgroundColor = 'black'
    }

}

function setColor(colorChoice){
     color = colorChoice;

}

function resetBoard(){
    let boxes = document.querySelectorAll("div")
    boxes.forEach((div) => div.style.backgroundColor = "white");
}