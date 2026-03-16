let player=[];
let dealer=[];
let money=1000;
let gameOver=false;

function drawCard(){
return Math.floor(Math.random()*13)+1;
}

function cardValue(card){

if(card>10) return 10;
if(card===1) return 11;

return card;

}

function total(hand){

let sum=0;
let aces=0;

for(let i=0;i<hand.length;i++){

let val=cardValue(hand[i]);

sum+=val;

if(hand[i]===1){
aces++;
}

}

while(sum>21 && aces>0){
sum-=10;
aces--;
}

return sum;

}

function startGame(){

gameOver=false;

player=[drawCard(),drawCard()];
dealer=[drawCard(),drawCard()];

document.getElementById("startButtons").style.display="none";
document.getElementById("gameButtons").style.display="block";
document.getElementById("endButtons").style.display="none";

updateDisplay(true);

}

function hit(){

if(gameOver) return;

player.push(drawCard());

if(total(player)>21){
lose("Bust! Dealer Wins");
}

updateDisplay(true);

}

function stand(){

while(total(dealer)<17){
dealer.push(drawCard());
}

let p=total(player);
let d=total(dealer);

if(d>21 || p>d){
win("You Win!");
}
else if(d>p){
lose("Dealer Wins");
}
else{
draw();
}

updateDisplay(false);

}

function win(message){

let bet=parseInt(document.getElementById("bet").value);

if(total(player)===21 && player.length===2){
money+=bet*1.5;
}
else{
money+=bet;
}

document.getElementById("result").innerHTML=message;

endRound();

}

function lose(message){

let bet=parseInt(document.getElementById("bet").value);

money-=bet;

document.getElementById("result").innerHTML=message;

endRound();

}

function draw(){

document.getElementById("result").innerHTML="Push";

endRound();

}

function endRound(){

gameOver=true;

updateMoney();

document.getElementById("gameButtons").style.display="none";
document.getElementById("endButtons").style.display="block";

}

function updateDisplay(hideDealer){

let playerDiv=document.getElementById("player");
let dealerDiv=document.getElementById("dealer");

playerDiv.innerHTML="";
dealerDiv.innerHTML="";

player.forEach(card=>{
playerDiv.innerHTML+=card+" ";
});

dealer.forEach((card,i)=>{

if(i===0 && hideDealer){
dealerDiv.innerHTML+="🂠 ";
}
else{
dealerDiv.innerHTML+=card+" ";
}

});

document.getElementById("playerTotal").innerHTML="Total: "+total(player);

if(hideDealer){
document.getElementById("dealerTotal").innerHTML="Total: ?";
}
else{
document.getElementById("dealerTotal").innerHTML="Total: "+total(dealer);
}

}

function updateMoney(){

document.getElementById("money").innerHTML=Math.floor(money);

}

function resetGame(){

player=[];
dealer=[];
gameOver=false;

document.getElementById("player").innerHTML="";
document.getElementById("dealer").innerHTML="";
document.getElementById("playerTotal").innerHTML="";
document.getElementById("dealerTotal").innerHTML="";
document.getElementById("result").innerHTML="";

document.getElementById("startButtons").style.display="block";
document.getElementById("gameButtons").style.display="none";
document.getElementById("endButtons").style.display="none";

}
