
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGAmeBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");

let turn0=true;
let count=0;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turn0=true;
    let count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",() => {

    if(turn0){
        box.innerText="O"
        turn0=false;
    }else{
        box.innerText="X"
        turn0=true;
    }
    box.disabled=true;
    count++;

    let isWinner=checkwinner();

    if(count===9 && !isWinner){
        gameDraw();
    }
    });
});


const gameDraw=() =>{
    msg.innerText=`Game Draw !!`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const  disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const showWinner = (winner) => {
    msg.innerText=`Winner is =>> ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkwinner= ()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" &&pos2val !="" &&pos3val!=""){
            if(pos1val ===pos2val && pos2val ===pos3val){
                showWinner(pos1val);
                return true;
            }
        }
    }
};

newGAmeBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

