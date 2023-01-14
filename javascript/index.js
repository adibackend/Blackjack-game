// let card[0]=7;
// card[1]=13;
let i=0;
let isalive=false
let message="Do you want to draw a new card?"
let firstcard=getrandomnumber()
let secondcard=getrandomnumber()
let resetBtn=document.getElementById("reset-btn")
// total=card[0]+card[1];
let card=[firstcard,secondcard];
let total=firstcard+secondcard
let sum=document.getElementById("sum");
let messageU=document.getElementById("messeage");
let cards=document.getElementById("cards");
function startgame(){
    
    isalive=true
    messageU.textContent=message;
    if (total==21) {
        messageU.textContent="You Got Blackjack";
    }
    else if(total>21){
        messageU.textContent="You Loose";
    }
    else{
        messageU.textContent="Want more card?";
    }
    cards.textContent="Cards : "
    for (i= 0; i < card.length; i++) {
         cards.textContent =  cards.textContent+card[i] + " ";
    }
    // cards.textContent="";
    sum.textContent= "Sum : "+ total;
}
function drawcard() {
    if (isalive==false || total>=21) {
        // console.error("sorry")
        return;
    }
   let card3=getrandomnumber();
   card.push(card3);
   total +=card3;
   startgame();

}
function getrandomnumber(){
    
    let ran=Math.floor(Math.random()*13)+1
    if(ran==1){
        return 11;
    }
    else if(ran>10){
        return 10;
    }
    else{
        return ran; 

    }
}
resetBtn.addEventListener("click",function(){
        total=0
        sum.textContent="Sum : "
        card=[];
        cards.textContent="Cards : "
        startgame()
})
// function banda(){
//     // isalive=true
    
// }