function spin(){

let r1 = Math.floor(Math.random()*9)+1;
let r2 = Math.floor(Math.random()*9)+1;
let r3 = Math.floor(Math.random()*9)+1;

document.getElementById("reels").innerHTML =
r1 + " " + r2 + " " + r3;

let result = "";

if(r1===r2 && r2===r3){
result = "🎉 JACKPOT!";
}
else if(r1===r2 || r2===r3){
result = "Small Win!";
}
else{
result = "Try Again";
}

document.getElementById("result").innerHTML = result;

}

