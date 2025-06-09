let boxes=document.querySelectorAll(".box");
let res=document.querySelector("#resetbtn");
let btn=document.querySelector('#bn');
let msgg=document.querySelector('.msg');
let newbtn=document.querySelector("#newbtn");
let turnO=true;
const winpattern=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],
    [2,4,6],[3,4,5],[6,7,8],
];
const reg=()=>{
    turnO=true;
    enableBoxes();
    msgg.classList.add("hide");
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};                               
boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        console.log("Box was Clicked");
        if(turnO){
        box.innerText='O';
        turnO=false;}
    else{
        box.innerText='X';
        turnO=true;
    }
box.disabled=true;
checkwinner();});
});
const dis=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{
    btn.innerText= `congratulations,winner is ${winner}`;
    msgg.classList.remove("hide");
    dis();

}
const checkwinner=()=>{
    for(let pattern of winpattern){
        
            let pos1=boxes[pattern[0]].innerText;
           let pos2= boxes[pattern[1]].innerText;
           let pos3= boxes[pattern[2]].innerText;
           if(pos1!="" && pos2!="" && pos3!="")
           {
            if(pos1==pos2 && pos2==pos3){
                console.log("Winner",pos1);
                showwinner(pos1);
            }
           }
    }}
    newbtn.addEventListener("click",reg);
    res.addEventListener("click",reg)